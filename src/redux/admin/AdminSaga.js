import { call, put, takeEvery,all } from 'redux-saga/effects';
import ApiPath from "../../utils/ApiPath";
import AdminFactory from "./AdminFactory";
import AdminAction from "./AdminAction";
import { toast } from 'react-toastify';
function* registerSaga(action)
{
    const {callback} = action.payload;
    const {toast} = callback;
    const adminResult = yield call(()=>AdminFactory.registerAdmin(action.payload.data))
    console.log('adminREsult',adminResult)
    try
    {
       
        if(adminResult.data.isSuccess)
        {
          yield put ({
            type:AdminAction.SUCCESS_ADMIN_REGISTER,
            payload:adminResult
          })  
          if(callback?.toast)
          {
            callback?.toast(adminResult?.data?.message)
          }    
          if(callback?.goToLoginPage)
          {
            callback.goToLoginPage();
          }
        }
        if(callback?.toast)
        {
          callback?.toast(adminResult?.data?.message)
        }  
       
        yield put ({
          type:AdminAction.FAIL_ADMIN_REGISTER,
          payload:adminResult
        })
    }
    catch(e)
    {
      toast(adminResult.data.message);
        console.log(e)
    }
}

function* loginSaga(action)
{
    const {callback} = action.payload;
    const adminResult = yield call(()=>AdminFactory.loginAdmin(action.payload.data))
    try
    {
        if(adminResult.data.isSuccess)
        {
            const myInfor = adminResult?.data?.data;
            const objectString = JSON.stringify(myInfor);
            localStorage.setItem('adminInfor',objectString);
          yield put ({
            type:AdminAction.SUCCESS_ADMIN_LOGIN,
            payload:{
              data:adminResult?.data
            }
          })
          if(callback?.goToOverview)
          {
            callback.goToOverview();
          }
        }
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* getListUsersSaga()
{
    const listUsers = yield call(()=>AdminFactory.getListUsers())
    try
    {
        if(listUsers.data.isSuccess)
        {
          yield put ({
            type:AdminAction.SUCCESS_GET_LIST_USERS,
            payload:{
              data:listUsers?.data
            }
          })
        }
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* getListProjectsOfUsersSaga(action)
{
  const {userId} = action.payload.data;
    const listProjects = yield call(()=>AdminFactory.getListProjectsOfUsers(userId))
    try
    {
        if(listProjects.data.isSuccess)
        {
          yield put ({
            type:AdminAction.SUCCESS_GET_LIST_PROJECTS_OF_USER,
            payload:{
              data:listProjects?.data
            }
          })
        }
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* getDetailAdminProfileSaga()
{
  console.log('getDetailAdminProfileSaga')
    const profile = yield call(()=>AdminFactory.getAdminProfile())
    try
    {
        if(profile.data.isSuccess)
        {
          yield put ({
            type:AdminAction.SUCCESS_GET_DETAIL_PROFILE_ADMIN,
            payload:{
              data:profile?.data
            }
          })
        }
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}

function* editProfileAdminSaga(action)
{
  const {userId,data,callback} = action.payload.data;
  // const editData= {...data.}
  console.log('editProfileAdminSaga',data);
    const editedProfile = yield call(()=>AdminFactory.editAdminProfile(userId,data))
    console.log('editedProfile',editedProfile)
    try
    {
      if(callback?.toast)
      {
        callback?.toast(editedProfile?.data?.message)
      }
      if(editedProfile.data.isSuccess)
      {
        yield put ({
          type:AdminAction.REQUEST_GET_DETAIL_PROFILE_ADMIN,
        })
        if(callback?.toast)
        {
          callback?.toast(editedProfile?.data?.message)
        }
      }
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}
function* uploadtoCloudiarySaga(action)
{
  const {formData} = action.payload.data;
    const uploadedFile = yield call(()=>AdminFactory.uploadProfileToCloudinary(formData))
    try
    {
      yield put ({
        type:AdminAction.REQUEST_UPLOAD_AVATAR_AMDIN_TO_SERVER,
        payload: {
          data: {
            avatar_url: {
              avatar: uploadedFile.data.url
            },
            callback: {
              toast: (message) => toast(message)
            }
          }
        }
      })
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}
function* uploadtoServerSaga(action)
{
  const {avatar_url,callback} = action.payload.data;
  const uploadedFile = yield call(()=>AdminFactory.uploadAvatarToServer(avatar_url))
    try
    {
      yield put ({
        type:AdminAction.SUCCESS_UPLOAD_AVATAR_AMDIN_TO_SERVER,
        payload: {
          data: {
            avatar_url
          }
        }
      })
      yield put ({
        type:AdminAction.REQUEST_GET_DETAIL_PROFILE_ADMIN,
      })
      if(callback?.toast)
      {
        callback?.toast(uploadedFile?.data?.message)
      }
    }
    catch(e)
    {
        console.log('Có lỗi xảy ra',e)
    }
}
function* getAdminSaga() {
  yield takeEvery(AdminAction.REQUEST_ADMIN_REGISTER,registerSaga);
  yield takeEvery(AdminAction.REQUEST_ADMIN_LOGIN,loginSaga)
  yield takeEvery(AdminAction.REQUEST_GET_LIST_USERS,getListUsersSaga)
  yield takeEvery(AdminAction.REQUEST_GET_LIST_PROJECTS_OF_USER,getListProjectsOfUsersSaga)
  yield takeEvery(AdminAction.REQUEST_GET_DETAIL_PROFILE_ADMIN,getDetailAdminProfileSaga)
  yield takeEvery(AdminAction.REQUEST_EDIT_PROFILE_ADMIN,editProfileAdminSaga)
  yield takeEvery(AdminAction.REQUEST_UPLOAD_AVATAR_ADMIN_TO_CLOUDINARY,uploadtoCloudiarySaga)
  yield takeEvery(AdminAction.REQUEST_UPLOAD_AVATAR_AMDIN_TO_SERVER,uploadtoServerSaga)
}

export default function* AdminSaga() {
  yield all([getAdminSaga()])
}
