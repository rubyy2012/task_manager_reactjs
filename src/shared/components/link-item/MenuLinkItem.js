import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { BsCalendar3Week } from 'react-icons/bs'
const MenuLinkItem = ({activeMenu,index,onClick,name,icon,link}) => {
  return (
    <div className={styles.menu_link_item}>
      <Link 
        replace
        active ={activeMenu}
        onClick = {()=>onClick(index)}
        className={`${styles.link_item} ${activeMenu===index?styles.isActive:''}`}
        to={link}
        >{icon}{name}</Link>
    </div>
  )
}

export default MenuLinkItem