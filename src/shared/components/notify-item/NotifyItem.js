import React from 'react'
import styles from './styles.module.scss'
import { Avatar } from '@mui/material';
import moment from 'moment';
const NotifyItem = ({noti}) => {
  return (
    <div className={styles.notify_item_container}>
        <div className={styles.notify_content}>
            <Avatar
                className={styles.avatar}
                src={noti.avatar}
            />
            <div className={styles.notify_body}>
                <p className={styles.notify_string}>
                     <span>{noti.fullName}</span>{noti.content}
                </p>
                <p className={styles.notify_datetime}>

               {moment(noti.createAt).format('DD/MM/YYYY')}<span>{moment(noti.createAt).format('HH:mm')}</span>
                </p>
            </div>
        </div>
    </div>
  )
}
export default NotifyItem;
