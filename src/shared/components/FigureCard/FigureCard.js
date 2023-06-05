import React from 'react'
import styles from './styles.module.scss'; 

import AvatarGroup from '@mui/material/AvatarGroup';
import { Avatar } from '@mui/material';
import avatar from '../../../assets/images/avatar.jpg'
import { Link } from 'react-router-dom';
const FigureCard = (props) => {
  return (
    <div className={styles.figurecard_container}>
        <div className={styles.figurecard_body}>
            <div className={styles.figurecard_header}>
                <span ></span>
                <Link to='' className={styles.card_name}>UI/UX Design <span>(App Design)</span></Link>
            </div> 
            <div className={styles.figurecard_content}>
                <div className={`${styles.figure_item} ${styles.backlog_item}`}>
                    <p>Backlogs</p> <span>3</span>

                </div>
                <div className={`${styles.figure_item} ${styles.todo_item}`}>
                    <p>Todo Task</p> <span>4</span>
                </div>
                <div className={`${styles.figure_item} ${styles.inProgress_item}`}>
                    <p>In Progress Task</p> <span>4</span>
                </div>
                <div className={`${styles.figure_item} ${styles.done_item}`}>
                    <p>Done</p> <span>5</span>
                </div>
            </div> 
            <div className={styles.figurecard_member}>
                <AvatarGroup 
                    spacing={4}
                    sx={{
                        '& .MuiAvatar-root': { width: 32, height: 32, fontSize: 15 },
                    }}
                    max={6}>
                    <Avatar src={avatar}/>
                    <Avatar src={avatar}/>
                    <Avatar src={avatar}/>
                    <Avatar src={avatar}/>
                    <Avatar src={avatar}/>
                </AvatarGroup>
            </div> 
        </div>
    </div>
  )
}
export default FigureCard;