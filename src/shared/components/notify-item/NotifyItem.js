import React from 'react'
import styles from './styles.module.scss'
import { Avatar } from '@mui/material';
import avatar from '../../../assets/images/avatar.jpg';
const NotifyItem = () => {
  return (
    <div className={styles.notify_item_container}>
        <div className={styles.notify_content}>
            <Avatar
                className={styles.avatar}
                src={avatar}
            />
            <div className={styles.notify_body}>
                <p className={styles.notify_string}>
                    Hong Ngoc updated this field!
                </p>
                <p className={styles.notify_datetime}>
                Monday at <span>17:04am</span>
                </p>
            </div>
        </div>
    </div>
  )
}
export default NotifyItem;
