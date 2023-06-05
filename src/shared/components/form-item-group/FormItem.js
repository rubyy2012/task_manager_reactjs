import React from 'react'
import styles from './styles.module.scss';
import { TextField } from '@mui/material';
const FormItem = (props) => {
    const {name,value,defaultValue,placeholder,multiline,minRows,maxRows} = props;
  return (
    <div className={styles.form_item_group}>
        <p 
        className={styles.title_label}
        >Nhiệm vụ mới</p>
        <TextField
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            multiline = {multiline}
            minRows={minRows}
            maxRows={maxRows}
            className={styles.text_input}
            size = 'small'
        />
    </div>
  )
}

export default FormItem