import React from 'react'
import styles from './styles.module.scss'
import { Avatar, Button, TextField } from '@mui/material'
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import ButtonViewTask from '../../../components/all-button/button-view-task-member/ButtonViewListTasks';
import ProgressBar from "@ramonak/react-progress-bar";
import ButtonViewListTasks from '../../../components/all-button/button-view-task-member/ButtonViewListTasks';
import { useState } from 'react';
import ButtonSwitchRole from '../../../components/all-button/btn-switch-role/ButtonSwitchRole';
const TeamMemberContainer = () => {
  const [isCompleted,setCompleted] = useState(true);
  const [openRole,setOpenRole] = useState(false)
  return (
    <div className={styles.teammember_container}>
      <div className={styles.teammember_body}>
        <div className={styles.listmember_container}>
          <table>
            <thead>
              <th>Thành viên</th>
              <th>Vai trò</th>
              <th>Email</th>
              <th>Đã hoàn thành</th>
              <th>Tiến độ</th>
            </thead>
            <tbody>
              <tr>
                <td className={styles.avatar_area}>
                  <Avatar className={styles.avatar}/>
                  <p className="">Hồng Ngọc</p>
                </td>
                <td className={styles.role_area}>
                 <ButtonSwitchRole
                    setOpenRole = {setOpenRole}
                    openRole = {openRole}
                 />
                </td>
                  
                <td className={styles.email}>
                  <p className={styles.email_text}>
                    bigdipper201201@gmail.com
                  </p>
                </td>
                <td className={styles.number_completed}>
                  <p className={`${styles.completed_task} ${isCompleted?styles.completed:styles.incompleted}`}>
                     3/7
                  </p>
                </td>
                <td>
                  <ProgressBar
                      height='11px'
                      bgColor= '#fdc84b'
                      baseBgColor='#f2f3f7'
                      labelSize = '9px'
                      completed = {60}
                    />
                </td>
                <td>
                  <ButtonViewListTasks/>
                </td>
              </tr>

              <tr>
                <td className={styles.avatar_area}>
                  <Avatar className={styles.avatar}/>
                  <p className="">Hồng Ngọc</p>
                </td>
                <td className={styles.role_area}>
                 <ButtonSwitchRole
                    setOpenRole = {setOpenRole}
                    openRole = {openRole}
                 />
                </td>
                  
                <td className={styles.email}>
                  <p className={styles.email_text}>
                    bigdipper201201@gmail.com
                  </p>
                </td>
                <td className={styles.number_completed}>
                  <p className={`${styles.completed_task} ${isCompleted?styles.completed:styles.incompleted}`}>
                     3/7
                  </p>
                </td>
                <td>
                  <ProgressBar
                      height='11px'
                      bgColor= '#fdc84b'
                      baseBgColor='#f2f3f7'
                      labelSize = '9px'
                      completed = {60}
                    />
                </td>
                <td>
                  <ButtonViewListTasks/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberContainer