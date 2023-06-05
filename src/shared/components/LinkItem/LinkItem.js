import React from 'react'
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const LinkItem = ({link,title}) => {
  const [itemSelect,setItemSelect] = useState(false)
  return (
    <Link 
        href = {link} 
        onClick={()=>setItemSelect(!itemSelect)}
        className={`${styles.item_link} ${itemSelect?styles.active:''}`}
    >
        {title}
    </Link>
  )
}
export default LinkItem;