import React from 'react'
import styles from './styles.module.scss'
import { BsCheck2 } from 'react-icons/bs'
import { useState } from 'react'
import { useEffect } from 'react'
const LabelItem = ({id,list}) => {
    const [selected,setSelected] = useState(false)
    const [listIds,setListIds] = useState([])
    const handleChangeLabel = () =>{
        setSelected(!selected)
        console.log('id',id)
    }
    useEffect(()=>{
        if(selected)
        {
            setListIds([...listIds,id])
        }
        else {
            setListIds(listIds.filter(item=>item!==id))
        }
    },[id])
    console.log('listIds',listIds)

  return (
    <div 
        onClick={handleChangeLabel}
        className={`${styles.label_item_container} ${selected?styles.selected:''}`}>
        <div className={styles.infor}>
            <label 
                style = {{backgroundColor:'red'}}
                className={styles.color}></label>
            <p className={styles.title}>Mobile</p>
        </div>
        {
            selected && <BsCheck2/>
        }
    </div>
  )
}

export default LabelItem