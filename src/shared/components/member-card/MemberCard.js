import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import avatar from '../../../assets/images/avatar.jpg'
import ProgressBar from '@ramonak/react-progress-bar'
import { GrTask } from "react-icons/gr";
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss'
import WorkspaceAction from '../../../redux/workspaces/WorkspaceAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const MemberCard = ({member,myRole}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
  
    const handleLinkClick = () => {
      const state = { workspaceId: id };
      navigate(`/team-members/${member.id}/tasks`, { state });
    };
      const handleRemoveMemberOfWorkspace = (member) => {
        dispatch({
            type:WorkspaceAction.REQUEST_REMOVE_MEMBER_OF_WORKSPACE,
            payload:{
                data: {
                    id: parseInt(id),
                    memberId: member?.id,
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
        console.log('member', member)
        console.log('userInfor', userInfor)

          if (member.id === userInfor.account.id) {
            if(member.role>0)
            {
              return (

                <Button 
                    onClick={handleLeaverWorkspace}
                    variant='outlined'>Rời dự án</Button>
              )
            }
          } 
          else 
          {
            if(myRole< member.role)
            {
              return (
                <Button 
                    onClick={()=>handleRemoveMemberOfWorkspace(member)}
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
                <Box 
              >
                <Button 
                    style={{textDecoration:'none'}}
                    onClick={handleLinkClick}>Xem chi tiết</Button>
            </Box>
        </Box>
        
       
    </Box>
  )
}

export default MemberCard