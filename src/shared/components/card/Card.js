import React, { useState } from 'react'
import styles from './styles.module.scss';
import { Avatar, AvatarGroup, Button, Chip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChecklistIcon from '@mui/icons-material/Checklist';
import avatar from '../../../assets/images/avatar.jpg'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
const Card = () => {
    const [isCompleted,setIsCompleted] = useState(false);
  return (
    <div className={styles.card_container}>
        <div className={styles.card_body}>
            <div className={styles.card_header}>
                <Chip 
                    style={{
                        backgroundColor: "#fff1d6",
                        color: "#cf9546",
                        fontWeight:700
                    }}
                    label="UI/UX Design" />
                <div className={styles.option}>
                    <MoreVertIcon/>
                </div>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_title}>
                    Wireframing
                </div>
                <p className={styles.card_description}>
                    Create low-fidelity designs that outline the basic 
                    structure and layout of the product or service
                </p>
                <div className={styles.card_checklist}>
                    <Button 
                        className= {`${styles.btn_checklist} ${isCompleted?styles.isCompleted:''}`}
                        variant="outlined" 
                        startIcon={<ChecklistIcon className={styles.checklist_icon}/>}>
                        3/10
                    </Button>
                </div>
                <div className={styles.line_space}></div>
                <div className={styles.card_footer}>
                    <div className={styles.avatar_group_container}>
                        <AvatarGroup
                            className={styles.avatar_group}
                            sx={{
                                '& .MuiAvatar-root': { width: 28, height: 28, fontSize: 15 },
                              }}
                            max={4}>
                            
                            <Avatar
                                alt="ngoc"
                                src = {avatar}
                                />
                            <Avatar
                                alt="ngoc"
                                src = {avatar}
                            />
                            <Avatar
                                alt="ngoc"
                                src = {avatar}
                            />
                            <Avatar
                                alt="ngoc"
                                src = {avatar}
                            />
                            <Avatar
                                alt="ngoc"
                                src = {avatar}
                            />
                            <Avatar
                                alt="ngoc"
                                src = {avatar}
                            />
                        </AvatarGroup>
                    </div>

                    <div className={styles.interactive_container}>
                        <p className={styles.icon_container}>
                            <InsertCommentIcon className={styles.card_icon}/> 
                            <span className={styles.card_icon_label}>2</span>
                        </p>

                        <p className={styles.icon_container}>
                            <AttachFileIcon className={styles.card_icon}/> 
                            <span className={styles.card_icon_label}>2</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Card;
