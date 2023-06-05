import React from 'react'
import styles from './styles.module.scss';
import ShareLayout from '../../layouts/share/user/ShareLayout';
import MainSide from '../../../components/mainside/MainSide';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Avatar } from '@mui/material';

import AvatarGroup from '@mui/material/AvatarGroup';
import ProgressBar from '@ramonak/react-progress-bar';
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import ProjectSquareItem from '../../../components/project-square-item/ProjectSquareItem';
const OverviewsContainer = () => {

  return (
      //  <MainSide/>
      <div 
        className={styles.overviews_container}>
        <div className={styles.overviews_body}>
          <p className={styles.title_page}>Tổng quan</p>
          <div className={styles.row_top}>
            <div className={styles.figure_container}>
                <div className={styles.doing_project_container}>
                <div className={styles.text_container}>
                        <p className={styles.title}>
                          Dự án đang thực hiện
                        </p>
                        <p className={styles.quantity}>
                          17
                        </p>
                    </div> 
                    <Link 
                      className={styles.link_to_item}
                    to=''>
                      Xem thêm
                    </Link>
                </div>
                <div className={styles.doing_task_container}>
                   <div className={styles.text_container}>
                        <p className={styles.title}>
                          Nhiệm vụ đang thực hiện
                        </p>
                        <p className={styles.quantity}>
                          17
                        </p>
                    </div> 
                    <Link 
                      className={styles.link_to_item}
                    to=''>
                      Xem thêm
                    </Link>
                </div>
            </div>
            <div className={styles.some_projects_container}>
              <p className={styles.title}>Tất cả dự án
              </p>
              <div className={styles.list_project}>
                <div className={styles.list_recent_projects}>
                  <ProjectSquareItem/>
                  <ProjectSquareItem/>
                  <ProjectSquareItem/>
                   
                </div>
                <Link
                  className={styles.link_to_item}
                >Xem thêm
                  <BsArrowRight/>
                </Link>
                </div>
            </div>
          </div>
          <div className={styles.row_bottom}>
            <div className={styles.calendar_container}>

            </div>
            <div className={styles.due_task_container}>
                <p className={styles.title}>Nhiệm vụ sắp tới</p>
                <div className={styles.list_tasks}>
                  <Link to ='' className={styles.task_item}>
                    <p className={styles.name_task}>Xử lý backend</p>
                    <div className={styles.infor}>
                      <label 
                      className={styles.label}
                      htmlFor="">UI/UX</label>
                      <label 
                      className={styles.priority}
                      htmlFor="">Trung bình</label>
                       <AvatarGroup
                            max={3}
                            sx={{
                              '& .MuiAvatar-root': { width:24, height:24, fontSize: 10 },
                            }}
                          >
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                          </AvatarGroup>

                    </div>
                      <p 
                          style = {{color:'red'}}
                        className={styles.due_date}
                      htmlFor="">Hôm nay</p>
                   
                  </Link>
                  <Link to ='' className={styles.task_item}>
                    <p className={styles.name_task}>Xử lý backend</p>
                    <div className={styles.infor}>
                      <label 
                      className={styles.label}
                      htmlFor="">UI/UX</label>
                      <label 
                      className={styles.priority}
                      htmlFor="">Trung bình</label>
                      <AvatarGroup
                            max={3}
                            sx={{
                              '& .MuiAvatar-root': { width:24, height:24, fontSize: 10 },
                            }}
                          >
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                          </AvatarGroup>

                      </div>
                      <p 
                          style = {{color:'red'}}
                        className={styles.due_date}
                      htmlFor="">Hôm nay</p>
                   
                  </Link>
                  <Link to ='' className={styles.task_item}>
                    <p className={styles.name_task}>Xử lý backend</p>
                    <div className={styles.infor}>
                      <label 
                      className={styles.label}
                      htmlFor="">UI/UX</label>
                      <label 
                      className={styles.priority}
                      htmlFor="">Trung bình</label>
                      <AvatarGroup
                            max={3}
                            sx={{
                              '& .MuiAvatar-root': { width:24, height:24, fontSize: 10 },
                            }}
                          >
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                          </AvatarGroup>
                    </div>

                          <p 
                          style = {{color:'red'}}
                        className={styles.due_date}
                      htmlFor="">Hôm nay</p>
                   
                  </Link>
                  <Link to ='' className={styles.task_item}>
                    <p className={styles.name_task}>Xử lý backend</p>
                    <div className={styles.infor}>
                      <label 
                      className={styles.label}
                      htmlFor="">UI/UX</label>
                      <label 
                      className={styles.priority}
                      htmlFor="">Trung bình</label>
                       <AvatarGroup
                            max={3}
                            sx={{
                              '& .MuiAvatar-root': { width:24, height:24, fontSize: 10 },
                            }}
                          >
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                          </AvatarGroup>

                    </div>
                          <p 
                          style = {{color:'orange'}}
                        className={styles.due_date}
                      htmlFor="">Ngày mai</p>
                   
                  </Link>
                  <Link to ='' className={styles.task_item}>
                    <p className={styles.name_task}>Xử lý backend</p>
                    <div className={styles.infor}>
                      <label 
                      className={styles.label}
                      htmlFor="">UI/UX</label>
                      <label 
                      className={styles.priority}
                      htmlFor="">Trung bình</label>
                      <AvatarGroup
                            max={3}
                            sx={{
                              '& .MuiAvatar-root': { width:24, height:24, fontSize: 10 },
                            }}
                          >
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                          </AvatarGroup>

                    </div>
                          <p 
                          style = {{color:'orange'}}
                        className={styles.due_date}
                      htmlFor="">Ngày mai</p>
                   
                  </Link>
                  <Link to ='' className={styles.task_item}>
                    <p className={styles.name_task}>Xử lý backend</p>
                    <div className={styles.infor}>
                      <label 
                      className={styles.label}
                      htmlFor="">UI/UX</label>
                      <label 
                      className={styles.priority}
                      htmlFor="">Trung bình</label>
                     
                      <AvatarGroup
                            max={3}
                            sx={{
                              '& .MuiAvatar-root': { width:24, height:24, fontSize: 10 },
                            }}
                          >
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                          </AvatarGroup>

                    </div>
                          <p 
                          style = {{color:'red'}}
                        className={styles.due_date}
                      htmlFor="">Hôm nay</p>
                   
                  </Link>
                </div>
                <div className={styles.see_more_areas}>
                  <Link
                    className={styles.see_more_task}>Xem tất cả <IoIosArrowDown/></Link>
                </div>
               
            </div>
          </div>
        </div>
      </div>
  )
}
export default OverviewsContainer;