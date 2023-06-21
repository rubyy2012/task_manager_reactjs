import React from "react";
import styles from "./styles.module.scss";
import { DragDropContext } from "react-beautiful-dnd";
import CreateTask from "../../../components/create-task/CreateTask";
import { useState } from "react";
import OrderApi from "../../../../api/OrderApi";
import ListTasks from "../../../components/ListTasks/ListTasks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import WorkspaceAction from "../../../../redux/workspaces/WorkspaceAction";
import { useSelector } from "react-redux";
import TaskAction from "../../../../redux/tasks/TaskAction";
const ListViewContainer = () => {
  const dispatch = useDispatch();

  const [openCreateTask, setOpenCreateTask] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    dispatch({
      type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      payload: {
        data: parseInt(id),
      },
    });
    dispatch({
        type: WorkspaceAction.REQUEST_GET_LIST_CARDS,
        payload: {
          data: parseInt(id)
        }
    })
    dispatch({
      type: WorkspaceAction.REQUEST_GET_LIST_MEMBERS,
      payload: {
        data: parseInt(id)
      }
    })
  }, [id]);
  const { detailProject } = useSelector((state) => ({
    detailProject: state.workspace.detailProject,
  }));
 
  const [tabs, setTabs] = useState();
  useEffect(()=>{
    setTabs(detailProject?.data?.cards)
  },[detailProject])


  const HandleOnDragEnd = (result) => {
    const { source, destination,draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //handle send request
    const sourceColIndex = tabs?.findIndex(
      (item) => item?.id.toString() === source.droppableId
    );
    
    const desColIndex = tabs?.findIndex(
      (item) => item.id.toString() === destination.droppableId
      );
      
      const sourceRowIdx = source.index;
      const desRowIdx = destination.index;
    //in the same column
    if (destination.droppableId === source.droppableId) {
      const sourceCol = tabs[sourceColIndex];
      const sourceTasks = sourceCol.taskItems[sourceRowIdx];
      const destinationTasks = sourceCol.taskItems[desRowIdx];
      tabs[sourceColIndex].taskItems[desRowIdx] = sourceTasks;
      tabs[sourceColIndex].taskItems[sourceRowIdx] = destinationTasks;
      setTabs(tabs);
       //handle request API 
       const sourceCardId = tabs[sourceColIndex].id;
       const desCardId = tabs[desColIndex].id;

       dispatch({
         type: TaskAction.REQUEST_MOVE_TASK,
         payload: {
           data: {
               before: {
                 cardId: sourceCardId,
                 index: sourceRowIdx
               },
               after: {
                 cardId: desCardId,
                 index: desRowIdx
               }
           },
           taskId: parseInt(draggableId),
           workspaceId:parseInt(id)
         }
       })
    }
    // different column
    if (destination.droppableId !== source.droppableId) {
      const sourceCol = tabs[sourceColIndex];
      const desCol = tabs[desColIndex];
      const sourceTasks = sourceCol.taskItems;
      const destinationTasks = desCol.taskItems;
      const [removed] = sourceTasks.splice(sourceRowIdx, 1);
      destinationTasks.splice(desRowIdx, 0, removed);
      tabs[sourceColIndex].taskItems = sourceTasks;
      tabs[desColIndex].taskItems = destinationTasks;
      const newTab = tabs;
      setTabs(newTab);

      //handle request API 
      const sourceCardId = tabs[sourceColIndex].id;
      const desCardId = tabs[desColIndex].id;
      dispatch({
        type: TaskAction.REQUEST_MOVE_TASK,
        payload: {
          data: {
              before: {
                cardId: sourceCardId,
                index: sourceRowIdx
              },
              after: {
                cardId: desCardId,
                index: desRowIdx
              }
          },
          taskId: parseInt(draggableId),
          workspaceId:parseInt(id)
        }
      })
    }
    console.log(tabs);
  };
  return (
    <div className={styles.alltasks_container}>
      <DragDropContext onDragEnd={HandleOnDragEnd}>
        {tabs?.map((tab) => (
          <ListTasks
            id={tab?.id.toString()}
            tag={tab?.name}
            card = {tab}
            taskQuantity={tab.taskQuantity}
            tasks={tab?.taskItems}
          />
        ))}
      </DragDropContext>
      <CreateTask
        setOpenCreateTask={setOpenCreateTask}
        openCreateTask={openCreateTask}
      />
    </div>
  );
};

export default ListViewContainer;
