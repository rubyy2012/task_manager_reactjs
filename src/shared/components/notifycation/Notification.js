import React, { useRef } from 'react'
import styles from './styles.module.scss';
import { AiOutlineCloseCircle } from "react-icons/ai";
import NotifyItem from '../notify-item/NotifyItem';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
const Notification = ({notification,setOpenNotification}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenNotification(false));
  return (
    <div 
      ref = {ref}
      className={`${styles.notifycation_container} ${notification?styles.isVisible:''}`}>
        <div className={styles.notifycation_body}>
          <div className={styles.notifycation_header}>
            <span className={styles.title}>Notifications</span>
            <AiOutlineCloseCircle
              onClick={()=>setOpenNotification(false)}
              className={styles.close_icon}
            />
          </div>
          <div className={styles.notifycation_content}>
            <NotifyItem/>
            <NotifyItem/>
          </div>
        </div>
    </div>
  )
}
export default Notification;
