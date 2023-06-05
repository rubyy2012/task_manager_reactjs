import React from 'react'
import styles from './styles.module.scss'
import LabelItem from '../label-item/LabelItem'
import { useState } from 'react'
import LabelColor from '../LabelColor/LabelColor'
const LabelAndColor = () => {
    const [openTagLabel,setOpenTagLabel] = useState(false);
    const list = [
        {
        id:1,
        name:'a'
    },
    {
        id:2,
        name:'b'
    },
    {
        id:3,
        name:'c'
    },
]
  return (
    <div className={styles.label_and_color_container}>
        <div className={styles.label_and_color_body}>
            {/* <div className={styles.header}>
                <p className={styles.title}>Chọn nhãn</p>
            </div> */}
            <div className={styles.list_labels}>
                <LabelItem
                    id="1"
                    list ={list}
                    />
                <LabelItem
                    list ={list}
                    id='2'
                />
                <LabelItem
                    list ={list}
                    id= '3'
                />
                <button 
                    onClick = {()=>setOpenTagLabel(!openTagLabel)}
                    className={styles.btn_create_tag}>
                    Tạo nhãn
                </button>
                {
                    openTagLabel && <LabelColor 
                        openTagLabel = {openTagLabel}
                        setOpenAddTagLabel = {setOpenTagLabel}
                    />
                }
            </div>
        </div>
    </div>
  )
}

export default LabelAndColor