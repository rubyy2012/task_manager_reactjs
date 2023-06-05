import React from 'react'
import styles from './styles.module.scss';
import { Avatar } from '@mui/material';
const Comments = () => {
  return (
        <div className={styles.list_comments}>
            <div className={styles.comment_item}>
                <div className={styles.avatar}>
                    <Avatar/>
                </div>
                <div className={styles.comment_content}>
                    <p className={styles.name_member}>Brooklyn Simmons</p>
                    <p className={styles.comment}>
                        Here a a few way to start project overviews
                    </p>
                </div>
            </div>
            <div className={styles.comment_item}>
                <div className={styles.avatar}>
                    <Avatar/>
                </div>
                <div className={styles.comment_content}>
                    <p className={styles.name_member}>Brooklyn Simmons</p>
                    <p className={styles.comment}>
                        Here a a few way to start project overviews
                    </p>
                </div>
            </div>
        </div> 
  )
}
export default Comments;
