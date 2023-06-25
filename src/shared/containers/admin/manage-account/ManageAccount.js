import React from 'react'
import styles from './styles.module.scss'
import { Controller, useForm } from 'react-hook-form'
import { Avatar, Button, TextField, Typography } from '@mui/material'
import avatar from '../../../../assets/images/avatar.jpg'
import { BsFillCameraFill } from "react-icons/bs";
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'
import AdminAction from '../../../../redux/admin/AdminAction'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { HiCamera } from 'react-icons/hi'
const ManageAccount = () => {
  const dispatch = useDispatch();
  const adminInfor = JSON.parse(localStorage.getItem('adminInfor'))
  const adminId = adminInfor?.account?.id
  const { control, handleSubmit,setValue } = useForm()
  const { profile } = useSelector((state) => ({
    profile: state.admin.profile,
  }));
  useEffect(()=>{
    console.log('admin')
      dispatch({
        type: AdminAction.REQUEST_GET_DETAIL_PROFILE_ADMIN,
      })
  },[])
  useEffect(()=>{
    if(profile?.data?.user?.fullName&&profile?.data?.user?.email)
    {
      setValue('fullName',profile?.data?.user?.fullName)
      setValue('email',profile?.data?.user?.email)
    }
  },[profile?.data])
  
    const onEditAdminProfile = (data) => {
        dispatch({
          type:AdminAction.REQUEST_EDIT_PROFILE_ADMIN,
          payload: {
            data: {
              userId: adminId,
              data:data,
              callback: {
                toast: (message) => toast(message)
              }
            }
          }
        })
    }
  return (
    <div className={styles.manage_account_body}>
            <div 
              className={styles.avatar_area}>
                <Avatar className={styles.avatar} src={ profile?.data?.user?.avatar||null}/>
                <HiCamera className={styles.camera_icon}/>
                <label htmlFor='file'></label>
                <input type="file" id='file'/>
            </div>
        <div className={styles.user_infor_area}>
            <form onSubmit={handleSubmit(onEditAdminProfile)}>
                <Box sx ={{padding:'10px',display:'flex',flexDirection:'column',gap:'20px'}}>
                    <Box sx ={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <Typography sx= {{textAlign:'left',fontWeight:'600',color: '#c0cccc'}}>
                            Họ và tên 
                        </Typography>
                        <Controller
                            control={control}
                            name="fullName"
                            defaultValue={profile?.data?.user?.fullName || ''}
                            render={({ field }) => (
                              <TextField
                              {...field}
                              sx={
                              {
                                
                                '& .MuiOutlinedInput-root': {
                                    '&.fieldset': {
                                        borderColor: '#fff', // Change the hover border color here
                                      },
                                  '&:hover fieldset': {
                                    borderColor: '#c0cccc', // Change the hover border color here
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#fff', // Change the focused border color here
                                  },
                                },
                                input:{color:'#fff',border:'2px solid #fff',borderRadius:'4px'},
                              }}
                            fullWidth
                        />
                            )}
                          />
                   
                    </Box>

                    <Box sx ={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <Typography sx= {{textAlign:'left',fontWeight:'600',color: '#c0cccc'}}>
                            Email
                        </Typography>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field }) => (
                              <TextField
                              defaultValue={profile?.data?.user?.email || ''}
                              disabled
                              {...field}
                              sx={{
                                input:{color:'#fff',border:'2px solid #fff',borderRadius:'4px'},
                                '& .MuiOutlinedInput-root': {
                                    '&.fieldset': {
                                        borderColor: '#fff', // Change the hover border color here
                                      },
                                  '&:hover fieldset': {
                                    borderColor: '#c0cccc', // Change the hover border color here
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#fff', // Change the focused border color here
                                  },
                                },
                              }}
                            fullWidth
                        />
                            )}
                          />
                    </Box>

                    <Box sx ={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <Typography sx= {{textAlign:'left',fontWeight:'600', color: '#c0cccc'}}>
                            Mật khẩu
                        </Typography>
                        <Controller
                            control={control}
                            name="password"
                            type='password'
                            render={({ field }) => (
                              <TextField
                              defaultValue={profile?.data?.user?.password || ''}
                              {...field}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.fieldset': {
                                        borderColor: '#fff', // Change the hover border color here
                                      },
                                  '&:hover fieldset': {
                                    borderColor: '#c0cccc', // Change the hover border color here
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#fff', // Change the focused border color here
                                  },
                                },
                                input:{color:'#fff',border:'2px solid #fff',borderRadius:'4px'},
                              }}
                            fullWidth
                        />
                            )}
                          />
                    </Box>
                    <Box sx ={{display:'flex',gap:'20px',justifyContent:'flex-end'}}>
                        <Button 
                          type='submit'
                          variant='contained'>Lưu lại</Button>
                    </Box>
                </Box>
            </form>
        </div>
    </div>
  )
}

export default ManageAccount