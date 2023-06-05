import React from 'react'
import styles from './styles.module.scss'
import { AiFillCaretDown } from 'react-icons/ai'
import { useState } from 'react'
const ButtonSwitchRole = () => {
  const [openRole,setOpenRole] = useState(false)
  return (
    <div className={styles.btn_switch_role_container}>
        <button 
            onClick={()=>setOpenRole(!openRole)}
            className={styles.btn_default_role}>
            Quản lý <AiFillCaretDown/>
        </button>
        {
            openRole&&(
                <button className={styles.btn_change_role}>Thành viên</button>
            )
        }
    </div>
  )
}

export default ButtonSwitchRole