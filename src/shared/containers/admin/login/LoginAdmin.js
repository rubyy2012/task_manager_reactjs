import React from 'react'
import { Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ApiPath from '../../../../utils/ApiPath';
import AdminAction from '../../../../redux/admin/AdminAction'
const LoginAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const onSubmit = async (data) => {
    dispatch({
      type:AdminAction.REQUEST_ADMIN_LOGIN,
      payload: {
        data:data,
        callback: {
          goToOverview : () => navigate('/admin/list-users',{ replace : true }),
        }
      }
    })
  }
const { control, handleSubmit } = useForm()
  return (
    <div className={styles.form_submit_container}>
    <div className={styles.form_submit_body}>
        <h4 className={styles.welcome_greeting}>Chào mừng bạn đến với Đăng nhập</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                id="outlined-required"
                label="Email"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                id="outlined-required"
                margin="normal"
                label="Mật khẩu"
              />
            )}
          />
          <Button
            fullWidth
            variant="contained"
            margin="normal"
            color="info"
            type="submit"
            style={{marginTop:'15px',padding:'12px 0'}}
          >
            Đăng nhập
          </Button>
        </form>
        <p>Bạn chưa có tài khoản?
              <Link to='/admin/register'className={styles.change_page_link}> Đăng ký</Link>
        </p>
      </div>
      </div>
  )
}
export default LoginAdmin
