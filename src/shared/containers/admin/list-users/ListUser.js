import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { Box } from '@mui/system'
import { Avatar, Typography,Button, TextField } from '@mui/material'
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import AdminAction from '../../../../redux/admin/AdminAction';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState } from 'react';
const ListUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [textSearch,setTextSearch] = useState('')
    const [newList,setNewList] = useState([])
    const { listUsers } = useSelector((state) => ({
        listUsers: state.admin.listUsers,
    }));
    useEffect(()=>{
        dispatch({
            type: AdminAction.REQUEST_GET_LIST_USERS,
        })
    },[])
    useEffect(()=>{
        setNewList(listUsers?.data?.users)
    },[listUsers?.data])

    const onSearch = (textSearch)=>{
        console.log('textsearch',textSearch)
        console.log('newList',newList)
        const newData = listUsers?.data?.users?.filter(item=>{
            if(item.fullName.trim().toLowerCase().includes(textSearch.trim().toLowerCase()))
            {
                return item;
            }
        })
        console.log('newData',newData)
        setNewList(newData)
    }

  return (
    <div className={styles.list_user_workspace}>
        <div className={styles.body}>
            <div className={styles.filter}>
                 <TextField
                        sx={{ input: { color: '#fff' } }}
                        style ={{minWidth:'600px',padding: '0',height:'20px'}}
                        size='small'
                        placeholder='Nhập tên dự án'
                        onChange={(e)=>setTextSearch(e.target.value)}
                    />
                <Button 
                    onClick={()=>onSearch(textSearch)}
                    variant='contained'>Tìm kiếm</Button>
            </div>
            
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px', maxHeight:'600px',
                    overflowY:'scroll',padding:'5px'}}>
                {
                    newList?.map(user=>(
                        <Box 
                            className={styles.box}
                            sx={{display:'flex',gap:'20px',borderRadius:'8px', justifyContent:'space-between', alignItems:'center',
                                padding: '20px',backgroundColor:'#1f1e25', border: '1px solid #5d5c64'}}>
                            <Box  
                                
                                sx={{display:'flex',gap:'20px',cursor:'pointer'}}>
                                <Avatar sx={{width:50,height:50}}/>
                                <Box sx={{display:'flex', flexDirection:'column',alignItems:'center',gap:'8px',minWidth:'330px'}}>
                                    <Typography sx={{width:'100%',textAlign:'left',fontSize:'18px',fontWeight:600,color:'#fff'}}>{user?.fullName}</Typography>
                                    <Typography sx={{width:'100%',textAlign:'left',color:'#97959b'}}>{user?.email}</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{color:user?.role==='ADMIN' ?'#E9290F':'#519259',fontWeight:'600'}}>{user?.role}</Typography>
                            <Typography sx={{color: '#cb8055',minWidth:'220px'}}>{user?.role === 'USER' && `Dự án tham gia: ${user?.workspaceQuantity}`}</Typography>
                            <Box>
                                    <button
                                        style ={{
                                            padding:'5px 10px', 
                                            backgroundColor:'transparent',
                                            border: user?.emailConfirmed ? ' 1px solid #64CCC5': ' 1px solid #F86F03',
                                            color:  user?.emailConfirmed ? '#64CCC5' : '#F86F03',
                                            // backgroundColor:'#FFA41B' chưa, đỏ
                                            // color: '#64CCC5',
                                            borderRadius:'20px'
                                        }}
                                        >{user?.emailConfirmed?'Đã xác thực':'Chưa xác thực'}</button>
                            </Box>
                            <Box sx={{display:'flex',gap:'20px',justifyContent:'flex-end',alignItems:'center',minWidth:'220px'}}>
                            {user?.role==='USER' ? <Button
                                    onClick = {()=>navigate(`/admin/list-users/${user.id}`,{replace:true})}
                                    variant='contained'>Xem thông tin'</Button>:''}
                                <Button variant='outlined'>Xóa</Button>
                            </Box>
                        </Box>
                    ))
                }
            </Box>

         
        </div>
    </div>
  )
}

export default ListUser