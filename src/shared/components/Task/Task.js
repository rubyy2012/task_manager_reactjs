import React from 'react'
import styles from './styles.module.scss';
import { IoCalendarOutline } from "react-icons/io5";
import { Avatar, AvatarGroup, Box, Button, Chip, Modal, TextField, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { TiAttachment } from "react-icons/ti";
import { AiOutlineComment } from "react-icons/ai";
import { TbSquareRoundedCheck } from "react-icons/tb";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ChecklistIcon from '@mui/icons-material/Checklist';
import TaskAction from '../../../redux/tasks/TaskAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TaskModal from '../../containers/users/task-modal/TaskModal';
import moment from 'moment';
const Task = ({placeholder,link,task,myref,...props}) => {
    console.log('task nè',task);
    const {id} = useParams();
    const dispatch = useDispatch();
    let date, time;
    //     if (task?.dueDate) {
    //     [date, time] = task.dueDate.split('T');
    //     }
    if(task?.dueDate)
    {
         date = moment(task.dueDate).format('DD-MM-YYYY');
         time = moment(task.dueDate).format('HH:mm');
    }
    const userInfor = JSON.parse(localStorage.getItem('userInfor'));
    const userIdLocal = userInfor?.account.id;
    const { listMembers } = useSelector((state) => ({
        listMembers: state.workspace.listMembers,
      }));
    //find user
    const findUser = listMembers?.data.find(user=>user.id ===userIdLocal)
    const onVisibleDelete = (findUser,taskId) => {
       if(findUser&& findUser.role< 2)
       {
        return (
            <DeleteOutlineIcon 
                onClick = {()=>handleDeleteTask(taskId)}
                classes={`${styles.icon} ${styles.delete_icon}`}
            />
        )
       }
    }
    const handleDeleteTask = (taskId) => {
        dispatch({
            type: TaskAction.REQUEST_DELETE_TASK,
            payload: {
                id: taskId,
                workspaceId: parseInt(id),
                callback: {
                    toast : (message) => toast(message)
                }
            }
        })
    }

    //handle open modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
            <div
                ref={myref}
                {...props}
                className={styles.task_container}>    
                    <div 
                        className={styles.task_body}>
                        <div className={styles.task_title_area}>
                            <Link to = {link} className={styles.link_item}>
                                <p className={styles.circle}></p>
                                <p className={styles.title_name}>
                                    {task?.title}
                                </p>
                            </Link>
                        </div>
                        <div className={styles.priority_areas}>
                            {
                                (
                                    <Chip 
                                        className={styles.chip_label}
                                        style = {
                                           task?.priority===1? {backgroundColor:'#FFE15D'}:
                                           task?.priority===2? {backgroundColor:'#FF9F45'}:
                                           {backgroundColor:'#86A3B8'}
                                        }
                                        label={
                                            task?.priority===1?'Trung bình':
                                            task?.priority===2?'Cao':
                                            'Thấp'} 
                                        variant="outlined" />
                                )
                            }
                        </div>
                        <div className={styles.card_checklist_areas}>
                            {
                                task?.subtaskCompleted===task?.subtaskQuantity&&(
                                <Button 
                                    className= {styles.btn_checklist}
                                    variant="outlined" 
                                    startIcon={<ChecklistIcon className={styles.checklist_icon}/>}>
                                    {`${task?.subtaskCompleted}/${task?.subtaskQuantity}`}
                                </Button>
                                )
                            }
                            
                        </div>
                        <div className={styles.attachment_areas}>
                                {
                                    task?.commentQuantity>0 && 
                                    <p className={styles.label_area}>
                                        <AiOutlineComment
                                            className={styles.label_icon}
                                        /> 
                                        <span>{task.commentQuantity}</span>
                                    </p>
                                }
                        </div>
                        <div className={styles.label_area}>
                            
                        </div>
                        <div className={styles.assignee_areas}>
                            <div className={styles.calendar_container}>
                                <IoCalendarOutline className={styles.calendar_icon}/>
                                <span className={styles.day_title}>{date}</span>
                                <span className={styles.time_title}>{time}</span>
                            </div>
                            <div className={styles.label_container}>
                                {
                                    task?.labelColors?.map(label=> (
                                        <label
                                            style={{backgroundColor: label?.color}}
                                            className={styles.tag_label}></label>
                                    ))
                                }
                            </div>
                           
                            <div className={styles.member_container}>
                                <AvatarGroup
                                        className={styles.avatar_group}
                                        sx={{
                                            '& .MuiAvatar-root': { width: 20, height: 20, fontSize: 10 },
                                        }}
                                        spacing={-1}
                                        max={3}>
                                        {
                                            task?.members?.map(member =>
                                                <Avatar
                                                alt="ngoc"
                                                key={member.id}
                                                src = {member.linkAvatar}
                                                /> )
                                        }
                                    </AvatarGroup>
                            </div>
                            <div className={styles.other_options_container}>
                                <EditIcon 
                                    classes={styles.option_icon}
                                    onClick={handleOpen}
                                    // onClick = {()=>setOpenTaskDetailForm(true)}
                                    className={styles.icon}/>
                                {onVisibleDelete(findUser,task?.id)}
                                
                            </div>
                        </div>
                    </div>
                    {open&&(
                        <TaskModal
                            taskId = {task?.id}
                            open = {open}
                            setOpen = {setOpen}
                            handleClose = {handleClose}
                        />
                    )}
                    
            </div>
 
  )
}
export default Task;
