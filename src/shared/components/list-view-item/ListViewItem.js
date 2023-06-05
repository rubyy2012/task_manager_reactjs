import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss';
const ListViewItem = ({isActive,onClick,link,index,children}) => {

  return (
    <Link 
        onClick = {()=>onClick(index)}
        className={`${styles.list_view_item} ${isActive===index?styles.isActive:''}`}
        // to=''
        >
        {children}
    </Link>
  )
}

export default ListViewItem