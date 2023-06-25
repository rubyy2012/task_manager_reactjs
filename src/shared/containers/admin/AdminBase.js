import React from 'react'
import styles from './adminbase.module.scss';
import { Avatar, Typography } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiCamera } from "react-icons/hi";
import { useEffect } from 'react';
import AdminAction from '../../../redux/admin/AdminAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const AdminBase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem('adminInfor');
    navigate('admin/login')
  }
  const { profile } = useSelector((state) => ({
    profile: state.admin.profile,
  }));
  useEffect(()=>{
    dispatch({
      type: AdminAction.REQUEST_GET_DETAIL_PROFILE_ADMIN,
    })
  },[])

const handleUpdateAvatar = (e) => {
    const formData = new FormData();
    formData.append('file',e.target.files[0])
    formData.append('cloud_name','diql0n3kn')
    formData.append('upload_preset', 'task_manager');
    formData.append('folder', 'avatar');
    dispatch({
      type: AdminAction.REQUEST_UPLOAD_AVATAR_ADMIN_TO_CLOUDINARY,
      payload: {
        data: {
          formData: formData,
        }
      }
    })
}
  return (
  <div className={styles.admin_container}>
    <div className={styles.side_bar}>
      <div className={styles.top_area}>
          {/* <div className={styles.logo_area}>
            <MdOutlineTaskAlt className={styles.logo_icon}/>
          </div> */}
          <div className={styles.infor}>
            <div 
              className={styles.avatar_area}>
                <Avatar className={styles.avatar} src={ profile?.data?.user?.avatar||null}/>
                <HiCamera className={styles.camera_icon}/>
                <label htmlFor='file'></label>
                <input 
                  onChange={(e)=>handleUpdateAvatar(e)}
                  type="file" id='file'/>
            </div>
              <Typography sx= {{fontSize:'20px',fontWeight:'600',color: '#fff'}}>
                  {profile?.data?.user?.fullName}
              </Typography>
              <p className={styles.role_label}>Admin</p>
          </div>
          <div className={styles.sidebar_area}>
            <Link to='profile'
              replace
              className={styles.link_item} >Quản lý tài khoản</Link>
            <Link to='list-users'
              replace
              className={styles.link_item}
              >Danh sách người dùng</Link>
          </div>
      </div>

      <div className={styles.bottom_area}>
        <Link 
          className={styles.item_logout}
          onClick={handleLogOut}
          to='login'>
            Đăng xuất
        </Link>
      </div>
    </div>
    <div className={styles.main_side}>
        <div className={styles.header}></div>
        <Outlet/>
    </div>
  </div>
  )
}

export default AdminBase