import React, { useEffect } from 'react'
import styles from './styles.module.scss';
import { Link, useParams } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { Avatar, AvatarGroup, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import AdminAction from '../../../../redux/admin/AdminAction';
import { useSelector } from 'react-redux';
import ProgressBar from '@ramonak/react-progress-bar';
import { Box } from '@mui/system';
const ListWorkspacesUser = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    console.log('id user',id);
    const { listProjects } = useSelector((state) => ({
        listProjects: state.admin.listProjects,
      }));
    useEffect(()=>{
        dispatch({
            type: AdminAction.REQUEST_GET_LIST_PROJECTS_OF_USER,
            payload: {
                data: {
                    userId: id
                }
            }
        })
    },[id])
    console.log('listProjects',listProjects?.data?.users?.workspaces)
  return (
    <div className={styles.list_workspaces_user}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Typography sx={{color:'#fefefe',fontSize:'20px'}}>Danh sách dự án của <span style={{color: '#F24C3D',fontWeight:'600'}}>Hồng ngọc</span></Typography>
        </Box>
        <div className={styles.list_workspaces}>
        {
            listProjects?.data?.user?.workspaces?.map(workspace => (
                <div 
                className={styles.recent_project_component}>
                    <Link
                        replace={true}
                        className={styles.link_item}
                        >
                    <p className={styles.name}>
                        {workspace?.title}
                        <span 
                            style = {workspace?.isComplete?{backgroundColor:'#a3d1e8',color:'#186185'}:{backgroundColor:'#e8aec9',color:'#8b0645'}}
                        className={styles.status}>
                        {workspace?.isComplete?'Đã hoàn thành':'Đang thực hiện'}
                        </span>
                    </p>
                    </Link>
                    <div className={styles.description}>{workspace?.description}</div>
                    <div className={styles.progress}>
                        <ProgressBar
                            isLabelVisible={false}
                            height="6px"
                            bgColor={workspace?.isComplete ? "green" : "orange"}
                            completed={(workspace?.taskQuantity>0?parseInt(workspace?.taskCompleted*100/workspace?.taskQuantity):'0')}
                        />
                        <span className={styles.text}>{(workspace?.taskQuantity>0?parseInt(workspace?.taskCompleted*100/workspace?.taskQuantity):'0')}%</span>
                    </div>
                    <div className={styles.footer}>
                        <p className={styles.team_members}>
                        <AvatarGroup
                            max={4}
                            sx={{
                            "& .MuiAvatar-root": { width: 26, height: 26, fontSize: 14 },
                            }}
                        >
                            <Avatar />
                            <Avatar />
                            <Avatar />
                            <Avatar />
                        </AvatarGroup>
                        </p>
                    </div>

                </div>
            ))
        }

        </div>
    </div>
  )
}

export default ListWorkspacesUser