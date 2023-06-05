// function* addSupplierSaga(action)
// {
//     try
//     {
//         const supplier = yield call(()=>SupplierFactory.addSupplier(action))
//         yield put({
//             type:SupplierAction.SUCCESS_ADD_SUPPLIER,
//             payload : {
//                 message: 'Add supplier successfully!',
//                 data : supplier.data}})
//         yield put({
//             type:SupplierAction.REQUEST_FETCH_LIST_SUPPLIER})
//     }
//     catch(e)
//     {
//         console.log(e)
//     }
// }

function* getUserSaga() {
  // yield takeEvery(LocationAction.REQUEST_GET_PROVINCE, listProvinceSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_DISTRICT, listDistrictSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_WARD, listWardSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_PROVINCE_BY_ID, provinceSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_DISTRICT_BY_ID, districtSaga);
  // yield takeEvery(LocationAction.REQUEST_GET_WARD_BY_ID, wardSaga);
}

export default function* UserSaga() {
  yield all([getUserSaga()])
}
