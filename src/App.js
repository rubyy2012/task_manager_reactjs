import './App.css';
import RoutePaths from './router/Routes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthenLayout from './shared/containers/layouts/authen/AuthenLayout';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShareLayout from './shared/containers/layouts/share/user/ShareLayout';
import OverviewPages from './pages/users/Overview';
import Task from './shared/components/Task/Task';
import ListTasks from './shared/components/ListTasks/ListTasks';
import ListViewContainer from './shared/containers/users/list-view-container/ListViewContainer';
import ProjectPage from './pages/users/ProjectPage';
import TeamMemberContainer from './shared/containers/users/team-member-container/TeamMemberContainer';
import ViewTasksMember from './shared/containers/users/view-tasks-member-container/ViewTasksMember';
import AllProjectsPage from './pages/users/AllProjectsPage';
import ViewAllTasksPage from './pages/users/ViewAllTasksPage';
import ConfirmEmailPage from './pages/ConfirmEmail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthenLayout/>}>
           <Route path='/' element={<Navigate to={RoutePaths.LOGIN} />} />

            <Route path={RoutePaths.LOGIN} element={<LoginPage/>}/>
            <Route path={RoutePaths.REGISTER} element={<RegisterPage/>}/>
        </Route>

            <Route path='/confirm-email' element={<ConfirmEmailPage/>}/>
        <Route element={<ShareLayout/>}>
            <Route path='/all-tasks' element={<ViewAllTasksPage/>}/>
            <Route path='/all-projects' element={<AllProjectsPage/>}/>
            <Route path='/overviews' element={<OverviewPages/>}/>
            <Route path='/project-page' element={<ProjectPage/>}>
              <Route path='project/:id/all-tasks' element={<ListViewContainer/>}/>
              <Route path='project/:id/team-members' element={<TeamMemberContainer/>}/>
            </Route>
            <Route path='team-members/:id/tasks' element={<ViewTasksMember/>}/>
            <Route path='/task' element={<Task/>}/>
            <Route path='/list-task' element={<ListTasks/>}/>
           </Route>
        <Route path='/*' element={<div>not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
