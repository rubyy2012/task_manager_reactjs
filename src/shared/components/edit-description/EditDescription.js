import React from 'react'
import styles from './styles.module.scss'
import { Button, TextField } from '@mui/material'
import { useRef } from 'react'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
const EditDescription = ({setOpenEditDes}) => {
    const ref = useRef();
    useOnClickOutside(ref, () => setOpenEditDes(false));
  return (
      <div 
            ref={ref}
            className={styles.edit_layout}>
            <div className={styles.edit_body}>
                <p className={styles.label}>DESCRIPTION</p>
                <form className={styles.form_edit}>
                    <TextField 
                        multiline
                        name=''
                        rows={5}
                        className={styles.text_field}/>
                    <div className={styles.group_button}>
                        <Button 
                            variant='outlined'
                            className={styles.btn_Save_edit}>Save</Button>
                        <Button 
                            onClick={()=>setOpenEditDes(false)}
                            variant='contained'
                            className={styles.btn_cancel_edit}>Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
  )
}
export default EditDescription;