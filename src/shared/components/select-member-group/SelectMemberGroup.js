import React from 'react'
import styles from './styles.module.scss'
import { IoMdClose } from "react-icons/io";
import SelectedMember from '../selected-member/SelectedMember';
import { useState } from 'react';
const SelectMemberGroup = (setOpenSelectMember) => {
    const [listIds,setListIds] = useState([])

    console.log(listIds)
  return (
    <div className={styles.select_member_container}>
        <div className={styles.select_member_body}>
            <div className={styles.header}>
                <p>
                    Danh sách thành viên <span> (20) </span>
                </p>
                <IoMdClose
                    style = {{padding: '3px',
                                cursor:'pointer'}}
                    onClick={()=>setOpenSelectMember(false)}
                />
            </div>
            <div className={styles.search_container}>

            </div>
            <div className={styles.list_members}>
                <SelectedMember 
                    id ='1'
                />
                <SelectedMember 
                    id = '2'
                />
            </div>
        </div>
    </div>
  )
}

export default SelectMemberGroup