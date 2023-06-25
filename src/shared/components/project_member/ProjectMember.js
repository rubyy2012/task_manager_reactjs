import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { Avatar } from '@mui/material';
import avatar from '../../../assets/images/avatar.jpg';
import { useState } from 'react';
const ProjectMember = ({member,listMembers}) => {
  const {fullName,email,avatar,role} = member;
  const [listMembersData, setListMembersData] = useState(listMembers?.data);
  useEffect(()=>{
    checkCanDeleteorLeave(userInfor, listMembersData);
  },[listMembersData])

  //from local storage
  const userInfor = JSON.parse(localStorage.getItem('userInfor'));
  const checkCanDeleteorLeave = (userInfor, listMembersData) => {
    listMembersData?.map((member) => {
      if (member.id === userInfor.account.id) {
        if(member.role>0)
         {
          return (
            <button className={styles.btn_delete_member}>Rời</button>
          )
        }
      } 
      else 
      {
        if(userInfor.role <member.role)
        {
          return (
            <button className={styles.btn_delete_member}>Xóa</button>
          )
        }
      }

    });
  };

  
  return (
    <div className={styles.project_member_body}>
      <div className={styles.member_infor}>
        <Avatar
          src={avatar}
          className={styles.avatar}
        />
        <div className={styles.name_and_email}>
          <p className={styles.name}>{fullName}</p>
          <p className={styles.email}>{email}</p>
        </div>
      </div>
      <div className={styles.role_container}>
          <p  
            style={{backgroundColor:'#ebeff1'}}
            className={styles.role}>
            {
              role===0?'Người tạo':role === 1? 'Quản lý': role === 2? 'Thành viên':''
            }
          </p>
          {checkCanDeleteorLeave(userInfor, listMembersData)}
      </div>
    </div>
  )
}

export default ProjectMember