import React from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import WorkspaceAction from '../../../../redux/workspaces/WorkspaceAction';
import MemberCard from '../../../components/member-card/MemberCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../../components/loading-spinner/LoadingSpinner';
const TeamMemberContainer = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(()=>{
    dispatch({
      type:WorkspaceAction.REQUEST_GET_LIST_MEMBER_WITH_TASK,
      payload:{
        data: {
          workspaceId: parseInt(id),
        }
      }
    })
  },[])
  const { listMembersWithTask } = useSelector((state) => ({
    listMembersWithTask: state.workspace.listMembersWithTask,
  }));
  // const { detailProject } = useSelector((state) => ({
  //   detailProject: state.workspace.detailProject,
  // }));
  // const myRole = detailProject?.data?.myRole;
  const { myRole } = useSelector((state) => ({
    myRole: state.workspace.myRole,
  }));
  return (
    <LoadingSpinner loading={listMembersWithTask?.loading}>
    <div className={styles.teammember_container}>
      <div className={styles.teammember_body}>
        {
          listMembersWithTask?.data?.map(memberworkspace=>(
              <MemberCard 
                  myRole ={myRole}
                  key={memberworkspace.id}
                  member = {memberworkspace}
              />

          ))
        }
      </div>
    </div>
    </LoadingSpinner>

  )
}

export default TeamMemberContainer