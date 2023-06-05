import UserAction from "./UserAction";
import { call, put, takeEvery,all } from 'redux-saga/effects';
import UserFactory from './UserFactory';
function* registerSaga(action)
{
    console.log("hello hn",action);
    try
    {
        const user = yield call(()=>UserFactory.registerUser(action.payload.data))
        console.log(user);
        // yield put({
        //     type:SupplierAction.SUCCESS_ADD_SUPPLIER,
        //     payload : {
        //         message: 'Add supplier successfully!',
        //         data : supplier.data}})
        // yield put({
        //     type:SupplierAction.REQUEST_FETCH_LIST_SUPPLIER})
    }
    catch(e)
    {
        console.log(e)
    }
}


function* getUserSaga() {
  yield takeEvery(UserAction.REQUEST_REGISTER, registerSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_DISTRICT, listDistrictSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_WARD, listWardSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_PROVINCE_BY_ID, provinceSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_DISTRICT_BY_ID, districtSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_WARD_BY_ID, wardSaga);
}

export default function* UserSaga() {
  yield all([getUserSaga()])
}
