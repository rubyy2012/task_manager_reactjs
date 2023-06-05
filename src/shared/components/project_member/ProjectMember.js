import React from 'react'
import styles from './styles.module.scss'
import { Avatar } from '@mui/material';
import avatar from '../../../assets/images/avatar.jpg';
import { useState } from 'react';
const ProjectMember = () => {

  return (
    <div className={styles.project_member_body}>
      <div className={styles.member_infor}>
        <Avatar
          src={avatar}
          className={styles.avatar}
        />
        <div className={styles.name_and_email}>
          <p className={styles.name}>Hồng Ngọc</p>
          <p className={styles.email}>bigdipper201201@gmail.com</p>
        </div>
      </div>
      <div className={styles.role_container}>
          <p  
            style={{backgroundColor:'#ebeff1'}}
            className={styles.role}>Quản lý</p>
              {/* <p  
                className={styles.role}>Thành viên</p> */}
          <button
            className={styles.btn_delete_member}
          >
            Xóa </button>
      </div>
    </div>
  )
}

export default ProjectMember