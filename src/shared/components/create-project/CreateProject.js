import React from 'react'
import styles from './styles.module.scss'
import { IoMdClose } from 'react-icons/io'
import { Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import ApiPath from '../../../utils/ApiPath'
import WorkspaceAction from '../../../redux/workspaces/WorkspaceAction.js'
import { toast } from 'react-toastify'
const CreateProject = ({openCreateProject,setOpenCreateProject}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    setOpenCreateProject(false);
    dispatch({
      type: WorkspaceAction.REQUEST_CREAT_NEW_PROJECT,
      payload: {
        data,
        callback: {
          goToOverview: () => navigate(ApiPath.OVERVIEWS_PAGE,{replace:true}),
          toast: (message) => toast(message)
        }
      }
    })
  }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.group_item}>
                <p className={styles.title}>Tên dự án</p>
                <Controller
                    control={control}
                    name="title"

                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        margin="normal"
                        id="outlined-required"
                        // size='small'
                        placeholder='Nhập tên dự án!'
                        className={styles.text_input}
                      />
                    )}
                  />
              </div>

                <div className={styles.group_item}>
                <p className={styles.title}>Mô tả dự án</p>
                <Controller
                    control={control}
                    name='description'
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        margin="normal"
                        id="outlined-required"
                        // size='small'
                        multiline 
                        rows={3}
                        placeholder='Nhập nội dung mô tả!'
                        className={styles.text_input}
                      />
                    )}
                  />
              </div>
              <div className={styles.group_button}>
                <Button
                    variant='outlined'
                    type="submit"
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