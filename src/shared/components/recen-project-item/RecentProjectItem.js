import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
const RecentProjectItem = ({name,index,onClick,active,id}) => {
  return (
    <Link
        to={`/project-page/project/${id}/all-tasks`}
        onClick={()=>onClick(index)}
        className={`${styles.recent_project_item} ${active===index?styles.isActive:''}`}
        >
        <span>#</span>{name}
    </Link>
  )
}

export default RecentProjectItem