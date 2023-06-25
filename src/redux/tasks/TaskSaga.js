import { all, call, put, takeEvery } from "redux-saga/effects";
import TaskAction from "./TaskAction";
import TaskFactory from "./TaskFactory";
import WorkspaceAction from "../workspaces/WorkspaceAction";
function* createTaskSaga(action) {
  const { data, workspaceId, callback } = action.payload;
  const result = yield call(() => TaskFactory.createNewTask(data, workspaceId));
  try {
    yield put({
      type: TaskAction.SUCCESS_CREATE_TASK,
      payload: result,
    });
    if(callback?.toast)
    {
      callback.toast(result.data.message);
    }
    yield put({
      type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      payload: {
        data: workspaceId,
      },
    });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* createSubtaskSaga(action) {
  const { data,workspaceId,callback} = action.payload;
  console.log('data saga',data);
  const result = yield call(() => TaskFactory.createNewSubtask(data, workspaceId));
  console.log('created subtask', result);
  try {
    // yield put({
    //   type: TaskAction.SUCCESS_CREATE_SUBTASK,
    //   payload: result,
    // });
    yield put({
      type: TaskAction.REQUEST_GET_DETAIL_TASK,
      payload: {
        data: {
          taskId:data.taskItemId
        },
      },
    });
    if(callback?.handleCloseCreateSubtask)
    {
      callback?.handleCloseCreateSubtask();
    }
    } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* editTaskSaga(action) {
  const { callback,update_data,workspaceId,taskId} = action.payload.data;
  console.log('saga',action.payload.data)
  const result = yield call(() => TaskFactory.editTask(update_data,taskId,workspaceId));
  console.log('update',result)
  try {
    yield put({
      type: TaskAction.REQUEST_GET_DETAIL_TASK,
      payload: {
        data: {
          taskId
        },
      },
    });
    yield put({
      type: TaskAction.SUCCESS_EDIT_TASK,
      payload: result,
    });
    if(callback?.handleCloseComment)
    {
      callback?.handleCloseComment();
    }
    if(callback?.handleCloseDescription)
    {
      callback?.handleCloseDescription()
    }
    
    yield put({
      type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      payload: {
        data: {
          id: parseInt(workspaceId)
        },
      },
    });
    
    
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* moveTaskSaga(action) {
  const { data,taskId,workspaceId} = action.payload;

  const result = yield call(() => TaskFactory.moveTask(data,taskId,workspaceId));

  try {
    yield put({
      type: TaskAction.SUCCESS_MOVE_TASK,
      payload: result,
    });
    yield put({
      type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      payload: {
        data: workspaceId,
      },
    });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* deleteTaskSaga(action) {
  const { id,workspaceId,callback} = action.payload;
  const result = yield call(() => TaskFactory.deleteTask(id,workspaceId));
  try {
    if(result.data.isSuccess)
    {
      yield put({
        type: TaskAction.SUCCESS_DELETE_TASK,
        payload: result,
      });
      if(callback?.toast)
      {
        callback.toast(result.data.message);
      }
      yield put({
        type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
        payload: {
          data:workspaceId,
        },
      });
    }
    yield put({
      type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      payload: {
        data: workspaceId,
      },
    });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* detailTaskSaga(action) {
  const {taskId} = action.payload.data;
  const result = yield call(() => TaskFactory.detailTask(taskId));
  try {
    if(result.data.isSuccess)
    {
      yield put({
        type: TaskAction.SUCCESS_GET_DETAIL_TASK,
        payload: result.data,
      });
    }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* assignTaskMemberSaga(action) {
  const {workspaceId,taskId,data,callback} = action.payload;
  const result = yield call(() => TaskFactory.assignTaskMember(data,workspaceId,taskId));
  try {
    if(callback?.toast) 
    {
      callback.toast(result?.data?.message)
    }
    if(result.data.isSuccess)
    {
      yield put({
        type: TaskAction.REQUEST_GET_DETAIL_TASK,
        payload: {
          data: {
            taskId
          }
        },
      });

    }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* createNewLabelSaga(action) {
  const {data,taskId,callback,workspaceId} = action.payload;
  const result = yield call(() => TaskFactory.createNewLabel(data));
  try {
    if(result.data.isSuccess)
    {
      yield put({
        type: WorkspaceAction.REQUEST_GET_LIST_LABELS_WORKSPACE,
        payload: {
          workspaceId
        },
      });
      if(callback?.toast)
      {
        callback.toast(result.data.message);
      }
      if(callback?.handleCloseCreateLabel)
      {
        callback.handleCloseCreateLabel();
      }
      
      yield put({
        type: TaskAction.REQUEST_GET_DETAIL_TASK,
        payload: {
          data: {
            taskId
          }
        },
      });
    }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* addLabelSaga(action) {
  const {data,taskId} = action.payload;
  const result = yield call(() => TaskFactory.addLabel(data,taskId));
  try {
    if(result.data.isSuccess)
    {
      yield put({
        type: TaskAction.REQUEST_GET_DETAIL_TASK,
        payload: {
          data: {
            taskId
          }
        },
      });
    }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* postCommentSaga(action) {
  const {data,workspaceId,taskId,callback} = action.payload;
  const result = yield call(() => TaskFactory.postComment(data,workspaceId));
  try {
    if(result.data.isSuccess)
    {
      yield put({
        type: TaskAction.REQUEST_GET_DETAIL_TASK,
        payload: {
          data: {
            taskId
          }
        },
      });
      if(callback?.handleCloseComment)
      {
        callback?.handleCloseComment();
      }
    }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* deleteCommentSaga(action) {
  const { commentId,taskId} = action.payload.data;
  const result = yield call(() => TaskFactory.deleteComment(commentId));
  try {
    if(result.data.isSuccess)
    {
      yield put({
        type: TaskAction.SUCCESS_DELETE_COMMENT_TASK,
        payload: result,
      });
      yield put({
        type: TaskAction.REQUEST_GET_DETAIL_TASK,
        payload: {
          data:{
            taskId
          }
        },
      });
    }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* deleteSubtaskSaga(action) {
  const { subtaskId,workspaceId,callback,taskId} = action.payload.data;
  const result = yield call(() => TaskFactory.deleteSubtask(workspaceId,subtaskId));
  console.log('deleted subtask',result);
  try {
    if(result.data.isSuccess)
    {
      yield put({
        type: TaskAction.REQUEST_GET_DETAIL_TASK,
        payload: {
          data:{
            taskId
          }
        },
      });
      if(callback?.toast){
        callback?.toast(result.data?.message)
      }
    }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}
// function* changeStatusSubtaskSaga(action) {
//   const {update_data,workspaceId,taskId} = action.payload.data;
//   console.log('subtask change saga')
//   const result = yield call(() => TaskFactory.changeStatusSubask(update_data,taskId,workspaceId));
//   console.log('update status subtask saga',result)
//   try {
//     yield put({
//       type: TaskAction.REQUEST_GET_DETAIL_TASK,
//       payload: {
//         data: {
//           taskId
//         },
//       },
//     });
//     yield put({
//       type: TaskAction.SUCCESS_CHANGE_STATUS_SUBTASK,
//       payload: result,
//     });
//   } catch (e) {
//     console.log("Có lỗi xảy ra", e);
//   }
// }
function* editSubtaskSaga(action) {
  const {update_data,workspaceId,taskId,id,callback} = action.payload.data;
  console.log('subtask edit saga',action)
  const result = yield call(() => TaskFactory.editSubtask(update_data,id,workspaceId));
  console.log('subtask edit result',result)
  try {
    yield put({
      type: TaskAction.REQUEST_GET_DETAIL_TASK,
      payload: {
        data: {
          taskId
        },
      },
    });
    if(callback?.handleCloseEditSubtask)
    {
      callback.handleCloseEditSubtask();
    }
    yield put({
      type: TaskAction.SUCCESS_EDIT_SUBTASK,
      payload: result,
    });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* getTasksByMemberSaga(action) {
  const {workspaceId,memberId} = action.payload.data;
  const result = yield call(() => TaskFactory.getTasksByMember(workspaceId,memberId));
  console.log('result get tasks by member',result?.data);
  try {
      yield put({
        type: TaskAction.SUCCESS_GET_TASKS_BY_MEMBER,
        payload: {
          data:result?.data
        },
      });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}
function* extendDueDateTaskSaga(action) {
  const {data,workspaceId,taskId,callback} = action.payload;
  const result = yield call(() => TaskFactory.extendDueDateTask(data,workspaceId));
  console.log('exxten result',result)
  try {
    yield put({
      type: TaskAction.REQUEST_GET_DETAIL_TASK,
      payload: {
        data: {
          taskId
        },
      },
    });
    if(callback?.handleCloseExtendDueDate)
    {
      callback.handleCloseExtendDueDate();
    }
    if(callback?.toast)
    {
      callback.toast(result?.data?.message);
    }
    yield put({
      type: TaskAction.SUCCESS_EDIT_SUBTASK,
      payload: result,
    });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* acceptExtendDateTaskSaga(action) {
  const {callback,workspaceId,memberTaskId,taskId} = action.payload;
  const result = yield call(() => TaskFactory.acceptExtendDueDateTask(memberTaskId,workspaceId));
  console.log('exxten result',result)
  try {
    if(result?.data?.isSuccess)
    {
      yield put({
        type: TaskAction.REQUEST_GET_DETAIL_TASK,
        payload: {
          data: {
            taskId: taskId
          },
        },
      });
      if(callback?.toast)
      {
        callback.toast(result?.data?.message);
      }
      yield put({
        type: TaskAction.SUCCESS_ACCEPT_EXTEND_DATE,
        payload: result,
      });
    }
    else 
    {
      if(callback?.toast)
      {
        callback.toast(result?.data?.message);
      }
    }
   
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* rejectExtendDateTaskSaga(action) {
  const {callback,workspaceId,memberTaskId,taskId} = action.payload;
  const result = yield call(() => TaskFactory.rejectExtendDueDateTask(memberTaskId,workspaceId));
  console.log('exxten result',result)
  try {
    if(result?.data?.isSuccess)
    {
      yield put({
        type: TaskAction.REQUEST_GET_DETAIL_TASK,
        payload: {
          data: {
            taskId: taskId
          },
        },
      });
      if(callback?.toast)
      {
        callback.toast(result?.data?.message);
      }
      yield put({
        type: TaskAction.SUCCESS_REJECT_EXTEND_DATE,
        payload: result,
      });
    }
    else 
    {
      if(callback?.toast)
      {
        callback.toast(result?.data?.message);
      }
    }
   
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}
function* getTaskSaga() {
  yield takeEvery(TaskAction.REQUEST_CREATE_TASK, createTaskSaga);
  yield takeEvery(TaskAction.REQUEST_MOVE_TASK, moveTaskSaga);
  yield takeEvery(TaskAction.REQUEST_EDIT_TASK, editTaskSaga)
  yield takeEvery(TaskAction.REQUEST_DELETE_TASK, deleteTaskSaga);
  yield takeEvery(TaskAction.REQUEST_GET_DETAIL_TASK, detailTaskSaga);
  yield takeEvery(TaskAction.REQUEST_ASSIGN_TASK_MEMBERS, assignTaskMemberSaga)
  yield takeEvery(TaskAction.REQUEST_CREATE_NEW_LABEL, createNewLabelSaga)
  yield takeEvery(TaskAction.REQUEST_ADD_LABEL, addLabelSaga)
  yield takeEvery(TaskAction.REQUEST_POST_COMMENT, postCommentSaga)
  yield takeEvery(TaskAction.REQUEST_DELETE_COMMENT_TASK, deleteCommentSaga)
  yield takeEvery(TaskAction.REQUEST_CREATE_SUBTASK, createSubtaskSaga)
  yield takeEvery(TaskAction.REQUEST_DELETE_SUBTASK, deleteSubtaskSaga)
  yield takeEvery(TaskAction.REQUEST_EDIT_SUBTASK, editSubtaskSaga)
  yield takeEvery(TaskAction.REQUEST_GET_TASKS_BY_MEMBER, getTasksByMemberSaga);
  yield takeEvery(TaskAction.REQUEST_EXTEND_DUE_DATE, extendDueDateTaskSaga);
  yield takeEvery(TaskAction.REQUEST_ACCEPT_EXTEND_DATE, acceptExtendDateTaskSaga);
  yield takeEvery(TaskAction.REQUEST_REJECT_EXTEND_DATE, rejectExtendDateTaskSaga);

  
}
export default function* TaskSaga() {
  yield all([getTaskSaga()]);
}
