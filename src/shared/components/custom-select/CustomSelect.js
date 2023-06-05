import React from 'react'
import styles from './styles.module.scss'
import { IoIosArrowDown } from "react-icons/io";
import StatusList from '../../../api/FilterStatus'; 
import { useState } from 'react';
const CustomSelect = ({labelText,listItems,placeholder}) => {
  const [currentItem,setCurrentItem] = useState()
  const [toggle,setToggle] = useState(false)
  return (
    <div className={styles.custom_select_container}>
      <label 
        className={styles.label}>{labelText}</label>
      <div className={styles.selecbox_container}>
          <div 
            onClick={()=>setToggle(!toggle)}
            className={styles.current_select}>
            <p>{currentItem||<span>{placeholder}</span>}</p>
            <IoIosArrowDown/>
          </div>
          {
            toggle&&listItems&& (
              <div className={styles.select_box}>
                {
                  listItems?.map(item=>(
                  <div 
                      key={item.id}
                      onClick = {()=>{
                        setCurrentItem(item.name)
                        setToggle(false)
                      }}
                      className={styles.select_item}>
                      {item.name}
                  </div>
                  ))
                }
              </div>
            )
          }
      </div>
     
    </div>
  )
}

export default CustomSelect