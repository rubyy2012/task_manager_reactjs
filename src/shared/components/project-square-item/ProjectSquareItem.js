import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import ProgressBar from '@ramonak/react-progress-bar'
import { Avatar, AvatarGroup } from '@mui/material'
import { MdDeleteOutline } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'
const ProjectSquareItem = ({id}) => {
  return (
    <Link 
        to = {`/all-projects/${id}`}
        className={styles.recent_project_component}>
                      <p className={styles.name}>Lập trình di động
                      <span className={styles.status}>Đang thực hiện</span>
                      </p>
                      <div className={styles.description}>
                          Dự án sẽ làm việc với các công cụ quản lý mã nguồn
                          và các ứng dụng được sử dụng trong thực tế như jeankins,
                          CI/CD....
                      </div>
                      <div className={styles.progress}>
                        <ProgressBar
                          isLabelVisible = {false}
                          height='6px'
                          bgColor='orange'
                          completed={70}
                        />
                        <span className={styles.text}>70%</span>
                      </div>
                      <div className={styles.footer}>
                        <p className={styles.team_members}>
                          <AvatarGroup
                            max={4}
                            sx={{
                              '& .MuiAvatar-root': { width:26, height:26, fontSize: 14 },
                            }}
                          >
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                          </AvatarGroup>
                        </p>
                        <div className={styles.group_icon}>
                            <MdDeleteOutline
                            className={styles.icon_delete}
                          />
                            <AiOutlineEdit
                              className={styles.icon_edit}
                            />
                        </div>
                    
                      </div>
                    </Link>
  )
}

export default ProjectSquareItem