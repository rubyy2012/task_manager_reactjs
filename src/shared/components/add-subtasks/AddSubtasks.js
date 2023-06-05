import React from 'react'
import styles from './styles.module.scss';
import { Button, TextField } from '@mui/material';
import { useRef } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
const AddSubtasks = ({setOpenAddSubtask}) => {
    const ref = useRef();
    useOnClickOutside(ref, () => setOpenAddSubtask(false));
  return (
    <div 
        ref= {ref}
        className={styles.add_subtasks_container}>
        <div className={styles.add_subtasks_body}>
          <form>
            <TextField 
                    size='small'
                    className={styles.text_field}/>
                <Button 
                    variant='contained'
                    className={styles.btn_add_textfield}>
                        Save
                </Button>
          </form>
        </div>
    </div>
  )
}
export default AddSubtasks;
