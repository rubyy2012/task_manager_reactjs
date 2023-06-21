import React from 'react'
import styles from './styles.module.scss';
import { Avatar, AvatarGroup, Box, Button, Tab, Tabs } from '@mui/material';
import avatar from '../../../../assets/images/avatar.jpg';
import { useState } from 'react';
import Notification from '../../../components/notifycation/Notification';
import { BiNotification } from "react-icons/bi";
import project_image from '../../../../assets/icons/project_icon.png'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import AddMemberForm from '../../../components/add-member/AddMemberForm';
import CreateTask from '../../../components/create-task/CreateTask';
const ProjectContainer = () => {
  const [addMemberForm,setOpenAddMemberForm] = useState(false);
  const [notification,setOpenNotification] = useState(false);
  const [openCreateTask,setOpenCreateTask] = useState(false);
  const [value, setValue] = useState('0');
  const {id} = useParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
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
                        <Box sx={{ width: '100%' }}>
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              aria-label="wrapped label tabs example"
                            >
                              <Tab 
                                wrapped
                                fontSize = {16}
                                onClick={()=>navigate(`/project-page/project/${id}/all-tasks`)}
                                value="0" 
                                label="Tất cả nhiệm vụ"/>
                              <Tab 
                                value="1" 
                                fontSize = {16}
                                onClick={()=>navigate(`/project-page/project/${id}/team-members`)}
                                label="Thành viên nhóm"/>
                            </Tabs>
                          </Box>
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
                  onClick={()=>setOpenCreateTask(true)}
                  className={styles.btn_add_member}
                  variant="contained">Tạo nhiệm vụ</Button>
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
              <CreateTask
                setOpenCreateTask = {setOpenCreateTask}
                openCreateTask = {openCreateTask}/>
        </div>
      
    </div>
  )
}
export default ProjectContainer;


