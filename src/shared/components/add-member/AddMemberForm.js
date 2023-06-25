import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { IoCloseOutline }  from "react-icons/io5";
import ProjectMember from '../project_member/ProjectMember';
import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import WorkspaceAction from '../../../redux/workspaces/WorkspaceAction';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
const AddMemberForm = ({setOpenAddMemberForm,addMemberForm}) => {
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch();
  const { listMembers } = useSelector((state) => ({
    listMembers: state.workspace.listMembers,
  }));
  const {id} = useParams();
//   const userInfor = JSON.parse(localStorage.getItem('userInfor'));
//   const userId = userInfor?.account.id;
//   const findUser = listMembers?.data.find(x=>x.id===userId)
//   const roleUser = findUser?.role;
  const onSubmit = (data) => {
    const {role} = data;
    dispatch({
        type: WorkspaceAction.REQUEST_INVITE_MEMBER,
        payload: {
            data:{
                ...data,
                role: parseInt(role)
            },
            workspaceId: parseInt(id),
            callback: {
                toast: (message) => toast(message)
            }
        }
    })
  }
  return (
    <div className={`${styles.addmember_container} ${addMemberForm?styles.isVisible:''}`}>
        <div className={styles.addmember_body}>
            <div className={styles.header}>
                <p className={styles.invite}>Mời thành viên tham gia</p>
                <IoCloseOutline
                    onClick = {()=>setOpenAddMemberForm(false)}
                    className = {styles.close_icon}
                />
            </div>
            <div className={styles.introduce}>
                Mời thêm thành viên để cộng tác làm việc nhóm!
            </div>
            <p className={styles.email}>Email</p>
            <form 
                onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input_area}>
                    <div className={styles.input_wrapper}>
                        <Controller
                            control={control}
                            defaultValue=""
                            name='email'
                            render={({ field }) => (
                                <TextField
                                {...field}
                                fullWidth
                                margin="normal"
                                size = 'small'
                                id="outlined-required"
                                placeholder = 'abc@gmail.com'
                                className={styles.input_field}
                                />
                            )}/>
                        <Controller
                            control={control}
                            name = 'role'
                            defaultValue="1"
                            render={({ field }) => (
                            <Select 
                                {...field}
                                size = 'small'
                                className={styles.select_field}
                                >
                                <MenuItem value="1">Quản lý</MenuItem>
                                <MenuItem value="2">Thành viên</MenuItem>
                            </Select>)}>
                        </Controller>
                    </div>
                    <Button
                        type='submit'
                        className={styles.btn_send_invite}
                    >Mời</Button>
            </div>
            </form>
            
            <div className={styles.group_member}>
                <p className={styles.title}>Thành viên nhóm</p>
                <div className={styles.group_member_container}>
                    {
                        listMembers?.data?.map(member=>(
                            <ProjectMember
                                listMembers = {listMembers}
                                key={member.id}
                                member = {member}
                            />))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMemberForm