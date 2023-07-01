import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss';
import { AiOutlineCloseCircle } from "react-icons/ai";
import NotifyItem from '../notify-item/NotifyItem';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import signalRActions from '../../../redux/signalR/signalRActions';
const Notification = ({notification,setOpenNotification}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenNotification(false));
  const { detailProject } = useSelector((state) => ({
    detailProject: state.workspace.detailProject,
  }));

  console.log('detailProject',detailProject)
  return (
    <div 
      ref = {ref}
      className={`${styles.notifycation_container} ${notification?styles.isVisible:''}`}>
        <div className={styles.notifycation_body}>
          <div className={styles.notifycation_header}>
            <span className={styles.title}>Hoạt động</span>
            <AiOutlineCloseCircle
              onClick={()=>setOpenNotification(false)}
              className={styles.close_icon}
            />
          </div>
          <div className={styles.notifycation_content}>
            {
              detailProject?.data?.activations?.map(noti=>(
                <NotifyItem
                  key={noti.id}
                  noti={noti}
                />
              ))
            }
          </div>
        </div>
    </div>
  )
}
export default Notification;
