import React, { useState } from 'react'
import styles from './styles.module.scss'
const RecentProjectItem = ({name,index,onClick,active}) => {
  return (
    <p 
        onClick={()=>onClick(index)}
        className={`${styles.recent_project_item} ${active===index?styles.isActive:''}`}
        >
        <span>#</span>{name}
    </p>
  )
}

export default RecentProjectItem