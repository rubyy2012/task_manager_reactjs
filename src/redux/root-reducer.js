import { combineReducers } from 'redux';
import UserReducer from './users/UserReducer';
import WorkspaceReducer from './workspaces/WorkspaceReducer';
import TaskReducer from './tasks/TaskReducer';
import AdminReducer from './admin/AdminReducer';
import signalRReducer from './signalR/signalRReducer';
const rootReducer = combineReducers({
    user: UserReducer,
    workspace: WorkspaceReducer,
    task: TaskReducer,
    admin: AdminReducer,
    signalR: signalRReducer 
});

export default rootReducer;
