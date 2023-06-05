import React, { useState } from 'react'
import styles from './styles.module.scss';
import { Avatar, AvatarGroup, Button, TextField } from '@mui/material';
import { RxDotsHorizontal } from "react-icons/rx";
import { AiOutlineShareAlt } from "react-icons/ai";
import PriorityLabel from '../PriorityLabel/PriorityLabel';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.jpg'
import { ChipButton } from '../ChipButton/ChipButton';
import AddIcon from '@mui/icons-material/Add';
import CheckList from '../check-list/CheckList';
import DueDate from '../DueDate/DueDate';
import { CiEdit } from "react-icons/ci";
import EditDescription from '../edit-description/EditDescription';
import FileUpload from '../file/FileUpload';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import SendIcon from '@mui/icons-material/Send';
import Comments from '../Comments/Comments';
import TagLabel from '../TagLabel/TagLabel';
import Priority from '../Priority/Priority';
import Assignee from '../Assignee/Assignee';
import Viewers from '../Viewers/Viewers';
const TaskDetail = () => {
    const [isOpenCalendar,setOpenCalendar] = useState(false)
    const [isOpenEditDes,setOpenEditDes] = useState(false)
    const [isOpenLabel,setOpenLabel] = useState(false);
    const [isOpenPriority,setOpenPriority] = useState(false);
    const [isOpenSelectMember,setOpenSelectMember] = useState(false);
    const [isToggle,setToggle] = useState(true)
  return (
    <div className={styles.taskdetail_container}>
         <div className={styles.taskdetail_nameproject}>
                    <div className={styles.name}>
                        Template Progress 
                        <Button 
                                className={styles.status_label}
                                variant="contained">Completed</Button>
                    </div>
                    
                    <div className={styles.header_option_container}>
                        <Viewers/>
                        <AiOutlineShareAlt
                            className={styles.share_icon}
                        />
                        <RxDotsHorizontal 
                            className={styles.threedot_icon}
                        />
                    </div>
                </div>
        <div className={styles.taskdetail_body}>
            <div className={styles.body_left}>
                <div className={styles.parterner}>
                    <div className={styles.assignto}>
                        <p className={styles.label}>ASSIGN TO</p>
                        <div className={styles.members}>
                            <AvatarGroup
                                className={styles.avatar_group}
                                sx={{
                                    '& .MuiAvatar-root': { width:26, height:26, fontSize: 14 },
                                }}
                                spacing={-1}
                                max={4}>
                                <Avatar
                                className={styles.avatar}
                                src={avatar}
                                sx={{ width:24, height:24 }}
                                />
                                <Avatar
                                className={styles.avatar}
                                src={avatar}
                                sx={{ width:24, height:24 }}
                                />
                                <Avatar
                                className={styles.avatar}
                                sx={{ width:24, height:24 }}
                                src={avatar}
                                />
                                <Avatar
                                className={styles.avatar}
                                sx={{ width:24, height:24 }}
                                src={avatar}
                                />
                                <Avatar
                                className={styles.avatar}
                                src={avatar}
                                sx={{ width:24, height:24 }}
                                />
                                <Avatar
                                className={styles.avatar}
                                sx={{ width:24, height:24 }}
                                src={avatar}
                                />
                                <Avatar
                                className={styles.avatar}
                                sx={{ width:24, height:24 }}
                                src={avatar}
                                />
                            </AvatarGroup>
                            <CiEdit 
                                onClick={()=>setOpenSelectMember(!isOpenSelectMember)}
                                className={styles.edit_icon}/>
                            {
                                isOpenSelectMember&& (
                                <Assignee
                                    setOpenSelectMember = {setOpenSelectMember}
                                />)
                            }
                    </div>
                    </div>
                    <div className={styles.createdby}>
                        <p className={styles.label}>CREATED BY</p>
                        <Link to="" className={styles.avatar_area}>
                            <Avatar
                                src={avatar}
                                sx={{width:24,height:24}}
                            />
                            <span>Johnson Jr</span>
                        </Link>
                    </div>  
                </div>
        
                
               <div className={styles.labels_and_priority}>

                <div className={styles.labels_container}>
                    <p className={styles.label}>LABELS</p>
                    <div className={styles.labels_group}>
                        <ChipButton
                            textLabel = 'Mobile'
                            bgColor = '#FFD93D'
                        />
                        <ChipButton
                            textLabel = 'Design'
                            bgColor =  '#F49D1A'
                        />
                        <ChipButton
                            textLabel = 'Frontend'
                            bgColor = '#95CD41'
                        />
                        <button 
                            onClick = {()=>setOpenLabel(!isOpenLabel)}
                            className={styles.btn_add_label}>
                            <AddIcon className={styles.add_icon}/>
                        </button>
                        
                    </div>
                    {
                        isOpenLabel&& (
                            <TagLabel
                                setOpenLabel = {setOpenLabel}
                            />
                        )
                    }
                </div>
                    <div className={styles.priority_container}>
                            <p className={styles.label}>PRIORITY</p>
                            <div className={styles.priority_wrapper}>
                                <PriorityLabel
                                    btn_low = 'btn_low'
                                    text = 'Low'
                                    />
                                <button 
                                    onClick={()=>setOpenPriority(!isOpenPriority)}
                                    className={styles.btn_add_priority}>
                                    {/* <AddIcon className={styles.add_icon}/> */}
                                    <CiEdit 
                                            className={styles.edit_icon}/>
                                </button>
                                {
                                    isOpenPriority && (
                                        <Priority 
                                            setOpenPriority = {setOpenPriority}
                                        />
                                    )
                                }
                            </div>
                        </div>
               </div>
                <div className={styles.duedate_container}>
                    <p className={styles.label}>DUE DATE</p>
                    <button
                        className={styles.btn_change_due_date}
                        onClick={()=>setOpenCalendar(!isOpenCalendar)}
                        > 17 Jun - <span>6:00AM</span></button>
                        {
                            isOpenCalendar&&<DueDate 
                                setOpenCalendar={setOpenCalendar}/>
                        }
                </div>
                <div className={styles.description_container}>
                   <div className={styles.description_left}>
                        <p className={styles.label}>DESCRIPTION</p>
                        <p className={styles.description_content}>
                            We need to develope several options(Inbox template, chat templates, task templates) of
                            cool user interface design templates.
                        </p>
                   </div>
                   <div className={styles.description_right}>
                        <CiEdit 
                            onClick={()=>setOpenEditDes(!isOpenEditDes)}
                            className={styles.edit_icon}/>
                        {
                            isOpenEditDes&&
                            <EditDescription
                                setOpenEditDes = {setOpenEditDes}
                            />
                        }
                   </div>
                </div>
                
                <div className={styles.comments_container}>
                    <p className={styles.label}>COMMENTS</p>
                    <div className={styles.comments_areas}>
                        <div className={styles.write_comment_areas}>
                            <input type="text" />
                            <Avatar className={styles.avatar_input}/>
                            <SendIcon className={styles.send_icon}/>
                        </div>
                        <Comments/>
                    </div>
                </div>
            </div>
            <div className={styles.body_right}>
                <div className={styles.checklist_container}>
                    <CheckList/>
                </div>
                <div className={styles.attachment_container}>
                    <div 
                        onClick={()=>setToggle(!isToggle)}
                        className={styles.toggle_area}>
                        <button 
                            className={styles.btn_toggle}>
                            {
                                isToggle?
                                <MdExpandLess className={styles.icon_toggle}/> :
                                <MdKeyboardArrowDown className={styles.icon_toggle}/>
                            }
                        </button>
                        <p className={styles.label}>ATTACHMENT</p>
                    </div>
                    {
                        isToggle && (
                            <div className={styles.file_uploads}>
                                <FileUpload/>
                                <FileUpload/>
                                <FileUpload/>
                                <FileUpload/>
                                <FileUpload/>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}
export default TaskDetail;
