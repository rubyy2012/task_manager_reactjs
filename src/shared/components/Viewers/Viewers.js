import React from 'react'
import styles from './styles.module.scss';
import { Avatar, AvatarGroup } from '@mui/material';
import avatar from '../../../assets/images/avatar.jpg';
const Viewers = () => {
  return (
    <div className={styles.viewers_container}>
        <AvatarGroup
            className={styles.avatar_group}
            sx={{
                '& .MuiAvatar-root': { width:26, height:26, fontSize: 14 },
                }}
            spacing={-1}
            max={4}>
            <Avatar
                className={styles.avatar}
                src={avatar}
                sx={{ width:26, height:26 }}
            />
                <Avatar
                className={styles.avatar}
                src={avatar}
                sx={{ width:26, height:26 }}
            />
            <Avatar
                className={styles.avatar}
                sx={{ width:26, height:26 }}
                src={avatar}
            />
            <Avatar
                className={styles.avatar}
                sx={{ width:26, height:26 }}
                src={avatar}
            />
                <Avatar
                className={styles.avatar}
                src={avatar}
                sx={{ width:26, height:26 }}
            />
            <Avatar
                className={styles.avatar}
                sx={{ width:26, height:26 }}
                src={avatar}
            />
            <Avatar
                className={styles.avatar}
                sx={{ width:26, height:26 }}
                src={avatar}
            />
        </AvatarGroup>
    </div>
  )
}
export default Viewers;
