import React, { useState } from 'react'
import styles from './styles.module.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';

const itemsFromBackend = [
    {
        id: uuid(),
        content:'First task'
    },
    {
        id: uuid(),
        content:'Second task'
    }
]
const [columnsFromBackend] = [
    {
        [uuid()]:{
            name:'Todo',
            items:[itemsFromBackend]
        }

    }
]

export const TodoList = () => {
   
    const [columns,setColumns] = useState(columnsFromBackend)
  return (
    <div className={styles.todolist_container}>
        <DragDropContext onDropEnd={result=>console.log(result)}>
            {Object.entries(columns).map(([id,columns])=>{
                  return (
                    <Droppable droppableId={id}>
                        {(provided,snapshot)=>{
                            return (
                                <div {...provided.droppableProps}
                                    ref = {provided.innerRef}
                                    styles={{
                                        backGround:snapshot.isDraggingOver?'lightblue':'lightgray',
                                        padding: 4,
                                        width: 250,
                                        minHeight:500
                                    }}
                                >
                                    {
                                        columns.items.map((item,index)=>{
                                            return (
                                                <Draggable 
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided,snapshot)=> {
                                                        return (
                                                            <div
                                                                ref = {provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    userSelect:'none',
                                                                    padding: 16,
                                                                    margin: '0 0 8px 0',
                                                                    minHeight: ' 50px',
                                                                    backgroundColor:snapshot.isDragging?'#263B4A':'#456C86',
                                                                    color:'white',
                                                                    ...provided
                                                                }}
                                                            >

                                                            </div>
                                                        )
                                                    }}
                                                </Draggable>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }}
                    </Droppable>
                  )
            })})
        </DragDropContext>
    </div>
  )
}
