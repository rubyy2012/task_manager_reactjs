import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import avatar from '../../../assets/images/avatar.jpg'
import ProgressBar from '@ramonak/react-progress-bar'
import { GrTask } from "react-icons/gr";
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss'
import WorkspaceAction from '../../../redux/workspaces/WorkspaceAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import { Modal } from 'bootstrap';
import {Modal} from '@mui/material';
import { IoCloseSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
const MemberCard = ({member}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const [isOpenConfirmLeave, setOpenConfirmLeave] = useState(false)
    const [isOpenConfirmDelete, setOpenConfirmDelete] = useState(false)
    const { myRole } = useSelector((state) => ({
      myRole: state.workspace.myRole,
    }));
    const handleLinkClick = () => {
      const state = { workspaceId: id };
      navigate(`/team-members/${member.userId}/tasks`, { state });
    };
      const handleRemoveMemberOfWorkspace = (member) => {
        dispatch({
            type:WorkspaceAction.REQUEST_REMOVE_MEMBER_OF_WORKSPACE,
            payload:{
                data: {
                    id: parseInt(id),
                    memberId: member?.userId,
                    callback: {
                        toast : (message) => toast(message) 
                      }
                }
            }
        })
      }
      const handleLeaverWorkspace = () => {
        dispatch({
            type:WorkspaceAction.REQUEST_LEAVE_WORKSPACE,
            payload:{
                data: {
                    id: parseInt(id),
                    callback: {
                        toast : (message) => toast(message) 
                      }
                }
            }
        })
      }
      //from local storage
      const userInfor = JSON.parse(localStorage.getItem('userInfor'));
      const checkCanDeleteorLeave = (userInfor, member) => {
        if (member.userId === userInfor.account.id) {
            if(myRole !== 0)
            {
              return (

                <Button 
                    onClick = {()=>setOpenConfirmLeave(true)}
                    // onClick={handleLeaverWorkspace}
                    variant='outlined'>Rời dự án</Button>
              )
            }
          } 
          else 
          {
            if(myRole === 0)
            {
              return (
                <Button 
                    onClick = {()=>setOpenConfirmDelete(true)}
                    // onClick={()=>handleRemoveMemberOfWorkspace(member)}
                    variant='contained'>Xóa thành viên</Button>
              )
            }
          }
      };
    const percent = member?.taskQuantity>0 && parseInt((member?.completedQuantity*100)/member?.taskQuantity)
  return (
    <Box sx={{
            padding:'10px 20px',
            backgroundColor:'#fff',
            display: 'flex',
            flexDirection:'column',
            gap: '20px',
            // minHeight:'240px',
            // maxHeight:'240px',
            minWidth:'300px',
            position:'relative',
            // boxShadow:'1px 1px 6px 1px #fafafa',
            borderRadius:'5px'
        }}>
        {/* Box role */}
        <Box sx={{}}>
          <Button>
            {
              member.role===0?'Người tạo dự án':member.role===1?'Quản lý dự án':'Thành viên dự án'
            }
          </Button>
        </Box>
        {/* Box infor user */}
        <Box sx={{display:'flex',alignItems:'center',gap:'10px 20px',
                  // backgroundColor:{member.role}
                }}>
            <Avatar src={member?.avatar||avatar}/>
            <Box sx={{ display: 'flex',flexDirection:'column',gap: '5px',}}>
                <Typography sx={{fontSize:'20px',textAlign:'left'}}>{member?.fullName}</Typography>
                <Typography sx={{fontSize:'14px',textAlign:'left'}}>{member?.email}</Typography>
            </Box>
        </Box>
        {/* Box progress */}
        <Box sx={{ display: 'flex',flexDirection:'column',gap: '15px',}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'#fafafa',
                border:'1px solid #ccc',borderRadius:'5px',padding:'8px 10px'}}>
                <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <GrTask/>
                    <Typography>Nhiệm vụ</Typography>
                </Box>
                <Typography> {`${member?.completedQuantity}/${member?.taskQuantity}`}</Typography>
            </Box>
            <ProgressBar
                isLabelVisible={false}
                bgColor='#ebb538'
                baseBgColor='#f4f4f4'
                completed={percent}
                height='6px'
            />
        </Box>
        {/* Option manage team member */}
            <Box sx={{display:'flex',minHeight:'40px',justifyContent:'space-between',alignItems:'center'}}>
                {checkCanDeleteorLeave(userInfor,member)}
                  {/* Modal confirm leave workspace */}
                  <Modal
                    style={{display:'flex'}}
                    open={isOpenConfirmDelete}
                    onClose={()=>setOpenConfirmDelete(false)}
                  >
                    <Box sx={{display:'flex',flexDirection:'column', borderRadius:'6px',
                      gap:'10px',backgroundColor:'#fff',maxWidth:'450px',padding: '10px 20px',margin:'auto'}}>
                      {/* Header */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "20px", fontWeight: 550,boderBottom:'1px solid #040404',marginBottom:'10px' }}>
                          XÁC NHẬN
                        </Typography>
                      </Box>
                       <Typography sx={{marginBottom:'10px' }}>Bạn có chắc muốn xóa thành viên này khỏi dự án không?</Typography>
                       <Box sx={{display:'flex',gap:'20px',justifyContent:'flex-end'}}>
                          <Button 
                           onClick={handleRemoveMemberOfWorkspace}
                            variant='contained'>Xóa</Button>
                          <Button 
                            onClick={()=>setOpenConfirmDelete(false)}
                            variant='outlined'>Hủy</Button>
                       </Box>
                    </Box>
                  </Modal>

                   {/* Modal confirm delete member */}
                <Modal
                    style={{display:'flex'}}
                    open={isOpenConfirmLeave}
                    onClose={()=>setOpenConfirmLeave(false)}
                  >
                    <Box sx={{display:'flex',flexDirection:'column', borderRadius:'6px',
                      gap:'10px',backgroundColor:'#fff',maxWidth:'450px',padding: '10px 20px',margin:'auto'}}>
                      {/* Header */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "20px", fontWeight: 550,boderBottom:'1px solid #040404',marginBottom:'10px' }}>
                          XÁC NHẬN
                        </Typography>
                      </Box>
                       <Typography sx={{marginBottom:'10px' }}>Bạn có chắc muốn rời khỏi dự án này không?</Typography>
                       <Box sx={{display:'flex',gap:'20px',justifyContent:'flex-end'}}>
                          <Button 
                           onClick={handleLeaverWorkspace}
                            variant='contained'>Rời nhóm</Button>
                          <Button 
                            onClick={()=>setOpenConfirmLeave(false)}
                            variant='outlined'>Hủy</Button>
                       </Box>
                    </Box>
                  </Modal>
                <Box>
                  <Button 
                      style={{textDecoration:'none'}}
                      onClick={handleLinkClick}>Xem chi tiết</Button>
              </Box>
        </Box>
        
       
    </Box>
  )
}

export default MemberCard