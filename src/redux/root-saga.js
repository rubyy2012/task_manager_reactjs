
import { all } from 'redux-saga/effects'
import UserSaga from './users/UserSaga'
export default function* rootSaga () {
    yield all([
        UserSaga()
    ])
}
