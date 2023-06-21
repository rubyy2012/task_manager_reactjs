import UserAction from "./UserAction";
import { call, put, takeEvery,all } from 'redux-saga/effects';
import UserFactory from './UserFactory';
import ApiPath from "../../utils/ApiPath";
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

function* getUserSaga() {
  yield takeEvery(UserAction.REQUEST_REGISTER,registerSaga);
  yield takeEvery(UserAction.REQUEST_LOGIN,loginSaga)
}

export default function* UserSaga() {
  yield all([getUserSaga()])
}
