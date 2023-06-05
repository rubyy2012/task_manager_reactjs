import React, { useState } from 'react'
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import Menu from '../menu/Menu';
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
const SideBar = () => {
    const [openCreateTask,setOpenCreateTask] = useState(false);
    const [toggle,setToggle] = useState(false);
    const handleToggleBar = () => {
    }
    const [openCreateProject,setOpenCreateProject] = useState(false);
    const [active,setActive] = useState();
    const [activeMenu,setActiveMenu] = useState();
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
                          <MenuLinkItem
                            name = 'Lịch chung'
                            activeMenu ={activeMenu}
                            onClick = {()=>setActiveMenu(4)}
                            index = {4}
                            link = ''
                            icon = {<BsCalendar3Week
                                className={styles.icon_calendar}/>}
                        />
                        {/* <div className={styles.menu_link_item}>
                            <Link 
                            active ={active}
                            onClick = {()=>setActive(1)}
                            index = {1}
                            className={styles.link_item}
                            to='/'>
                                    <RxDashboard className={styles.icon_overview}/>
                                    Tổng quan</Link>
                        </div>
                        <div className={styles.menu_link_item}>
                            <Link 
                            active ={active}
                            index = {2}
                            onClick = {()=>setActive(2)}
                            className={styles.link_item}
                            to='/'><SiOpenproject className={styles.icon_allprojects}/>
                                Tất cả dự án</Link>
                        </div>
                       <div className={styles.menu_link_item}>
                            <Link 
                            active ={active}
                            index = {3}
                            onClick = {()=>setActive(3)}
                            className={styles.link_item}
                            to='/'><MdTaskAlt  className={styles.icon_alltasks}
                                />Danh sách nhiệm vụ</Link>
                       </div>
                        <div className={styles.menu_link_item}>
                            <Link 
                            active ={active}
                            index = {4}
                            onClick = {()=>setActive(4)}
                            className={styles.link_item}
                            to='/'><BsCalendar3Week
                                    className={styles.icon_calendar}
                                />Lịch chung</Link>
                        </div> */}
                       
                    </div>
                    <p className={styles.title}><TbHistoryToggle className={styles.icon}/>Dự án gần đây</p>
                    <div className={styles.list_recent_projects}>
                        <RecentProjectItem
                            name = 'Công nghệ web'
                            index = {1}
                            active ={active}
                            onClick = {()=>setActive(1)}
                        />
                        <RecentProjectItem
                            name = 'Đồ án tốt nghiệp'
                            index = {2}
                            active ={active}
                            onClick = {()=>setActive(2)}
                        />
                        <RecentProjectItem
                            name = 'Lập trình mạng'
                            index = {3}
                            active ={active}
                            onClick = {()=>setActive(3)}
                        />
                        <RecentProjectItem
                            name = 'Thực tập tốt nghiệp'
                            index = {4}
                            active ={active}
                            onClick = {()=>setActive(4)}
                        />
                        <RecentProjectItem
                            name = 'Lập trình di động'
                            index = {5}
                            active ={active}
                            onClick = {()=>setActive(5)}
                        />
                    </div>
                </div>
           </div>
            <div className={styles.personal}>
                <button
                onClick = {()=>setOpenCreateTask(true)}

                    className={styles.btn_add_assignment}
                    >Tạo nhiệm vụ</button>
                <div className={styles.avatar_area}>
                    <Avatar className={styles.avatar}/>
                    <p className={styles.name}>Hồng Ngọc</p>
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
