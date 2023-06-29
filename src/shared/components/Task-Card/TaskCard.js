import React from 'react'
import styles from './styles.module.scss';
import ProgressBar from '@ramonak/react-progress-bar';
import { Avatar, AvatarGroup } from '@mui/material';
import moment from 'moment';
const TaskCard = ({task}) => {
    const dueDate = moment(task?.dueDate).format('MM/DD/YYYY')
    const checkDate = (date) => {
        const currentDate = new Date();
        const inputDate = new Date(dueDate);
    
        // Đặt giờ, phút, giây của ngày hiện tại thành 0 để so sánh chỉ theo ngày
        currentDate.setHours(0, 0, 0, 0);
    
        // Đặt giờ, phút, giây của ngày nhập vào thành 0 để so sánh chỉ theo ngày
        inputDate.setHours(0, 0, 0, 0);
    
        // So sánh ngày hiện tại với ngày nhập vào
        if (inputDate.getTime() === currentDate.getTime()) {
          return 'Hôm nay';
        } else {
          // Tạo một đối tượng Date mới cho ngày mai
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(0, 0, 0, 0);
    
          // So sánh ngày nhập vào với ngày mai
          if (inputDate.getTime() === tomorrow.getTime()) {
            return 'Ngày mai';
          } 
          else {
            return moment(date).format('DD/MM/YYYY');
          }
        }
      };
  return (
    <div className={styles.task_card_container}>
        <div className={styles.task_card_body}>
            <p className={styles.name_task}>{task.title}</p>
            <div className={styles.date_and_priority}>
                <div className={styles.priority}>
                    <label style ={{backgroundColor:''}}></label>
                    <span style ={{color:''}}>
                        {task.priority===1?'Trung bình':task.priority===2?'Cao':'Thấp'}
                    </span>
                </div>
                {/* <p className={styles.date}>{moment(task?.dueDate).format('HH:mm DD/MM/YYYY ')}</p> */}
                <p className={styles.date}>{checkDate(dueDate)}</p>
            </div>
           
            <div className={styles.list_labels}>
                {
                    task?.labels?.map(label=>(
                    <label 
                        style={{backgroundColor:label.color}}
                        className={styles.label_item}>{label.name}</label>
                    ))
                }
                
            </div>
            <div className={styles.description}>
                {task?.description}
            </div>
            <div className={styles.progress_area}>
                <ProgressBar
                    isLabelVisible={false}
                    height="6px"
                    bgColor={task.isComplete?'#49cc90':'#f93e3e'}
                    completed={task?.percentage}
                />
                <div className={styles.progress_text}>
                    <span className={styles.quantity}>{`${task?.subtaskCompleted}/${task?.subtaskQuantity}`}</span>
                    <span className={styles.percent}>{task?.percentage}%</span>
                </div>
            </div>
            <div className={styles.member_and_option}>
                <div className={styles.list_members}>
                    <AvatarGroup
                        max={3}
                        sx={{
                        "& .MuiAvatar-root": { width: 26, height: 26, fontSize: 14 },
                        }}
                    >
                        {
                            task?.members?.map(member=>(
                                <Avatar
                                    src = {member.avatar}
                                />
                            ))
                        }
                    </AvatarGroup>
                </div>
                {/* <div className={styles.option}>
                    <VscEdit className={styles.icon}/>
                    <AiOutlineDelete className={styles.icon}/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default TaskCard