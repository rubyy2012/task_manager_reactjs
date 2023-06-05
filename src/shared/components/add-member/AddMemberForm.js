import React from 'react'
import styles from './styles.module.scss'
import { IoCloseOutline }  from "react-icons/io5";
import ProjectMember from '../project_member/ProjectMember';
import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react';
const AddMemberForm = ({setOpenAddMemberForm,addMemberForm}) => {
    const [openRole,setOpenRole] = useState(false)
  return (
    <div className={`${styles.addmember_container} ${addMemberForm?styles.isVisible:''}`}>
        <div className={styles.addmember_body}>
            <div className={styles.header}>
                <p className={styles.invite}>Mời thành viên tham gia</p>
                <IoCloseOutline
                    onClick = {()=>setOpenAddMemberForm(false)}
                    className = {styles.close_icon}
                />
            </div>
            <div className={styles.introduce}>
                Mời thêm thành viên để cộng tác làm việc nhóm!
            </div>
            <p className={styles.email}>Email</p>
            <div className={styles.input_area}>
                <div className={styles.input_wrapper}>
                    <input 
                        placeholder = 'abc@gmail.com'
                        className={styles.input_field}
                        type="text" />
                    <div className={styles.button_area}>
                        <button 
                            onClick={()=>setOpenRole(!openRole)}
                            className={styles.btn_default_role}>Quản lý <AiFillCaretDown/></button>
                        {
                            openRole&&(
                                <button className={styles.btn_change_role}>Thành viên</button>
                            )
                        }
                    </div>
                </div>
                <button className={styles.btn_send_invite}>
                    Mời
                </button>
            </div>
            <div className={styles.group_member}>
                <p className={styles.title}>Thành viên nhóm</p>
                <div className={styles.group_member_container}>
                    <ProjectMember/>
                    <ProjectMember/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMemberForm