import React from 'react'
import styles from './styles.module.scss'
import { IoMdClose } from 'react-icons/io'
import { Button, TextField } from '@mui/material'
const CreateProject = ({openCreateProject,setOpenCreateProject}) => {
  return (
    <div className={`${styles.create_project_container} ${openCreateProject?styles.isVisible:''}`}> 
      <div className={styles.create_project_body}>
        <div className={styles.header}>
          <p className={styles.title}>Tạo mới dự án</p>
          <IoMdClose
            onClick = {()=>setOpenCreateProject(false)}
            className={styles.icon_close}
          />
         
        </div>
        <div className={styles.group_data}>
            <form>
              <div className={styles.group_item}>
                <p className={styles.title}>Tên dự án</p>
                <TextField
                    name=''
                    size='small'
                    placeholder='Nhập tên dự án!'
                    className={styles.text_input}
                />
              </div>

                <div className={styles.group_item}>
                <p className={styles.title}>Tên dự án</p>
                <TextField
                    name=''
                    size='small'
                    multiline 
                    rows={3}
                    maxRows={5}
                    placeholder='Nhập nội dung mô tả!'
                    className={styles.text_input}
                />
              </div>
              <div className={styles.group_button}>
                <Button
                    variant='outlined'
                    className={styles.btn_create}
                >Tạo dự án</Button>
                <Button
                    variant='contained'
                    className={styles.btn_cancel}
                    onClick = {()=>setOpenCreateProject(false)}
                >Hủy</Button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default CreateProject