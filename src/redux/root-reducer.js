import { combineReducers } from 'redux';
import UserReducer from './users/UserReducer';
import WorkspaceReducer from './workspaces/WorkspaceReducer';
import TaskReducer from './tasks/TaskReducer';
const rootReducer = combineReducers({
    user: UserReducer,
    workspace: WorkspaceReducer,
    task: TaskReducer
});

export default rootReducer;
