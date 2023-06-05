import React from 'react'
import styles from './styles.module.scss'
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TimelineIcon from '@mui/icons-material/Timeline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuItem from '../MenuItem/MenuItem';
import { BsCalendarWeek } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
const Menu = (props) => {
  return (
    <div className={styles.side_bar_group}>
        <div className={styles.workspaces_container}>
            <div className={styles.workspaces}>
                <p>Không gian làm việc</p>
                <div className={styles.options}>
                    <MoreHorizIcon className={styles.workspace_icon}/>
                    <AddIcon className={styles.workspace_icon}/>
                </div>
            </div>
            <div className={styles.list_menu_container}>
                <ul className={styles.list_menu_ul}>
                    <MenuItem
                        itemIcon = {<GridViewIcon className={styles.dashboard_icon}/>}
                        itemText = 'Tổng quan'
                        dropDownIcon = {<KeyboardArrowDownIcon  className={styles.dropdown_icon}/>}
                        listItems = {{
                            data:[
                                {
                                    id: 1,
                                    title: 'Xem tổng quan',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                }
                            ]
                        }}
                    />
                    <MenuItem
                        itemIcon = {<FaHistory  className={styles.recently_icon}/>}
                        itemText = 'Dự án gần nhất'
                        dropDownIcon = {<KeyboardArrowDownIcon  className={styles.dropdown_icon}/>}
                        listItems = {{
                            data:[
                                {
                                    id: 1,
                                    title: 'All projects',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 2,
                                    title: 'Overviews',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 3,
                                    title: 'Create project',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                }
                            ]
                        }}
                    />  
                    <MenuItem
                        itemIcon = {<AccountTreeIcon  className={styles.allprojects_icon}/>}
                        itemText = 'Tất cả'
                        dropDownIcon = {<KeyboardArrowDownIcon  className={styles.dropdown_icon}/>}
                        listItems = {{
                            data:[
                                {
                                    id: 1,
                                    title: 'Tất cả dự án',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 2,
                                    title: 'Danh sách nhiệm vụ',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                }                              
                            ]
                        }}
                    />  
                <MenuItem
                        itemIcon = {<BsCalendarWeek  className={styles.calendars_icon}/>}
                        itemText = 'Lịch chung'
                        dropDownIcon = {<KeyboardArrowDownIcon  className={styles.dropdown_icon}/>}
                    />  
                </ul>
            </div>

        </div>
    </div>
  )
}

export default React.forwardRef(Menu);
