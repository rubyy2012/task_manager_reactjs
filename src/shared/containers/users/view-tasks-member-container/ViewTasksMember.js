import React, { useState } from 'react'
import styles from './styles.module.scss';
import ProgressBar from '@ramonak/react-progress-bar';
import ButtonViewTask from '../../../components/all-button/button-view-one-task/ButtonViewTask';
import { Avatar } from '@mui/material';
import { BsFilter } from "react-icons/bs";
import PriorityList from '../../../../api/FilterPriority'
import StatusList from '../../../../api/FilterStatus'
import DuedateList from '../../../../api/FilterDuedate';
import { useRef } from 'react';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';

const ViewTasksMember = () => {
  const [isCompleted,setCompleted] = useState(false)
  const [isOpenStatus,setOpenFilterStatus] = useState(false)
  const [isOpenPriority,setOpenFilterPriority] = useState(false)
  const [isOpenDuedate,setOpenFilterDuedate] = useState(false)
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setOpenFilterStatus(false)
    setOpenFilterPriority(false)
    setOpenFilterDuedate(false)
  }
  );
  return (
    <di className={styles.view_tasks_member_container}>
        <div className={styles.view_tasks_member_body}>
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
                <td>
                  <ButtonViewTask/>
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
                <td>
                  <ButtonViewTask/>
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
                <td>
                  <ButtonViewTask/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    </di>
  )
}

export default ViewTasksMember