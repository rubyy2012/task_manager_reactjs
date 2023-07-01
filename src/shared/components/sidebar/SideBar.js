import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import { Avatar, Typography } from '@mui/material';
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
import { HiCamera } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import UserAction from '../../../redux/users/UserAction';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import WorkspaceAction from '../../../redux/workspaces/WorkspaceAction';
const SideBar = () => {
    const [toggle,setToggle] = useState(false);
    const dispatch = useDispatch();
    const handleToggleBar = () => {
    }
    const [openCreateProject,setOpenCreateProject] = useState(false);
    const [active,setActive] = useState();
    const [activeMenu,setActiveMenu] = useState();
    const { recentlyProjects } = useSelector((state) => ({
        recentlyProjects: state.workspace.recentlyProjects,
      }));
    const handleLogout = () => {
        localStorage.removeItem('userInfor');
    }
    const { profile } = useSelector((state) => ({
        profile: state.user.profile,
      }));
    const { uploadAvatar } = useSelector((state) => ({
        uploadAvatar: state.user.uploadAvatar,
    }));
      useEffect(()=>{
        dispatch({
          type: UserAction.REQUEST_GET_DETAIL_PROFILE,
        })
    dispatch({
      type: WorkspaceAction.REQUEST_GET_RECENTLY_PROJECT
    })

    },[])
    
    const handleUpdateAvatar = (e) => {
        const formData = new FormData();
        formData.append('file',e.target.files[0])
        formData.append('cloud_name','diql0n3kn')
        formData.append('upload_preset', 'task_manager');
        formData.append('folder', 'avatar');
        dispatch({
          type: UserAction.REQUEST_UPLOAD_AVATAR_TO_CLOUDINARY,
          payload: {
            data: {
              formData: formData,
            }
          }
        })
    }
  return (
            
  <LoadingSpinner loading={uploadAvatar?.loading}>
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
                <div className={styles.infor}>
                    <div className={styles.avatar_area}>
                        <Avatar className={styles.avatar} 
                            src={profile?.data?.user?.avatar}/>
                        <HiCamera className={styles.camera_icon}/>
                        <label htmlFor='file'></label>
                        <input 
                        onChange={(e)=>handleUpdateAvatar(e)}
                        type="file" id='file'/>
                    </div>
                    <Typography sx= {{fontSize:'20px',fontWeight:'600',}}>
                       <Link to='/manage-account' 
                            className={styles.link_item}  
                            style={{color: '#040404',textDecoration:'none'}}>{profile?.data?.user?.fullName}</Link>
                    </Typography>
                    <p className={styles.email}>{profile?.data?.user?.email}</p>
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
                            name = 'Lịch cá nhân'
                            activeMenu ={activeMenu}
                            onClick = {()=>setActiveMenu(1)}
                            index = {1}
                            link = '/scheduler'
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
                            name = 'Nhiệm vụ sắp tới'
                            activeMenu ={activeMenu}
                            onClick = {()=>setActiveMenu(3)}
                            index = {3}
                            link = '/upcoming-tasks'
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
                <div
                    className={styles.avatar_area}>
                   <Link 
                        to ={ApiPath.LOGIN}
                        replace
                        onClick={handleLogout}
                        className={styles.link_item}> Đăng xuất</Link>
                </div>
            </div>
        </div>
    </div>
  </LoadingSpinner>
  )
}
export default SideBar;
