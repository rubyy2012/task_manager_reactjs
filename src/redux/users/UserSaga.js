import UserAction from "./UserAction";
import { call, put, takeEvery,all } from 'redux-saga/effects';
import UserFactory from './UserFactory';
import ApiPath from "../../utils/ApiPath";
import { toast } from "react-toastify";
function* registerSaga(action)
{
    const {callback} = action.payload;
    const {toast} = callback;
    const userResult = yield call(()=>UserFactory.registerUser(action.payload.data))
    console.log('userREsult',userResult)
    try
    {
        if(userResult.data.isSuccess)
        {
          yield put ({
            type:UserAction.SUCCESS_REGISTER,
            payload:userResult
          })      
          if(callback?.goToLoginPage)
          {
            callback.goToLoginPage();
          }
        }
        if(callback?.toast)
        {
          callback?.toast(userResult?.data?.message)
        }
        yield put ({
          type:UserAction.FAIL_REGISTER,
          payload:userResult
        })
    }
    catch(e)
    {
      toast(userResult.data.message);
        console.log(e)
    }
}

function* loginSaga(action)
{
    const {callback} = action.payload;
    const userResult = yield call(()=>UserFactory.loginUser(action.payload.data))
    try
    {
        if(userResult.data.isSuccess)
        {
            const myInfor = userResult?.data?.data;
            const objectString = JSON.stringify(myInfor);
            localStorage.setItem('userInfor',objectString);
          yield put ({
            type:UserAction.SUCCESS_LOGIN,
            payload:{
              data:userResult?.data
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

function* getDetailProfileSaga()
{
   console.log('getDetailProfileSaga')
    const profile = yield call(()=>UserFactory.getProfile())
    console.log('result',profile)
    try
    {
        if(profile.data.isSuccess)
        {
          yield put ({
            type:UserAction.SUCCESS_GET_DETAIL_PROFILE,
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

function* editProfileUserSaga(action)
{
  const {userId,data,callback} = action.payload.data;
    const editedProfile = yield call(()=>UserFactory.editProfile(userId,data))
    console.log('editedProfile',editedProfile)
    try
    {
     
      if(editedProfile.data.isSuccess)
      {
        yield put ({
          type:UserAction.REQUEST_GET_DETAIL_PROFILE,
        })
        if(callback?.toast)
        {
          callback?.toast(editedProfile?.data?.message)
        }
      }
      else 
      {
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
    const uploadedFile = yield call(()=>UserFactory.uploadProfileToCloudinary(formData))
    console.log('upload file',uploadedFile);
    try
    {
      yield put ({
        type:UserAction.REQUEST_UPLOAD_AVATAR_TO_SERVER,
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
  console.log('uploadtoServerSaga',action);

  const {avatar_url,callback} = action.payload.data;
  const uploadedFile = yield call(()=>UserFactory.uploadAvatarToServer(avatar_url))
    try
    {
      yield put ({
        type:UserAction.SUCCESS_UPLOAD_AVATAR_TO_SERVER,
        payload: {
          data: {
            avatar_url
          }
        }
      })
      yield put ({
        type:UserAction.REQUEST_GET_DETAIL_PROFILE,
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
function* getUserSaga() {
  yield takeEvery(UserAction.REQUEST_REGISTER,registerSaga);
  yield takeEvery(UserAction.REQUEST_LOGIN,loginSaga)
  yield takeEvery(UserAction.REQUEST_GET_DETAIL_PROFILE,getDetailProfileSaga)
  yield takeEvery(UserAction.REQUEST_EDIT_PROFILE,editProfileUserSaga)
  yield takeEvery(UserAction.REQUEST_UPLOAD_AVATAR_TO_CLOUDINARY,uploadtoCloudiarySaga)
  yield takeEvery(UserAction.REQUEST_UPLOAD_AVATAR_TO_SERVER,uploadtoServerSaga)
}

export default function* UserSaga() {
  yield all([getUserSaga()])
}
