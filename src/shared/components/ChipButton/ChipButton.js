import React from 'react'
import styles from './styles.module.scss';
import { Chip } from '@mui/material';
export const ChipButton = ({bgColor,textLabel}) => {
  return (
    <button 
      style ={{backgroundColor: bgColor}}
      className={styles.chip_button}>
        {/* <span 
          style = {{backgroundColor: labelColor}}
          className={styles.label_color}>
          </span> */}
        <p
        >{textLabel}</p>
    </button>
  )
}
