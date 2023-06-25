import React from 'react'
import styles from './styles.module.scss'
import { Controller, useForm } from 'react-hook-form'
import { Avatar, Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'
import AdminAction from '../../../../redux/admin/AdminAction'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { HiCamera } from 'react-icons/hi'
import UserAction from '../../../../redux/users/UserAction'
import { Action } from '@devexpress/dx-react-core'
const ManageAccountUser = () => {
  const dispatch = useDispatch();
  const userInfor = JSON.parse(localStorage.getItem('userInfor'))
  const userId = userInfor?.account?.id
  const { control, handleSubmit,setValue } = useForm()
  const { profile } = useSelector((state) => ({
    profile: state.user.profile,
  }));
  useEffect(()=>{
    console.log('user')
    dispatch({
      type:UserAction.REQUEST_GET_DETAIL_PROFILE,
    })
  },[])

  console.log('user profile',profile?.data)
  useEffect(()=>{
    if(profile?.data?.user?.fullName&&profile?.data?.user?.email)
    {
      setValue('fullName',profile.data.user.fullName)
      setValue('email',profile.data.user.email)
    }
  },[profile?.data])

    const onEditUserProfile = (data) => {
        dispatch({
          type:UserAction.REQUEST_EDIT_PROFILE,
          payload: {
            data: {
              userId: userId,
              data:data,
              callback: {
                toast: (message) => toast(message)
              }
            }
          }
        })
    }

    const handleUpdateAvatar = (e) => {
      const formData = new FormData();
      formData.append('file',e.target.files[0])
      formData.append('cloud_name','diql0n3kn')
      formData.append('upload_preset', 'task_manager');
      formData.append('folder', 'avatar');
      dispatch({
        type: UserAction.REQUEST_UPLOAD_AVATAR_TO_CLOUDINARY,
        payload: {
          data: {
            formData: formData,
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
                <input 
                  onChange={(e)=>handleUpdateAvatar(e)}
                  type="file" id='file'/>
            </div>
        <div className={styles.user_infor_area}>
            <form onSubmit={handleSubmit(onEditUserProfile)}>
                <Box sx ={{padding:'10px',display:'flex',flexDirection:'column',gap:'20px'}}>
                    <Box sx ={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <Typography sx= {{textAlign:'left',fontWeight:'600',color: '#040404'}}>
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
                                    borderColor: '#040404', // Change the hover border color here
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#fff', // Change the focused border color here
                                  },
                                },
                                input:{borderRadius:'4px'},
                              }}
                            fullWidth
                        />
                            )}
                          />
                   
                    </Box>

                    <Box sx ={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <Typography sx= {{textAlign:'left',fontWeight:'600',color: '#040404'}}>
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
                                input:{color:'#040404',border:'2px solid #fff',borderRadius:'4px'},
                                '& .MuiOutlinedInput-root': {
                                    '&.fieldset': {
                                        borderColor: '#040404', // Change the hover border color here
                                      },
                                  '&:hover fieldset': {
                                    borderColor: '#040404', // Change the hover border color here
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#040404', // Change the focused border color here
                                  },
                                },
                              }}
                            fullWidth
                        />
                            )}
                          />
                    </Box>

                    <Box sx ={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <Typography sx= {{textAlign:'left',fontWeight:'600', color: '#040404'}}>
                            Mật khẩu
                        </Typography>
                        <Controller
                            control={control}
                            name="password"
                            type='password'
                            render={({ field }) => (
                              <TextField
                              type='password'
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
                                input:{borderRadius:'4px'},
                              }}
                            fullWidth/>
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

export default ManageAccountUser;