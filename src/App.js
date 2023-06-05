import './App.css';
import RoutePaths from './router/Routes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthenLayout from './shared/containers/layouts/authen/AuthenLayout';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShareLayout from './shared/containers/layouts/share/user/ShareLayout';
import OverviewPages from './pages/users/Overview';
import FigureContainer from './shared/containers/users/figure-container/FigureContainer';
import Priority from './shared/components/Priority/Priority';
import Assignee from './shared/components/Assignee/Assignee';
import TagLabel from './shared/components/TagLabel/TagLabel';
import LabelColor from './shared/components/LabelColor/LabelColor';
import DueDate from './shared/components/DueDate/DueDate';
import ColorRange from './shared/components/ColorRange/ColorRange';
import Task from './shared/components/Task/Task';
import ListTasks from './shared/components/ListTasks/ListTasks';
import WorkspacePage from './pages/users/WorkspacePage';
import Notification from './shared/components/notifycation/Notification';
import ListViewContainer from './shared/containers/users/list-view-container/ListViewContainer';
import ProjectPage from './pages/users/ProjectPage';
import TeamMemberContainer from './shared/containers/users/team-member-container/TeamMemberContainer';
import ViewTasksMember from './shared/containers/users/view-tasks-member-container/ViewTasksMember';
import AllProjectsPage from './pages/users/AllProjectsPage';
import ViewAllTasksPage from './pages/users/ViewAllTasksPage';
import WorkspaceItem from './shared/components/workspace-item/WorkspaceItem';
import CreateProject from './shared/components/create-project/CreateProject';
import Scheduler from './shared/components/scheduler/Scheduler';
import ConfirmEmailContainer from './shared/containers/confirm-email/ConfirmEmailContainer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthenLayout/>}>
           <Route path='/' element={<Navigate to={RoutePaths.LOGIN} />} />

            <Route path={RoutePaths.LOGIN} element={<LoginPage/>}/>
            <Route path={RoutePaths.REGISTER} element={<RegisterPage/>}/>
        </Route>

            <Route path='/confirm-email' element={<ConfirmEmailContainer/>}/>
        <Route element={<ShareLayout/>}>
            <Route path='/all-projects' element={<AllProjectsPage/>}>
              {/* <Route path='/all-projects/in-progress'/>
              <Route path='/all-projects/completed'/> */}
            </Route>
            {/* <Route path='/workspace' element={<WorkspaceItem/>}/> */}
            <Route path='/all-tasks' element={<ViewAllTasksPage/>}/>
            <Route path='/scheduler' element={<Scheduler/>}/>
            <Route path='/all-projects' element={<AllProjectsPage/>}/>
            <Route path='/overviews' element={<OverviewPages/>}/>
            <Route path='/project-page' element={<ProjectPage/>}>
              <Route path='list-views' element={<ListViewContainer/>}/>
              <Route path='team-members' element={<TeamMemberContainer/>}/>
              <Route path='team-members/all-tasks' element={<ViewTasksMember/>}/>
            </Route>
            <Route path='/task' element={<Task/>}/>
            <Route path='/list-task' element={<ListTasks/>}/>
            {/* <Route path={RoutePaths.USER.OVERVIEW} element={<OverviewPages/>}/> */}
           </Route>
        <Route path='/*' element={<div>not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
