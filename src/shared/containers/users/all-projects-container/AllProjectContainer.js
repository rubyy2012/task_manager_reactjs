import React, { useState } from 'react'
import styles from './styles.module.scss'
import { CiSearch } from "react-icons/ci";
import RoleList from '../../../../api/FilterRole';
import StatusList from '../../../../api/FilterStatus'; 
import CustomSelect from '../../../components/custom-select/CustomSelect'
import { BsFilter } from "react-icons/bs";
import { Avatar, AvatarGroup } from '@mui/material';
import ButtonViewTask from '../../../components/all-button/button-view-one-task/ButtonViewTask';
import ProjectSquareItem from '../../../components/project-square-item/ProjectSquareItem';

const AllProjectContainer = () => {
  const [isCompleted,setCompleted] = useState(false)

  return (
    <div className={styles.all_project_container}>
        <div className={styles.all_project_body}>
            {/* <CustomSelect/> */}
            <div className={styles.header}>
              <p className={styles.tilte_page}>Tất cả dự án <span>(10)</span></p>
            </div>
            <div className={styles.filter_container}>
              <div className={styles.search_container}>
                <label className={styles.label}>Tìm kiếm dự án</label>
                <div className={styles.input_container}>
                  <input 
                    placeholder='Tìm kiếm theo tên...'
                    className={styles.input_field}
                    type="text" />
                  <CiSearch className={styles.icon_search}/>
                </div>
              </div>
              <div className={styles.filter_wrapper}>
                <CustomSelect
                  labelText = 'Trạng thái'
                  placeholder = 'Chọn trạng thái'
                  listItems = {StatusList}
                />
                <CustomSelect
                  placeholder = 'Chọn vai trò'
                  labelText = 'Vai trò'
                  listItems = {RoleList}
                />
              </div>
            </div>

            <div className={styles.list_project_container}>
              <ProjectSquareItem
                id = {1}
              />
              <ProjectSquareItem
                id = {2}
              />
              <ProjectSquareItem
                id = {3}
              />
              <ProjectSquareItem
                id = {4}
              />
            </div>
        </div>
    </div>
  )
}

export default AllProjectContainer