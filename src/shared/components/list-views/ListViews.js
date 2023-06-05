import React, { useState } from 'react'
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import ListViewItem from '../list-view-item/ListViewItem';
const ListViews = () => {
  const [isActive,setActive] = useState()
  return (
    <div className={styles.list_views_container}>
      <ListViewItem
          index = {1}
          isActive = {isActive}
          link = ''
          onClick = {()=>setActive(1)}
        >Tất cả nhiệm vụ</ListViewItem>
      <ListViewItem
          index = {2}
          link =''
          isActive= {isActive}
          onClick = {()=>setActive(2)}
      >Thành viên nhóm</ListViewItem>
    </div>
  )
}
export default ListViews;
