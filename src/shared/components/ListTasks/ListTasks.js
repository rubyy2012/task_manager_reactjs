import React from 'react'
import styles from './styles.module.scss';
import Task from '../Task/Task';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
const ListTasks = ({tag,taskQuantity,tasks,id,card}) => {
  const [toggle,setToggle] = useState(true)
  const [taskDetailForm,setOpenTaskDetailForm] = useState(false);
  const taskItems = card.taskItems;
  
  return (
        <div className={styles.listtasks_container}>      
          <div className={styles.listtasks_body}>
            <div 
              onClick = {()=>setToggle(!toggle)}
              className={styles.listtasks_title}>
                {
                  toggle? <IoIosArrowUp className={styles.dropdown_icon}/>
                  : <IoIosArrowDown className={styles.dropdown_icon}/>
                }
              <p className={styles.tag_name}>
                {tag}
              </p>
              <span>({taskQuantity})</span>
            </div>
           
            {
              toggle&&
              <div className={styles.listtasks_content}>
                <Droppable 
                  isDropDisabled={false}
                  droppableId={id}>
                {
                  (provided)=> (
                  <div 
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={styles.listtasks_group}>
                       {
                          tasks.length===0&& (
                            <div className={styles.placeholder}>
                              {provided.placeholder}
                              <p>Bạn chưa có task nào!</p>
                            </div>
                          )
                        }
                      {
                        taskItems?.map((task,index)=>(
                            <Draggable
                            key={task?.id}
                            index={index}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            draggableId={task?.id.toString()}>
                                {
                                (provided) => (
                                    <Task
                                    myref = {provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    task = {task}
                                    link = 'detail'
                                  />
                                )
                              }
                          </Draggable>))
                      }
                    </div>
                )}
              </Droppable>
                
            </div>
            }
            
          </div>
      </div>
  )
}
export default ListTasks;
