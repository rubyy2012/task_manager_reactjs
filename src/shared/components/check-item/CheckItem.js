import React from 'react'
import styles from './styles.module.scss';
import { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
const CheckItem = ({checkClass}) => {
    const [check,setCheck] = useState(false);
  return (
    <li 
        className={`${check?styles.completed:''} ${styles.li_tag}`}>
          <p
            style ={{fontSize:14}}
            onClick={()=>setCheck(!check)}
          > Task 3</p>
          <div className={styles.item_option}>
            <CiEdit className={styles.check_icon}/>
            <RiDeleteBin6Line className={styles.check_icon}/>
          </div>
    </li>
  )
}
export default CheckItem;