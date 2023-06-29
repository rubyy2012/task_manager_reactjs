import { all, call, put, takeEvery } from "redux-saga/effects";
import TaskAction from "./TaskAction";
import TaskFactory from "./TaskFactory";
import WorkspaceAction from "../workspaces/WorkspaceAction";
import { toast } from "react-toastify";
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
    // yield put({
    //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
    //   payload: {
    //     data:{
    //       workspaceId
    //     },
    //   },
    // });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* createSubtaskSaga(action) {
  const { data,workspaceId,callback} = action.payload;
  yield call(() => TaskFactory.createNewSubtask(data, workspaceId));
  try {
    yield put({
      type: TaskAction.REQUEST_GET_DETAIL_TASK,
      payload: {
        data: {
          taskId:data.taskItemId
        },
      },
    });
    // yield put({
    //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
    //   payload: {
    //     data:{
    //       workspaceId
    //     },
    //   },
    // });
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
  console.log('workspaceId',workspaceId)
  const result = yield call(() => TaskFactory.editTask(update_data,taskId,workspaceId));
  console.log('result edit',result)
  try {
    // yield put({
    //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
    //   payload: {
    //     data: {
    //       taskId
    //     },
    //   },
    // });
    // yield put({
    //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
    //   payload: {
    //     data: {
    //       workspaceId
    //     }
    //   },
    // });
    if(callback?.handleCloseComment)
    {
      callback?.handleCloseComment();
    }
    if(callback?.handleCloseDescription)
    {
      callback?.handleCloseDescription()
    }

  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* moveTaskSaga(action) {
  const { data,taskId,workspaceId} = action.payload;

  const result = yield call(() => TaskFactory.moveTask(data,taskId,workspaceId));

  try {
   if(result?.data?.isSuccess)
   {
    toast.success(result.data?.message)
    yield put({
      type: TaskAction.SUCCESS_MOVE_TASK,
      payload: result,
    });
   }
   else 
   {
    toast.error(result.data?.message)
   }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* deleteTaskSaga(action) {
  const { id,workspaceId,callback} = action.payload;
  const result = yield call(() => TaskFactory.deleteTask(id,workspaceId));
  try {
      yield put({
        type: TaskAction.SUCCESS_DELETE_TASK,
        payload: result,
      });
      if(callback?.toast)
      {
        callback.toast(result.data.message);
      }
      // yield put({
      //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      //   payload: {
      //     data:{
      //       workspaceId
      //     },
      //   },
      // });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* detailTaskSaga(action) {
  const {taskId} = action.payload.data;
  const result = yield call(() => TaskFactory.detailTask(taskId));
  try {
      yield put({
        type: TaskAction.SUCCESS_GET_DETAIL_TASK,
        payload: result.data,
      });
  } 
  catch (e) {
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
    // yield put({
    //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
    //   payload: {
    //     data: {
    //       taskId
    //     }
    //   },
    // });
    // yield put({
    //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
    //   payload: {
    //     data: {
    //       workspaceId
    //     }
    //   },
    // });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* createNewLabelSaga(action) {
  const {data,taskId,callback,workspaceId} = action.payload;
  const result = yield call(() => TaskFactory.createNewLabel(data));
  try {
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
      // yield put({
      //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
      //   payload: {
      //     data: {
      //       taskId
      //     }
      //   },
      // });
      // yield put({
      //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      //   payload: {
      //     data: {
      //       workspaceId
      //     }
      //   },
      // });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* addLabelSaga(action) {
  const {data,taskId,workspaceId} = action.payload;
  const result = yield call(() => TaskFactory.addLabel(data,taskId,workspaceId));
  try {
      // yield put({
      //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
      //   payload: {
      //     data: {
      //       taskId
      //     }
      //   },
      // });
      toast(result?.data?.message)
      // yield put({
      //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      //   payload: {
      //     data: {
      //       workspaceId
      //     }
      //   },
      // });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* deleteLabelSaga(action) {
  const {id,taskId,callback} = action.payload.data;
  const result = yield call(() => TaskFactory.deleteLabel(id));
  try {
      // yield put({
      //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
      //   payload: {
      //     data: {
      //       taskId
      //     }
      //   },
      // });
      if(callback?.toast)
      {
        callback?.toast.success(result.data.message)
      }
  } 
  catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}
function* postCommentSaga(action) {
  const {data,workspaceId,taskId,callback} = action.payload;
  yield call(() => TaskFactory.postComment(data,workspaceId));
  try {
      // yield put({
      //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
      //   payload: {
      //     data: {
      //       taskId
      //     }
      //   },
      // });
      if(callback?.handleCloseComment)
      {
        callback?.handleCloseComment();
      }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* deleteCommentSaga(action) {
  const { commentId,taskId,workspaceId} = action.payload.data;
  const result = yield call(() => TaskFactory.deleteComment(commentId));
  try {
      yield put({
        type: TaskAction.SUCCESS_DELETE_COMMENT_TASK,
        payload: result,
      });
      // yield put({
      //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
      //   payload: {
      //     data:{
      //       taskId
      //     }
      //   },
      // });
      // yield put({
      //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      //   payload: {
      //     data: {
      //       workspaceId
      //     }
      //   },
      // });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* deleteSubtaskSaga(action) {
  const { subtaskId,workspaceId,callback,taskId} = action.payload.data;
  const result = yield call(() => TaskFactory.deleteSubtask(workspaceId,subtaskId));
  try {
      // yield put({
      //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
      //   payload: {
      //     data:{
      //       taskId
      //     }
      //   },
      // });
      // yield put({
      //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
      //   payload: {
      //     data: {
      //       workspaceId
      //     }
      //   },
      // });
      if(callback?.toast){
        callback?.toast.success(result.data?.message)
    }
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* editSubtaskSaga(action) {
  const {update_data,workspaceId,taskId,id,callback} = action.payload.data;
  const result = yield call(() => TaskFactory.editSubtask(update_data,id,workspaceId));
  try {
    // yield put({
    //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
    //   payload: {
    //     data: {
    //       taskId
    //     },
    //   },
    // });
    
    if(callback?.handleCloseEditSubtask)
    {
      callback.handleCloseEditSubtask();
    }
    // yield put({
    //   type: WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,
    //   payload: {
    //     data: {
    //       workspaceId
    //     }
    //   },
    // });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* getTasksByMemberSaga(action) {
  const {workspaceId,memberId} = action.payload.data;
  const result = yield call(() => TaskFactory.getTasksByMember(workspaceId,memberId));
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
  try {
    // yield put({
    //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
    //   payload: {
    //     data: {
    //       taskId
    //     },
    //   },
    // });
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
  try {
      // yield put({
      //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
      //   payload: {
      //     data: {
      //       taskId: taskId
      //     },
      //   },
      // });
      if(callback?.toast)
      {
        callback.toast(result?.data?.message);
      }
      yield put({
        type: TaskAction.SUCCESS_ACCEPT_EXTEND_DATE,
        payload: result,
      });
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}

function* rejectExtendDateTaskSaga(action) {
  const {callback,workspaceId,memberTaskId,taskId} = action.payload;
  const result = yield call(() => TaskFactory.rejectExtendDueDateTask(memberTaskId,workspaceId));
  try {
      // yield put({
      //   type: TaskAction.REQUEST_GET_DETAIL_TASK,
      //   payload: {
      //     data: {
      //       taskId: taskId
      //     },
      //   },
      // });
      if(callback?.toast)
      {
        callback.toast(result?.data?.message);
      }
      yield put({
        type: TaskAction.SUCCESS_REJECT_EXTEND_DATE,
        payload: result,
      });
   
  } catch (e) {
    console.log("Có lỗi xảy ra", e);
  }
}


function* getListUpcomingTasksSaga() {

  const result = yield call(() => TaskFactory.getListUpcomingTasks());
  try {
      yield put({
        type: TaskAction.SUCCESS_GET_UPCOMING_TASKS,
        payload: {
          data:result?.data
        },
      });
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
  yield takeEvery(TaskAction.REQUEST_DELETE_LABEL, deleteLabelSaga)
  yield takeEvery(TaskAction.REQUEST_POST_COMMENT, postCommentSaga)
  yield takeEvery(TaskAction.REQUEST_DELETE_COMMENT_TASK, deleteCommentSaga)
  yield takeEvery(TaskAction.REQUEST_CREATE_SUBTASK, createSubtaskSaga)
  yield takeEvery(TaskAction.REQUEST_DELETE_SUBTASK, deleteSubtaskSaga)
  yield takeEvery(TaskAction.REQUEST_EDIT_SUBTASK, editSubtaskSaga)
  yield takeEvery(TaskAction.REQUEST_GET_TASKS_BY_MEMBER, getTasksByMemberSaga);
  yield takeEvery(TaskAction.REQUEST_EXTEND_DUE_DATE, extendDueDateTaskSaga);
  yield takeEvery(TaskAction.REQUEST_ACCEPT_EXTEND_DATE, acceptExtendDateTaskSaga);
  yield takeEvery(TaskAction.REQUEST_REJECT_EXTEND_DATE, rejectExtendDateTaskSaga);
  yield takeEvery(TaskAction.REQUEST_GET_UPCOMING_TASKS, getListUpcomingTasksSaga);
}
export default function* TaskSaga() {
  yield all([getTaskSaga()]);
}
