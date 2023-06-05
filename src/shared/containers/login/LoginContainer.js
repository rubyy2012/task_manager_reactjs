import React from 'react'
import { Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { loginAction } from '@/redux/actions/UserAction'
const LoginContainer = () => {
  // const dispatch = useDispatch()
  const schema = yup.object().shape({
    username: yup.string().required('Bạn phải nhập tên người dùng'),
    password: yup
      .string()
      .min(6, 'Mật khẩu phải chứa tối thiểu 6 ký tự')
      .required('Bạn phải nhập mật khẩu!'),
  })
  const onSubmit = (data) => {
    console.log(data)
    // dispatch(
    //   loginAction({
    //     data: {
    //       username: data.username,
    //       password: data.password,
    //     },
    //     callback: {
    //       // goToDashBoard: () => navia
    //     },
    //   }),
    // )
  }

//   const { control, handleSubmit } = useForm({
//     mode: 'onChange',
//     resolver: yupResolver(schema),
//   })

const { control, handleSubmit } = useForm()
  return (
    <div className={styles.form_submit_container}>
    <div className={styles.form_submit_body}>
        <h4 className={styles.welcome_greeting}>Chào mừng bạn đến với Đăng nhập</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="username"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                id="outlined-required"
                label="Tên đăng nhập"
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
              <Link to='/register'className={styles.change_page_link}> Đăng ký</Link>
        </p>
      </div>
      </div>
  )
}
export default LoginContainer
