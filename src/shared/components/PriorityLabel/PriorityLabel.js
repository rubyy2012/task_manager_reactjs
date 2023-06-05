import React from 'react'
import styles from './styles.module.scss';
import { FaRegFlag } from 'react-icons/fa';
const PriorityLabel = (props) => {
    const {btn_low,btn_medium,btn_height,text,iconColor} = props
    const colorSet = {
        btn: btn_low==='btn_low'?btn_low
            :btn_medium==='btn_medium'?btn_medium
            :btn_height==='btn_height'?btn_height:'',
        }
  return (
    <div className={styles.priority_item}>
        {
            iconColor&& 
            <FaRegFlag 
                className={styles.flag_icon}
                style = {{
                    color: iconColor
            }}
        /> 
        }
       
        <button className={styles[colorSet.btn]}>{text}</button>
    </div>
  )
}
export default PriorityLabel;