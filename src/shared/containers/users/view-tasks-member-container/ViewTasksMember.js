
import { Box, Typography } from '@mui/material';
import Task from '../../../components/Task/Task';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import WorkspaceAction from '../../../../redux/workspaces/WorkspaceAction';
import TaskAction from '../../../../redux/tasks/TaskAction';
import { useSelector } from 'react-redux';

const ViewTasksMember = () => {
  const {id} = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { allTasksByMember } = useSelector((state) => ({
    allTasksByMember: state.task.allTasksByMember,
  }));
  useEffect(()=>{
      dispatch({
        type: TaskAction.REQUEST_GET_TASKS_BY_MEMBER,
        payload: {
          data: {
            workspaceId: parseInt(location.state.workspaceId),
            memberId: id
          }
        }
      })
  },[id])
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:'20px',padding:'20px',backgroundColor:'#edf2f5',minHeight:'100vh'}}>
      <Box>
        <Typography sx={{textAlign:'left',fontSize:'20px'}}>
          Nhiệm vụ hiện tại của 
          <label style={{fontWeight:600,color: 'red',marginLeft:'10px'}}
          >{allTasksByMember?.data?.Member?.fullName}</label></Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
        {
          allTasksByMember?.data?.TaskItems
          ?.map (taskItem=> (
            <Task key={taskItem.id}
                  task = {taskItem}
            />
          ))
        }
      </Box>
    </Box>
  )
}

export default ViewTasksMember