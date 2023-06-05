import React from 'react'
import styles from './styles.module.scss'
import ListCard from '../../../components/list-cards/ListCard';
import ProgressBar from "@ramonak/react-progress-bar";
import { Avatar, AvatarGroup, Button } from '@mui/material';
import avatar from '../../../../assets/images/avatar.jpg';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Header from '../../../components/header/Header';

const ProjectContainer = () => {
  return (
   <div className={styles.project_container}>
    <div className={styles.project_body}>
      {/* Tracking */}
      <div className={styles.project_tracking_container}>
        <div className={styles.project_tracking_body}>
          {/* Overview */}
          <div className={styles.project_overview_container}>
            <p className={styles.name_project}>Piper Enterprise</p>
            <div className={styles.progress_container}>
              <ProgressBar
                bgColor ="#3760ff"
                baseBgColor='#f0f0f0'
                height='8px'
                completed={13} 
                isLabelVisible={false}
                className={styles.progress_bar_chart}
                />
                <span>13% completed</span>
            </div>
          </div>
          {/* Members */}
          <div className={styles.members_container}>
              <div className={styles.avatar_group_container}>
                  <AvatarGroup 
                      sx={{
                        '& .MuiAvatar-root': { width: 28, height: 28, fontSize: 15 },
                      }}
                      className={styles.avatar_group}
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
              <div className={styles.add_member_container}>
                  <Button 
                    className={styles.btn_add}
                    variant="contained" 
                    startIcon={<AddIcon className={styles.add_icon}/>}>
                    Add Members
                </Button>
              </div>
          </div>
        </div>
      </div>
      <div className={styles.navigation_container}>
        <div className={styles.navigation_group}>
            <Link to
              className={styles.navigation_item}
            >
              Overview
            </Link>
            <Link to
              className={styles.navigation_item}
              >
              Tasks
            </Link>
            <Link to
              className={styles.navigation_item}
              >
             Notes
            </Link>
            <Link to
              className={styles.navigation_item}
              >
            Questions
            </Link>
        </div>
      </div>
      <div className={styles.list_cards_container}>
        <div className={styles.list_cards_body}>
            <ListCard name = 'Backlog'/>
            <ListCard name='To do'/>
            <ListCard name = 'In Progress'/>
            <ListCard name = 'Done'/>
        </div>
    </div>
    </div>
   </div>
  )
}
export default ProjectContainer;
