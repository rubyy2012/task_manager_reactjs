import React from 'react'
import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './styles.module.scss';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserAction from '../../../redux/users/UserAction.js'
import { useNavigate } from 'react-router-dom';
import ApiPath from '../../../utils/ApiPath';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';
import { useSelector } from 'react-redux';

const RegisterContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { userRegister } = useSelector((state) => ({
    userRegister: state.user.userRegister,
  }));
  const schema = yup.object().shape({
    fullName: yup.string().required("Bạn chưa điền vào trường này!"),
    email: yup.string()
                .email( "Email chưa đúng định dạng !")
                .required("Bạn chưa điền vào trường này!")
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,  "Email chưa đúng định dạng !"),
    username: yup.string().required('Bạn phải nhập tên người dùng'),
    password: yup.string().required('Bạn phải nhập mật khẩu!').min(6, 'Mật khẩu phải chứa tối thiểu 6 ký tự'),
    confirmPassword: yup.string().required('Bạn phải nhập lại mật khẩu!').oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp!")
  });
  const {register,control, handleSubmit, formState: { errors },reset } = useForm({
    mode: {
      onSubmit: true,
      onBlur: true,
      onChange: true,
      onTouched: true,
    },
    // resolver: yupResolver(schema)
  });

  // const navigate = useNavigate()
  const onSubmit = async (data) => {
    console.log('register',data)
     dispatch({
      type: UserAction.REQUEST_REGISTER,
      payload: {
        data: data,
        callback: {
          toast : (message) => toast(message),
          goToLoginPage : (path, option)=> navigate(path, option),
        }
      }
     })
     reset();
  }
  return (
    <LoadingSpinner loading={userRegister?.loading}>

    <div className={styles.form_submit_container}>
    <div className={styles.form_submit_body}>
        <h4 className={styles.welcome_greeting}>Chào mừng bạn đến với Đăng ký</h4>     
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
            control={control}
            name="fullName"     
            render={({ field }) => <TextField {...field}  
                            fullWidth={true}
                            {...register("fullName")} 
                            margin="normal"
                            id="fullName"
                            label="Họ tên"/>}/>
          {errors.fullName&&<span>{errors.fullName.message}</span>}
            
        <Controller
            control={control}
            name="email"           
            render={({ field }) => <TextField {...field} 
                            fullWidth={true}
                            {...register("email")} 
                            margin="normal"
                            id="email"
                            label="Email"/>}
                            />
          {errors.email&&<span>{errors.email.message}</span>}
        <Controller
          control={control}
          name="password"
          render={({ field }) => <TextField {...field} 
                            {...register("password")} 
                            fullWidth={true}
                              id="password"
                              margin="normal"
                              type='password'
                              label="Mật khẩu"/>}
        />
          {errors.password&&<span>{errors.password.message}</span>}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => <TextField {...field} 
                              fullWidth={true}
                            {...register("confirmPassword")} 
                              id="confirmPassword"
                              margin="normal"
                              type='password'
                              label="Nhập lại mật khẩu"/>}
                              />
          {errors.confirmPassword&&<span>{errors.confirmPassword.message}</span>}
        <Button 
          fullWidth
          variant='contained'
          margin="normal"
          color='info'
          type="submit"
          style={{marginTop:'15px',padding:'12px 0'}}
          >Đăng ký</Button>
    </form>
    <p>Bạn chưa có tài khoản?
      <Link to='/login'className={styles.change_page_link}> Đăng nhập</Link>

        </p>
    </div>
    </div>
    </LoadingSpinner>

  )
}
export default RegisterContainer;
