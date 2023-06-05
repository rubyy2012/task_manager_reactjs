import React from 'react'
import styles from './styles.module.scss'
import { useState } from 'react';
import { Avatar } from '@mui/material';
import { BsCheck2 } from 'react-icons/bs';
import { useEffect } from 'react';

const SelectedMember = (id) => {
  const [selected,setSelected] = useState(false);

  return (
    <div 
        style ={selected?
                {backgroundColor:'#f8fafb'}:
                {backgroundColor:''}
            }
        onClick = {()=>setSelected(!selected)}
        className={styles.member_item}>
        <Avatar className={styles.avatar}/>
        <div className={styles.name_and_email}>
            <p className={styles.name}>Hồng Ngọc</p>
            <p className={styles.email}>bigdipper201201@gmail.com</p>
        </div>
        {
            selected && <BsCheck2/>
        }
    </div>
  )
}

export default SelectedMember