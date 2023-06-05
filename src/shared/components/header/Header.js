import React from 'react'
import styles from './styles.module.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Avatar } from '@mui/material';
import {avatar} from '../../../utils/imageUtils';
import Search from '../Search/Search';
const Header = () => {
  return (
    <div className={styles.header_container}>
        <div className={styles.header_body}>
            <div className={styles.header_left}>
                {/* <div className={styles.navigate}>Dashboard</div> */}
                {/* <div className={styles.search_field}>
                    <SearchRoundedIcon className={styles.search_icon}/>
                    <input 
                        placeholder='Search'
                        type="text" />
                </div> */}
                <Search placeholder='Find something...'/>
            </div>
            <div className={styles.header_right}>
                <div className={styles.notify_area}>
                    <NotificationsRoundedIcon
                        className={styles.notify_icon}
                    /> 
                </div>
                <div className={styles.profile_area}>
                    <Avatar
                        alt='avatar'
                        src={avatar} 
                        className={styles.my_avatar}
                        style={{width:35,height:35}}
                        />
                    <span>Hồng Ngọc</span>
                    {/* <div className={styles.profile_settings}>
                        <Link to=''>Chỉnh sửa thông tin</Link>
                        <Link to=''></Link>
                        <Link to=''></Link>
                        <Link to=''></Link>
                    </div> */}
                </div>
                
            </div>
        </div>
    </div>
  )
}
export default Header;