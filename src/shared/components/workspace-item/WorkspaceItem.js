import React from 'react'
import styles from './styles.module.scss'
import { Avatar, AvatarGroup, Button, TextField } from '@mui/material';
import avatar from '../../../assets/images/avatar.jpg'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
const WorkspaceItem = () => {
    const [priorityCode,setCode] = useState('0')
    const [openModal,handleOpenModel] = useState(false)

  return (
    <div className={styles.workspace_item_container}>
        <div className={styles.workspace_item_body}>
            <p className={styles.name_project_item}>
                <Link 
                    to=''
                    className={styles.link_item}> 
                    Mobile Dog App
                </Link>
            </p>
            <p className={styles.description}>
                Trello là công cụ quản lý công việc
                 linh hoạt, nơi các nhóm có thể lập
                  kế hoạch, cộng tác trên các dự án,
                   tổ chức quy trình làm việc và theo 
                   dõi tiến độ một cách trực quan,
            </p>
            <div className={styles.other_infor}>
                <div className={styles.priority}>
                    <p className={`${styles.priority_label} 
                        ${priorityCode==='0'?styles.public_color:
                          priorityCode==='1'?styles.workspace_color:
                          priorityCode==='2'?styles.private_color:''}`}>
                        Public
                    </p>
                </div>
                <div className={styles.group_member}>
                    <AvatarGroup
                      sx={{
                        '& .MuiAvatar-root': { width:26, height:26, fontSize: 14 },
                      }}
                    spacing={-1}
                    max={6}>
                    
                        <Avatar
                            src={avatar}
                        />
                        <Avatar
                            src={avatar}
                        />
                        <Avatar
                            src={avatar}
                        />
                    </AvatarGroup>
                </div>
                <AiOutlineEdit 
                    onClick={()=>handleOpenModel(!openModal)}
                    className={styles.icon_edit_workspace}/>
            </div>
        </div>

        {
           openModal&&(
            <div className={styles.workspace_modal}>
                <div className={styles.create_form}>
                    <div className={styles.workspace_form}>
                        <div className={styles.workspace_header}>
                            <p
                                >Edit workspace</p>
                            <IoIosClose 
                                onClick={()=>handleOpenModel(false)}
                                className={styles.icon_close}/>
                        </div>
                        <div className={styles.workspaces_content}>
                            <form 
                                action="">
                                <p className={styles.workspace_details}>Workspace details</p>
                                <div className={styles.group_input}>
                                    <label htmlFor="">Project name</label>
                                    <TextField
                                        size='small'
                                    />
                                </div>
                                <div className={styles.group_input}>
                                    <label htmlFor="">Description</label>
                                    <TextField
                                        size='small'
                                        multiline ={true}
                                        rows={3}
                                        maxRows={6}
                                    />
                                </div>
                                <div className={styles.set_priority}>
                                    <label htmlFor="">
                                        Set priority
                                    </label>
                                    <select>
                                        <option value="">
                                            Public
                                        </option>
                                        <option value="">
                                            Private
                                        </option>
                                        <option value="">
                                            Workspace
                                        </option>
                                    </select>
                                </div>

                                <div className={styles.button_group}>
                                    <Button variant='outlined'>Save</Button>
                                    <Button
                                        onClick={()=>handleOpenModel(false)}
                                    >Cancel</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           )
        }
    </div>
  )
}
export default WorkspaceItem;
