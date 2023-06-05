import React from 'react'
import styles from './styles.module.scss';
import { useState } from 'react';
const ColorItem = ({color,width,height}) => {
  const [selectedColor,setSelectedColor] = useState(false)
  const [myColor,setColor] = useState('')
  const handleSelected = () => {
    setSelectedColor(!selectedColor)
   
  }
  useState(()=>{
    setColor(color);
    console.log(color)
  },[selectedColor])
  return (
    <button 
        type='button'
        onClick={handleSelected}
        style = {{
          backgroundColor:color, 
          width : width, 
          height : height
        }}
        className={`${styles.label_color} ${selectedColor?styles.selected:''}`}></button>
  )
}
export default ColorItem;