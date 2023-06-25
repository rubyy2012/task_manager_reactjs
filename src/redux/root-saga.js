
import { all } from 'redux-saga/effects'
import UserSaga from './users/UserSaga'
import WorkspaceSaga from './workspaces/WorkspaceSaga'
import TaskSaga from './tasks/TaskSaga'
import AdminSaga from './admin/AdminSaga'
export default function* rootSaga () {
    yield all([
        UserSaga(),
        WorkspaceSaga(),
        TaskSaga(),
        AdminSaga()
    ])
}
