import React from 'react'
import styles from './styles.module.scss'
import { Button } from '@mui/material'
import { DragDropContext } from 'react-beautiful-dnd'
import CreateTask from '../../../components/create-task/CreateTask'
import { useState } from 'react'
import OrderApi from '../../../../api/OrderApi'
import ListTasks from '../../../components/ListTasks/ListTasks'
import TaskDetailContainer from '../../../containers/users/task-detail-container/TaskDetailContainer'
const ListViewContainer = () => {
    const initialState = OrderApi.cards;
    const [tabs,setTabs] = useState(initialState)
    const [openCreateTask,setOpenCreateTask] = useState(false);
    const HandleOnDragEnd = (result) => 
    {
    
          const {source, destination} = result;
          if (!destination) {
            return;
          }
          if(destination.droppableId===source.droppableId&&
            destination.index===source.index)
            {
              return;
            }
          //handle
          const sourceColIndex = tabs?.findIndex(item=>item.id.toString()=== source.droppableId);
          const desColIndex = tabs?.findIndex(item=>item.id.toString() === destination.droppableId)
          const sourceRowIdx = source.index;
          const desRowIdx = destination.index;
          //in the same column
          if(destination.droppableId===source.droppableId)
          {
            const sourceCol = tabs[sourceColIndex];
            const sourceTasks = sourceCol.taskItems[sourceRowIdx];
            const destinationTasks = sourceCol.taskItems[desRowIdx];
            tabs[sourceColIndex].taskItems[desRowIdx] = sourceTasks;
            tabs[sourceColIndex].taskItems[sourceRowIdx] = destinationTasks;
            setTabs(tabs);
          }
          // different column
          if (destination.droppableId!==source.droppableId)
          {
            const sourceCol = tabs[sourceColIndex];
            console.log('sourceCol',sourceCol)
            const desCol = tabs[desColIndex];
            const sourceTasks = sourceCol.taskItems;
            console.log('sourceTasks'.sourceTasks);
            const destinationTasks = desCol.taskItems;
            console.log('destinationTasks'.destinationTasks);
            const [removed] = sourceTasks.splice(sourceRowIdx, 1);
            destinationTasks.splice(desRowIdx,0,removed);
            tabs[sourceColIndex].taskItems= sourceTasks;
            tabs[desColIndex].taskItems = destinationTasks;
            // console.log(destinationTasks)
            const newTab = tabs;
            setTabs(newTab);
          }
          console.log(tabs);
          
        }
  return (
    <div className={styles.alltasks_container}>
        <DragDropContext onDragEnd={HandleOnDragEnd}>     
            {
            tabs?.map(tab=> (
                <ListTasks 
                id = {tab?.id.toString()}
                tag = {tab?.name}
                number = '8'
                tasks = {tab?.taskItems}/>
            ))
            }
        </DragDropContext>
        <CreateTask
        setOpenCreateTask = {setOpenCreateTask}
        openCreateTask = {openCreateTask}
        />  
  </div>
  )
}

export default ListViewContainer