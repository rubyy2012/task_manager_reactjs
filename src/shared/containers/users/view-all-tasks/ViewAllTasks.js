import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import ButtonViewTask from '../../../components/all-button/button-view-one-task/ButtonViewTask'
import { Avatar, AvatarGroup } from '@mui/material'
import { BsFilter } from 'react-icons/bs'
import StatusList from '../../../../api/FilterStatus'
import DuedateList from '../../../../api/FilterDuedate'
import useOnClickOutside from '../../../../hooks/useOnClickOutside'
import PriorityList from '../../../../api/FilterPriority'
import { AiOutlineDelete } from "react-icons/ai";
import TaskDetailContainer from '../task-detail-container/TaskDetailContainer'
const ViewAllTasks = () => {
    const [isCompleted,setCompleted] = useState(false)
    const [isOpenStatus,setOpenFilterStatus] = useState(false)
    const [isOpenPriority,setOpenFilterPriority] = useState(false)
    const [isOpenDuedate,setOpenFilterDuedate] = useState(false)
    const [taskDetailForm,setOpenTaskDetailForm] = useState(false)
    const ref = useRef();
    useOnClickOutside(ref, () => {
      setOpenFilterStatus(false)
      setOpenFilterPriority(false)
      setOpenFilterDuedate(false)
    }
    );
  return (
    <div className={styles.list_all_tasks_container}>
        <div className={styles.list_all_tasks_body}>
            <div className={styles.header}>
                <p className={styles.name_page}>Tất cả các nhiệm vụ</p>
            </div>
            <div className={styles.listtasks_container}>
          <table>
                <thead>
                    <th>Nhiệm vụ</th>
                    <th className={styles.status_column}>Trạng thái
                      <BsFilter 
                        onClick={()=>setOpenFilterStatus(!isOpenStatus)}
                        className={styles.filter_icon}/>
                        {
                          isOpenStatus&&(
                            <div
                              ref={ref}
                             className={styles.filter_box}>
                            {
                              StatusList.map(item=>(
                                <p 
                                  onClick={()=>console.log('id',item.id)}
                                  key={item.id}
                                  className="">{item.name}</p>
                              ))
                            }
                          </div>
                          )
                        }
                    </th>
                    <th>Nhãn</th>
                    <th  className={styles.priority_column}>Độ ưu tiên
                      <BsFilter 
                        onClick={()=>setOpenFilterPriority(!isOpenPriority)}
                        className={styles.filter_icon}/>
                        {
                          isOpenPriority&&(
                            <div 
                              ref={ref}
                              className={styles.filter_box}>
                              {
                                  PriorityList.map(item=>(
                                    <p 
                                      key={item.id}
                                      className="">{item.name}</p>
                                  ))
                                }
                            </div>
                          )
                        }
                     
                    </th>
                    <th>Tiến độ</th>
                    <th className={styles.duedate_column}>Hạn ngày
                      <BsFilter 
                        onClick={()=>setOpenFilterDuedate(!isOpenDuedate)}
                        className={styles.filter_icon}/>
                        {
                          isOpenDuedate&&(
                            <div 
                            ref={ref}
                            className={styles.filter_box}>
                            {
                              DuedateList.map(item=>(
                                <p 
                                  key={item.id}
                                  className="">{item.name}</p>
                              ))
                            }
                        </div>
                          )
                        }
                       
                    </th>
                    <th>Người tạo task</th>
                    <th>Thành viên</th>
                </thead>
            <tbody>
              <tr>
              <td className={styles.task_area}>
                  <div className={styles.task_title}>
                    Công nghệ phần mềm
                  </div>
                </td>
                <td className={styles.status}>
                  <p
                    style={
                    isCompleted?
                      {backgroundColor:'#f1f9fe',color: '#6099b8'}
                    :
                      {backgroundColor:'#fef2f3',color:'#f587a1'}
                    }
                   className={styles.status_label}>
                        Chưa hoàn thành
                  </p>
                </td>
                <td className={styles.label}>
                    <div className={styles.label_title}>
                        UI/UX
                    </div>
                </td>
                <td className={styles.priority}>
                    <div className={styles.priority_color}>
                        Trung bình
                    </div>
                </td>
                <td className={styles.progress}>
                   <div  
                    style={
                      isCompleted?
                        {color: '#6099b8'}
                      :
                        {color:'#f587a1'}
                      }
                      className={styles.progress_title}>
                        3/7
                   </div>
                </td>
                <td className={styles.due_date}>
                  <p className={styles.due_date_title}>17/06/2023 - 2:44pm</p>
                </td>
                <td className={styles.supervisor}>
                  <Avatar
                    className={styles.avatar}
                    />
                  <p className={styles.supervisor_name}>Ruby</p>
                </td>
                <td className={styles.team_members}>
                      <AvatarGroup
                        className={styles.avatar_group}
                        sx={{
                            '& .MuiAvatar-root': { width:27, height:27, fontSize: 14 },
                        }}
                        max = {3}
                      >
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                      </AvatarGroup>
                </td>
                <td>
                  <ButtonViewTask
                        id = ''
                  />
                </td>
                <td>
                    <AiOutlineDelete className={styles.icon_delete}/>
                </td>
              </tr>

              <tr>
                <td className={styles.task_area}>
                  <div className={styles.task_title}>
                    Lập trình di động
                  </div>
                </td>
                <td className={styles.status}>
                  <p 
                  style={
                    isCompleted?
                      {backgroundColor:'#f1f9fe',color: '#6099b8'}
                    :
                      {backgroundColor:'#fef2f3',color:'#f587a1'}
                    }
                  className={styles.status_label}>
                        Chưa hoàn thành
                  </p>
                </td>
                <td className={styles.label}>
                    <div className={styles.label_title}>
                        Web development
                    </div>
                </td>
                <td className={styles.priority}>
                    <div className={styles.priority_color}>
                        Thấp
                    </div>
                </td>
                <td className={styles.progress}>
                   <div 
                    style={
                      isCompleted?
                        {color: '#6099b8'}
                      :
                        {color:'#f587a1'}
                      }
                      className={styles.progress_title}>
                        3/7
                   </div>
                </td>
                <td className={styles.due_date}>
                  <p className={styles.due_date_title}>17/06/2023 - 2:44pm</p>
                </td>
                
                <td className={styles.supervisor}>
                  <Avatar
                    className={styles.avatar}
                    />
                  <p className={styles.supervisor_name}>Ruby</p>
                </td>
                <td className={styles.team_members}>
                      <AvatarGroup
                        sx={{
                            '& .MuiAvatar-root': { width:27, height:27, fontSize: 14 },
                        }}
                        max = {3}
                      >
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                      </AvatarGroup>
                </td>
                <td>
                  <ButtonViewTask/>
                </td>
                <td>
                    <AiOutlineDelete className={styles.icon_delete}/>
                </td>
              </tr>

              <tr>
                <td className={styles.task_area}>
                  <div className={styles.task_title}>
                    Kỹ thuật truyền số liệu
                  </div>
                </td>
                <td className={styles.status}>
                  <p className={styles.status_label}>
                        Đã hoàn thành
                  </p>
                </td>
                <td className={styles.label}>
                    <div className={styles.label_title}>
                        Mobile
                    </div>
                    <div className={styles.label_title}>
                        Frontend
                    </div>
                    {/* <div className={styles.label_title}>
                        Backend
                    </div>
                    <div className={styles.label_title}>
                        DevOps
                    </div>
                    <div className={styles.label_title}>
                        Jeankins
                    </div>
                    <div className={styles.label_title}>
                        CI/CD
                    </div> */}
                    
                </td>
                <td className={styles.priority}>
                    <div className={styles.priority_color}>
                        Cao
                    </div>
                </td>
                <td className={styles.progress}>
                   <div className={styles.progress_title}>
                        7/7
                   </div>
                </td>
                <td className={styles.due_date}>
                  <p className={styles.due_date_title}>17/06/2023 - 2:44pm</p>
                </td>
                <td className={styles.supervisor}>
                  <Avatar
                    className={styles.avatar}
                    />
                  <p className={styles.supervisor_name}>Ruby</p>
                </td>
                <td className={styles.team_members}>
                      <AvatarGroup
                        sx={{
                            '& .MuiAvatar-root': { width:27, height:27, fontSize: 14 },
                        }}
                        max = {3}
                      >
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                      </AvatarGroup>
                </td>
                <td>
                  <ButtonViewTask

                  />
                </td>
                <td>
                    <AiOutlineDelete className={styles.icon_delete}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>  
        </div>
    </div>
  )
}

export default ViewAllTasks