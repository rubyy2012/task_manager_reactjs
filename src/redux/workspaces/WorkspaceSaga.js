
import WorkspaceAction from "./WorkspaceAction";
import { call, put, takeEvery,all } from 'redux-saga/effects';
import WorkspaceFactory from "./WorkspaceFactory";
function* getAllWorkspacesSaga()
{
    const result = yield call(()=>WorkspaceFactory.getAllWorkspaces())
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_GET_ALL_PROJECTS,
        payload:result
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* geRecentlyProjectsSaga()
{
    const result = yield call(()=>WorkspaceFactory.geRecentlyProjects())
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_GET_RECENTLY_PROJECT,
        payload:result.data
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* createNewWorkspaceSaga(action)
{
    const {data,callback} = action.payload;
    const result = yield call(()=>WorkspaceFactory.createNewWorkspace(data))
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_CREAT_NEW_PROJECT,
        payload:result
      })
      yield put ({
        type:WorkspaceAction.REQUEST_GET_ALL_PROJECTS,
      })
      if(callback?.toast)
      {
        callback.toast(result.data.message);
      }
      if(callback?.goToOverView)
      {
        callback.goToOverview();
      }
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* deleteProjectSaga(action)
{
    const {data,callback} = action.payload;
    const result = yield call(()=>WorkspaceFactory.deleteWorkspace(data))
    console.log('result',result);
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_DELETE_PROJECT,
        payload:result
      })
      yield put ({
        type:WorkspaceAction.REQUEST_GET_ALL_PROJECTS,
      })
      if(callback?.toast)
      {
        callback.toast(result.data.message);
      }
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}


function* getDetailProjectSaga(action)
{
    const id = action.payload.data;
    console.log('id ws',id)
    const result = yield call(()=>WorkspaceFactory.getDetailProject(id))
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_GET_DETAIL_PROJECT,
        payload:result?.data
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* getListCardsSaga(action)
{
    // console.log('listcardsSaga',action)
    const workspaceId = action.payload.data;
    const result = yield call(()=>WorkspaceFactory.getListCards(workspaceId))
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_GET_LIST_CARDS,
        payload:result.data.data
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* getListMembersSaga(action)
{
    const workspaceId = action.payload.data;
    const result = yield call(()=>WorkspaceFactory.getListMembers(workspaceId))
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_GET_LIST_MEMBERS,
        payload:result.data.data
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',result)
    }
}
function* inviteMemberSaga(action)
{
    const {data,workspaceId,callback} = action.payload;
    const result = yield call(()=>WorkspaceFactory.inviteMember(data,workspaceId))
    console.log('InviteMember',result);
    try
    {
      if(callback?.toast)
        {
          callback.toast(result?.data?.message);
        }
      if(result.data.isSuccess)
      {
        yield put ({
          type:WorkspaceAction.SUCCESS_INVITE_MEMBER,
          payload:result.data.data
        })
      }
      else {
        yield put ({
          type:WorkspaceAction.FAIL_INVITE_MEMBER,
          payload:result.data
        })
      }
    }
    catch(e)
    {
      yield put ({
        type:WorkspaceAction.FAIL_INVITE_MEMBER,
        payload:result.data
      })
    }
}

function* getMembersWithTaskSaga(action)
{
    const {workspaceId} = action.payload.data;
    const result = yield call(()=>WorkspaceFactory.getMembersWithTask(workspaceId))
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_GET_MEMBERS_WITH_TASK,
        payload:result.data.data
      })
    }
    catch(e)
    {
      yield put ({
        type:WorkspaceAction.FAIL_INVITE_MEMBER,
        payload:result.data
      })
    }
}

function* getlistLabelsSaga(action)
{
    
    const {workspaceId} = action.payload;
    const result = yield call(()=>WorkspaceFactory.getListLabels(workspaceId))
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_GET_LIST_LABELS_WORKSPACE,
        payload:result.data.data
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}
function* getListMemberswithTasksSaga(action)
{
    const workspaceId = action.payload.data.workspaceId;
    const result = yield call(()=>WorkspaceFactory.getListMembersWithTasks(workspaceId))
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_GET_LIST_MEMBER_WITH_TASK,
        payload:result?.data?.data
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',result)
    }
}

function* removeMemberOfWorkspaceSaga(action)
{
    const {id,memberId,callback} = action.payload.data;

    const result = yield call(()=>WorkspaceFactory.removeMemberOfWorkspace(id,memberId))
    console.log('result',result);
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESST_REMOVE_MEMBER_OF_WORKSPACE,
        payload:result
      })
      if(callback?.toast) {
        callback.toast(result?.data?.message)
      }
      yield put ({
        type:WorkspaceAction.REQUEST_GET_LIST_MEMBER_WITH_TASK,
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* leaveWorkspaceSaga(action)
{
    const {id,callback} = action.payload.data;
    const result = yield call(()=>WorkspaceFactory.leaveWorkspace(id))
    console.log('test leave workspce',result)
    try
    {
      yield put ({
        type:WorkspaceAction.SUCCESS_LEAVE_WORKSPACE,
        payload:result.data.data
      })
      if(callback?.toast) {
        callback.toast(result?.data?.message)
      }
      yield put ({
        type:WorkspaceAction.REQUEST_GET_LIST_MEMBER_WITH_TASK,
      })
    }
    catch(e)
    {
      console.log('Có lỗi xảy ra',e)
    }
}

function* getWorkspaceSaga() {
    yield takeEvery(WorkspaceAction.REQUEST_GET_ALL_PROJECTS, getAllWorkspacesSaga);
    yield takeEvery(WorkspaceAction.REQUEST_CREAT_NEW_PROJECT,createNewWorkspaceSaga);
    yield takeEvery(WorkspaceAction.REQUEST_GET_DETAIL_PROJECT,getDetailProjectSaga)
    yield takeEvery(WorkspaceAction.REQUEST_GET_LIST_CARDS,getListCardsSaga)
    yield takeEvery(WorkspaceAction.REQUEST_GET_LIST_MEMBERS,getListMembersSaga)
    yield takeEvery(WorkspaceAction.REQUEST_INVITE_MEMBER,inviteMemberSaga)
    yield takeEvery(WorkspaceAction.REQUEST_DELETE_PROJECT,deleteProjectSaga)
    yield takeEvery(WorkspaceAction.REQUEST_GET_MEMBERS_WITH_TASK,getMembersWithTaskSaga)
    yield takeEvery(WorkspaceAction.REQUEST_GET_LIST_LABELS_WORKSPACE,getlistLabelsSaga)
    yield takeEvery(WorkspaceAction.REQUEST_GET_RECENTLY_PROJECT, geRecentlyProjectsSaga);
    yield takeEvery(WorkspaceAction.REQUEST_GET_LIST_MEMBER_WITH_TASK,getListMemberswithTasksSaga)
    yield takeEvery(WorkspaceAction.REQUEST_REMOVE_MEMBER_OF_WORKSPACE,removeMemberOfWorkspaceSaga)
    yield takeEvery(WorkspaceAction.REQUEST_LEAVE_WORKSPACE,leaveWorkspaceSaga)
    // yield takeEvery(WorkspaceAction.REQUEST_GET_TASKS_BY_MEMBER, getSaga);
    
    
  }
  
export default function* WorkspaceSaga() {
    yield all([getWorkspaceSaga()])
  }
  