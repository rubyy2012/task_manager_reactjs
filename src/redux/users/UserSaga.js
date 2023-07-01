import UserAction from "./UserAction";
import { call, put, takeEvery, all } from "redux-saga/effects";
import UserFactory from "./UserFactory";
import { toast } from "react-toastify";
import ApiPath from "../../utils/ApiPath";
function* registerSaga(action) {
  const { callback } = action.payload;
  const userResult = yield call(() =>
    UserFactory.registerUser(action.payload.data)
  );
    if (userResult.data.isSuccess) 
    {
      yield put({
        type: UserAction.SUCCESS_REGISTER,
        payload: {
          data: userResult?.data,
        },
      });
      toast.success(userResult?.data.message)
      if (callback?.goToLoginPage) {
        callback.goToLoginPage(ApiPath.LOGIN,{replace:true});
      }
    }
  } 

function* loginSaga(action) {
  const { callback } = action.payload;

  const userResult = yield call(() =>
    UserFactory.loginUser(action.payload.data)
  );
  if (userResult?.data?.isSuccess) {
    const myInfor = userResult?.data?.data;
    const objectString = JSON.stringify(myInfor);
    localStorage.setItem("userInfor", objectString);
    yield put({
      type: UserAction.SUCCESS_LOGIN,
      payload: {
        data: userResult?.data,
      },
    });
    toast.success(userResult?.data?.message);
    if (callback?.goToOverview) {
      callback.goToOverview();
    }
  } else {
    toast.error(userResult?.data?.message);
  }
}

function* getDetailProfileSaga() {
  const profile = yield call(() => UserFactory.getProfile());
    if (profile?.data?.isSuccess) {
      yield put({
        type: UserAction.SUCCESS_GET_DETAIL_PROFILE,
        payload: {
          data: profile?.data,
        },
      });
    }
}

function* editProfileUserSaga(action) {
  const { userId, data, callback } = action.payload.data;
  const editedProfile = yield call(() => UserFactory.editProfile(userId, data));
    if (editedProfile.data.isSuccess) {
      yield put({
        type: UserAction.REQUEST_GET_DETAIL_PROFILE,
      });
      if (callback?.toast) {
        callback?.toast(editedProfile?.data?.message);
      }
    } 
    else {
      if (callback?.toast) {
        callback?.toast(editedProfile?.data?.message);
      }
    }
}
function* uploadtoCloudiarySaga(action) {
  const { formData } = action.payload.data;
  const uploadedFile = yield call(() =>
    UserFactory.uploadProfileToCloudinary(formData)
  );
    yield put({
      type: UserAction.REQUEST_UPLOAD_AVATAR_TO_SERVER,
      payload: {
        data: {
          avatar_url: {
            avatar: uploadedFile.data.url,
          },
          callback: {
            toast: (message) => toast(message),
          },
        },
      },
    });
}
function* uploadtoServerSaga(action) {
  const { avatar_url, callback } = action.payload.data;
  const uploadedFile = yield call(() =>
    UserFactory.uploadAvatarToServer(avatar_url)
  );
    yield put({
      type: UserAction.SUCCESS_UPLOAD_AVATAR_TO_SERVER,
      payload: {
        data: {
          avatar_url,
        },
      },
    });
    yield put({
      type: UserAction.REQUEST_GET_DETAIL_PROFILE,
    });
    if (callback?.toast) {
      callback?.toast(uploadedFile?.data?.message);
    }
}
function* getUserSaga() {
  yield takeEvery(UserAction.REQUEST_REGISTER, registerSaga);
  yield takeEvery(UserAction.REQUEST_LOGIN, loginSaga);
  yield takeEvery(UserAction.REQUEST_GET_DETAIL_PROFILE, getDetailProfileSaga);
  yield takeEvery(UserAction.REQUEST_EDIT_PROFILE, editProfileUserSaga);
  yield takeEvery(
    UserAction.REQUEST_UPLOAD_AVATAR_TO_CLOUDINARY,
    uploadtoCloudiarySaga
  );
  yield takeEvery(
    UserAction.REQUEST_UPLOAD_AVATAR_TO_SERVER,
    uploadtoServerSaga
  );
}

export default function* UserSaga() {
  yield all([getUserSaga()]);
}
