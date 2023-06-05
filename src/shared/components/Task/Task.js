import React from 'react'
import styles from './styles.module.scss';
import { IoCalendarOutline } from "react-icons/io5";
import ColorItem from '../ColorItem/ColorItem';
import { Avatar, AvatarGroup, Button } from '@mui/material';
import avatar from '../../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { TiAttachment } from "react-icons/ti";
import { AiOutlineComment } from "react-icons/ai";
import { TbSquareRoundedCheck } from "react-icons/tb";
import PriorityLabel from '../PriorityLabel/PriorityLabel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { useRef } from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';

const Task = ({taskDetailForm,setOpenTaskDetailForm,placeholder,link,task,myref,...props}) => {
    const ref = useRef();
    useOnClickOutside(ref, () => setOpenMore(false));
    const [openMore,setOpenMore] = useState(false);
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
                                    {/* {task?.name} */}
                                    {task?.title}
                                </p>
                            </Link>
                        </div>
                        <div className={styles.priority_areas}>
                            <PriorityLabel
                                btn_low = 'btn_low'
                                text = 'Low'
                            />
                        </div>
                        <div className={styles.card_checklist_areas}>
                            <Button 
                                className= {styles.btn_checklist}
                                variant="outlined" 
                                startIcon={<ChecklistIcon className={styles.checklist_icon}/>}>
                                3/10
                            </Button>
                        </div>
                        <div className={styles.attachment_areas}>
                                {
                                    task?.attachments && 
                                    <p className={styles.label_area}>
                                        <TiAttachment
                                            className={styles.label_icon}
                                        /> 
                                        <span>{task.attachments}</span>
                                    </p>
                                }
                            
                                {
                                    task?.comments && 
                                    <p className={styles.label_area}>
                                        <AiOutlineComment
                                            className={styles.label_icon}
                                        /> 
                                        <span>{task.comments}</span>
                                    </p>
                                }
            
                                {
                                    task?.completed && 
                                    <p className={styles.label_area}>
                                        <TbSquareRoundedCheck
                                            className={styles.label_icon}
                                        /> 
                                        <span>{task.completed}</span>
                                    </p>
                                }
                        </div>
                        <div className={styles.assignee_areas}>
                            <div className={styles.calendar_container}>
                                <IoCalendarOutline className={styles.calendar_icon}/>
                                <span className={styles.day_title}>{task?.date}</span>
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
                                <MoreHorizIcon
                                    className={styles.more_icon}
                                    onClick = {()=> setOpenMore(!openMore)}
                                />
                                {
                                    openMore&& (
                                        <div 
                                        ref={ref}
                                        className={styles.box_options}>
                                            <div className={styles.edit_container}>
                                                <EditIcon className={styles.icon}/>
                                                <Link
                                                    onClick = {()=>setOpenTaskDetailForm(true)}
                                                    to = ''
                                                    className={styles.link_edit}
                                                >Edit</Link>
                                            </div>
                                            <div className={styles.delete_container}>
                                                <DeleteOutlineIcon className={styles.icon}/>
                                                <button className={styles.btn_delete}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                }
                            
                            </div>
                        </div>
                    </div>
    </div>
 
  )
}
export default Task;
