
import React, { useState } from 'react'
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
const CustomButton = (props) => {
    const {isOpen,textContent,textColor,icon,active} = props;
    const colorSet = {
        textColor: textColor==='white'?'textWhite':textColor==='gray'?'textGray':'',
        // bgColor: bgColor==='red'?'bgRed':bgColor==='transparent'?'bgTranparent':''
    }
  return (
    <Link 
        // to=''
        replace
        id = {styles.custom_btn}
        className={`${styles.custom_button} 
                    ${styles[colorSet.textColor]}
                    ${active?styles.active:''}  
                  `}

        >
        {icon} {isOpen? <p className={styles.text_content}>{textContent}</p>:''}
    </Link>
  )
}
export default CustomButton;