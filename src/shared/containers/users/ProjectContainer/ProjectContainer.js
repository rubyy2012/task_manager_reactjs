import React from 'react'
import styles from './styles.module.scss';
import { Avatar, AvatarGroup, Button } from '@mui/material';
import avatar from '../../../../assets/images/avatar.jpg';
import { useState } from 'react';
import Notification from '../../../components/notifycation/Notification';
import { BiNotification } from "react-icons/bi";
import project_image from '../../../../assets/icons/project_icon.png'
import ListViews from '../../../components/list-views/ListViews';
import { Outlet } from 'react-router-dom';
import AddMemberForm from '../../../components/add-member/AddMemberForm';
import TaskDetailContainer from '../task-detail-container/TaskDetailContainer';
const ProjectContainer = () => {
  const [addMemberForm,setOpenAddMemberForm] = useState(false);
  const [notification,setOpenNotification] = useState(false);

  return (
    <div className={styles.project_container}>
        <div className={styles.side_tasks_container}>
          <div className={styles.side_tasks_header}>
            <div className={styles.project_members}>
              <div className={styles.project_name_container}>
                <div className={styles.project_image_container}>
                  <img 
                    src={project_image}
                    alt="error"/>
                </div>
                <div className={styles.list_view_project}>
                    <span>Design Plan</span>
                    <div className={styles.list_view_menu}>
                        <ListViews/>
                    </div>
                </div>
              </div>
             
            </div>
            <div className={styles.project_tools}>
            <div className={styles.members}>
                <AvatarGroup
                        className={styles.avatar_group}
                        sx={{
                            '& .MuiAvatar-root': { width:26, height:26, fontSize: 14 },
                          }}
                        spacing={-1}
                        max={6}>
                        <Avatar
                          className={styles.avatar}
                          src={avatar}
                          sx={{ width:26, height:26 }}
                        />
                          <Avatar
                          className={styles.avatar}
                          src={avatar}
                          sx={{ width:26, height:26 }}
                        />
                        <Avatar
                          className={styles.avatar}
                          sx={{ width:26, height:26 }}
                          src={avatar}
                        />
                        <Avatar
                          className={styles.avatar}
                          sx={{ width:26, height:26 }}
                          src={avatar}
                        />
                          <Avatar
                          className={styles.avatar}
                          src={avatar}
                          sx={{ width:26, height:26 }}
                        />
                        <Avatar
                          className={styles.avatar}
                          sx={{ width:26, height:26 }}
                          src={avatar}
                        />
                        <Avatar
                          className={styles.avatar}
                          sx={{ width:26, height:26 }}
                          src={avatar}
                        />
                </AvatarGroup>
              </div>
                <Button 
                  onClick={()=>setOpenAddMemberForm(!addMemberForm)}
                  className={styles.btn_add_member}
                  variant="contained">Add members</Button>
                  <BiNotification
                      onClick = {()=>setOpenNotification(!notification)}
                      className={styles.icon_notify}
                  />
            </div>
          </div>
              <Outlet />

              <Notification
                notification = {notification}
                setOpenNotification = {setOpenNotification}
              />
              <AddMemberForm
                addMemberForm = {addMemberForm}
                setOpenAddMemberForm ={setOpenAddMemberForm}
              />
        </div>
      
    </div>
  )
}
export default ProjectContainer;


