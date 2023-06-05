import React from 'react'
import styles from './styles.module.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Tag = ({name}) => {
  return (
    <div className={styles.tag_container}>
        <div className={styles.tag_body}>
            <div className={styles.count_items}>
                <div className={styles.dot_icon_container}>
                    <FiberManualRecordIcon className={styles.dot_icon}/>
                    <span> {name}</span>
                </div>
                <span className={styles.count}>3</span>
            </div>
            <div className={styles.icon_container}>
                <MoreVertIcon/>
            </div>
        </div>
    </div>
  )
}
export default Tag;
