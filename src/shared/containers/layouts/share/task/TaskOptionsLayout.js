import React from 'react'
import styles from './styles.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { useRef } from 'react';
import useOnClickOutside from '../../../../../hooks/useOnClickOutside';
const TaskOptionsLayout = ({children,textLabel,setTonggle}) => {
    const [isClose, setClose] = useState(false)
    const ref = useRef();
    useOnClickOutside(ref, () => setTonggle(false));
  return (
    <div 
        ref={ref}
        className={styles.taskoptions_container}>
        <div className={styles.taskoptions_body}>
            <div className={styles.taskoptions_header}>
                <span>{textLabel}</span>
                <CloseIcon 
                    className={styles.close_icon}
                    onClick = {()=>setTonggle(false)}
                />
            </div>
            {children}
        </div>
    </div>
  )
}
export default TaskOptionsLayout;
