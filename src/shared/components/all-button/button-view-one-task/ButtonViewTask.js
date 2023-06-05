import React, { useState } from 'react'
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
const ButtonViewTask = ({id,openDetailTask,setOpenDetailTask}) => {
  return (
    <Link to='' 
        onClick = {()=>setOpenDetailTask(!openDetailTask)}
        className={styles.btn_view_one_task}>
            Xem nhiệm vụ
    </Link>
  )
}

export default ButtonViewTask