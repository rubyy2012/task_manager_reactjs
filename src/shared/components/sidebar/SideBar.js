import React, { useState } from 'react'
import styles from './styles.module.scss';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import { Avatar } from '@mui/material';
import CreateTask from '../create-task/CreateTask';
import { RxDashboard } from "react-icons/rx";
import { SiOpenproject } from "react-icons/si";
import { MdTaskAlt } from 'react-icons/md';
import { BsCalendar3Week } from 'react-icons/bs';
import { TbHistoryToggle } from 'react-icons/tb';
import RecentProjectItem from '../recen-project-item/RecentProjectItem';
import MenuLinkItem from '../link-item/MenuLinkItem';
import CreateProject from '../create-project/CreateProject';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ApiPath from '../../../utils/ApiPath';
const SideBar = () => {
    const [openCreateTask,setOpenCreateTask] = useState(false);
    const [toggle,setToggle] = useState(false);
    const [openOption,setOpenOption] = useState(false);
    const navigate = useNavigate();
    const handleToggleBar = () => {
    }
    const [openCreateProject,setOpenCreateProject] = useState(false);
    const [active,setActive] = useState();
    const [activeMenu,setActiveMenu] = useState();
    const user =  JSON.parse(localStorage.getItem('userInfor'));
    // const dispatch = useDispatch();
    const { recentlyProjects } = useSelector((state) => ({
        recentlyProjects: state.workspace.recentlyProjects,
      }));
      const handleLogout = () => {
        localStorage.removeItem('userInfor');
      }
  return (
            
    <div className={styles.sidebar_container}>
        {
            openCreateProject&& 
            <CreateProject
                openCreateProject = {openCreateProject}
                setOpenCreateProject = {setOpenCreateProject}
            />
        }
        <div className={styles.sidebar_body}>
           <div className={styles.logo_and_menu}>
                <div className={styles.logo_area}>
                    <DataSaverOffIcon
                        onClick = {handleToggleBar}
                        className={`${styles.logoIcon} ${toggle?styles.adjust:''}`}
                    />
                    <p className={styles.name_title}>MyAssign</p>
                </div>   
                <button 
                    onClick={()=>setOpenCreateProject(true)}
                    className={styles.btn_create_project}>
                    Thêm dự án
                </button>
                {/* <Menu /> */}
                <div className={styles.menu_list_container}>
                    <p className={styles.title}>Không gian làm việc</p>
                    <div className={styles.list_menu}>
                        <MenuLinkItem
                            name = 'Tổng quan'
                            activeMenu ={activeMenu}
                            onClick = {()=>setActiveMenu(1)}
                            index = {1}
                            link = '/overviews'
                            icon ={<RxDashboard className={styles.icon_overview}/>}
                        />
                       
                         <MenuLinkItem
                            name = 'Tất cả dự án'
                            activeMenu ={activeMenu}
                            onClick = {()=>setActiveMenu(2)}
                            index = {2}
                            link = '/all-projects'
                            icon = {<SiOpenproject className={styles.icon_allprojects}/>}
                        />
                         <MenuLinkItem
                            name = 'Danh sách nhiệm vụ'
                            activeMenu ={activeMenu}
                            onClick = {()=>setActiveMenu(3)}
                            index = {3}
                            link = '/all-tasks'
                            icon ={<MdTaskAlt className={styles.icon_alltasks}/>}
                        />
                          {/* <MenuLinkItem
                            name = 'Lịch chung'
                            activeMenu ={activeMenu}
                            onClick = {()=>setActiveMenu(4)}
                            index = {4}
                            link = ''
                            icon = {<BsCalendar3Week
                                className={styles.icon_calendar}/>}
                        /> */}
                    </div>
                    <p className={styles.title}><TbHistoryToggle className={styles.icon}/>Dự án gần đây</p>
                    <div className={styles.list_recent_projects}>
                        {
                            recentlyProjects?.data?.map(recent=>(
                                <RecentProjectItem
                                id = {recent.id}
                                name = {recent?.title}
                                index = {recent.id}
                                active ={active}
                                onClick = {()=>setActive(recent.id)}
                            />
                            ))
                        }
                    </div>
                </div>
           </div>
            <div className={styles.personal}>
                <button
                onClick = {()=>setOpenCreateTask(true)}

                    className={styles.btn_add_assignment}
                    >Tạo nhiệm vụ</button>
                <div 
                    onClick ={()=>setOpenOption(!openOption)}
                    className={styles.avatar_area}>
                    <Avatar 
                        src={'abc'||''}
                        className={styles.avatar}
                    />
                    <p className={styles.name}>{user?.account?.fullName}</p>
                    {openOption&&(
                        <div className={styles.box_option}>
                            <Link 
                                to ={ApiPath.LOGIN}
                                replace
                                onClick={handleLogout}
                                className={styles.link_item}> Đăng xuất</Link>
                            <Link className={styles.link_item}> Chỉnh sửa thông tin</Link>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
        <CreateTask
            setOpenCreateTask = {setOpenCreateTask}
            openCreateTask = {openCreateTask}/>
    </div>
  )
}
export default SideBar;
