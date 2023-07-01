import React, { useEffect } from 'react'
import styles from './styles.module.scss';
import TaskCard from '../../../components/Task-Card/TaskCard';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import TaskAction from '../../../../redux/tasks/TaskAction'
import { useSelector } from 'react-redux';
const UpcomingTaskContainer = () => {
  const dispatch = useDispatch()
  const { upcomingTasks } = useSelector((state) => ({
    upcomingTasks: state.task.upcomingTasks,
  }));
  useEffect(()=>{
    dispatch({
      type:TaskAction.REQUEST_GET_UPCOMING_TASKS,
    })
  },[])
  return (
    <div className={styles.upcoming_container}>
        <div className={styles.upcoming_body}>
            <p className={styles.title}>
                Bạn có <span>{ upcomingTasks?.data?.TaskItems?.length}</span> nhiệm vụ sắp tới hạn !
            </p>
            <div className={styles.list_tasks}>
              {
                upcomingTasks?.data?.TaskItems?.map(task=>(
                  <TaskCard
                    key = {task.id}
                    task = {task}
                  />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default UpcomingTaskContainer