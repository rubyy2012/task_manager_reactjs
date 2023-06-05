import React from 'react'
import styles from './styles.module.scss'
import ProgressBar from "@ramonak/react-progress-bar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { useState } from 'react';
import CheckItem from '../check-item/CheckItem';
import { AiOutlinePlus } from "react-icons/ai";
import AddSubtasks from '../add-subtasks/AddSubtasks';
const CheckList = () => {
  const [toggle,setToggle] = useState(true)
  const [ isOpenAddSubtask,setOpenAddSubtask] = useState(false)
  return (
    <div className={styles.checklist_body}>
        <div 
          onClick = {()=>setToggle(!toggle)}
          className={styles.progress_container}>
          <button 
              className={styles.btn_toggle}>
              {
                toggle?
                  <MdExpandLess className={styles.icon_toggle}/> :
                  <MdKeyboardArrowDown className={styles.icon_toggle}/>
              }
          </button>
          <p className={styles.label}>CHECKLIST <span> (75%) </span> </p>
        </div>
        {
          toggle&& (
            <div className={styles.list_checklists}>
                <ul id={styles.list_container}>
                  <CheckItem/>
                  <CheckItem/>
                  <CheckItem/>
                  <CheckItem/>
                </ul>
                <button 
                  onClick={()=>setOpenAddSubtask(!isOpenAddSubtask)}
                  className={styles.add_subtask_item}>
                  <AiOutlinePlus className={styles.add_icon} /> Add subtasks
                </button>
           </div>
          )
        }
      {isOpenAddSubtask && (<AddSubtasks 
                                setOpenAddSubtask ={setOpenAddSubtask}/>)}
      
    </div>
  )
}
export default CheckList;
