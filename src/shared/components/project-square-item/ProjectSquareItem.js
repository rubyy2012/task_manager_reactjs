import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { Avatar, AvatarGroup } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import WorkspaceAction from "../../../redux/workspaces/WorkspaceAction";
import { useEffect } from "react";
const ProjectSquareItem = ({ id, item,percent }) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type: WorkspaceAction.REQUEST_GET_RECENTLY_PROJECT
    })
  },[id])
  const handleDeleteWorkspace = (id) => {
    console.log('id',id);
    dispatch ({
      type: WorkspaceAction.REQUEST_DELETE_PROJECT,
      payload: {
        data: id,
        callback: {
          // toast: (message) => toast(message)
        }
      }
    })
  }
  return (
    <div 
        className={styles.recent_project_component}>
        <Link
              replace={true}
              className={styles.link_item}
              to={`/project-page/project/${id}/all-tasks`}
            >
          <p className={styles.name}>
            {item?.title}
            <span 
                style = {item?.isComplete?{backgroundColor:'#a3d1e8',color:'#186185'}:{backgroundColor:'#e8aec9',color:'#8b0645'}}
              className={styles.status}>
              {item?.isComplete?'Đã hoàn thành':'Đang thực hiện'}
            </span>
          </p>
          </Link>
          <div className={styles.description}>{item?.description}</div>
          <div className={styles.progress}>
            <ProgressBar
              isLabelVisible={false}
              height="6px"
              bgColor={item?.isComplete ? "green" : "orange"}
              completed={percent&&percent}
            />
            <span className={styles.text}>{percent&&`${percent}%`}</span>
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
            <div className={styles.group_icon}>
              <MdDeleteOutline 
                onClick={()=>handleDeleteWorkspace(id)}
                className={styles.icon_delete} />
              <AiOutlineEdit className={styles.icon_edit} />
            </div>
          </div>
    
    </div>
    
  );
};

export default React.memo(ProjectSquareItem);
