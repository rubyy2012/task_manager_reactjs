import React from 'react'
import styles from './styles.module.scss'
import { Avatar } from '@mui/material'
import { useState } from 'react'
const Subtask = () => {
    const [selected,setSelected] = useState(false)
  return (
    <div
         onClick={()=>setSelected(!selected)}
         className={`${styles.subtask} ${selected?styles.selected:''}`}>
        <p className={styles.name}>Tạo giao diện</p>
        {
            selected&&
            <Avatar className={styles.avatar}/>
        }
    </div>
  )
}

export default Subtask