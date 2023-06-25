import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import ConfirmEmailPage from './pages/ConfirmEmail';
import AdminBase from './shared/containers/admin/AdminBase';
import ManageAccount from './shared/containers/admin/manage-account/ManageAccount';
import ListUser from './shared/containers/admin/list-users/ListUser';
import LoginAdmin from './shared/containers/admin/login/LoginAdmin';
import RegisterAdmin from './shared/containers/admin/register/RegisterAdmin';
import ListWorkspacesUser from './shared/containers/admin/list-workspaces-user/ListWorkspacesUser';
import ManageAccountUser from './shared/containers/users/manage-account/ManageAccountUser';
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
            <Route path='/all-projects' element={<AllProjectsPage/>}/>
            <Route path='/manage-account' element={<ManageAccountUser/>}/>
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
        <Route path='/admin' element={<AdminBase/>}>
            <Route path='profile' element={<ManageAccount/>}/>
            <Route path='list-users' element={<ListUser/>}/>
            <Route path='list-users/:id' element={<ListWorkspacesUser/>}/>
        </Route>
        <Route path='/admin/login' element={<LoginAdmin/>}/>
        <Route path='/admin/register' element={<RegisterAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;
