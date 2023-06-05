import React from 'react'
import styles from './styles.module.scss'
import { Avatar } from '@mui/material';
import avatar from '../../../assets/images/avatar.jpg'
const MemberSelect = () => {
  return (
    <div className={styles.memberselect_item}>
        <div className={styles.memberselect_body}>
            <div className={styles.member_container}>
                <Avatar
                    sx={{ width: 28, height: 28 }}
                    src={avatar}/>
                 <span> Bessie Cooper</span>
            </div>
        </div>
    </div>
  )
}
export default MemberSelect;
