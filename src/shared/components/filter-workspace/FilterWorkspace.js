import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Button, TextField } from '@mui/material';
import { BsFilterRight } from "react-icons/bs";
const FilterWorkspace = () => {
    const [toggleFilter,setToggleFilter] = useState(false);
  return (
    <div className={styles.filterworkspace_container}>
       <form action="">
       <div className={styles.search_container}>
           <input 
                type="text"
                className={styles.text_field_input}
                placeholder='Nhập tên project...'
                name=''
                 />
            <Button className={styles.btn_search}>
                Tìm kiếm
            </Button>
        </div>
        <div 
            className={styles.filter_container}>
             <BsFilterRight
                    className={styles.filter_icon}
                    onClick={()=>setToggleFilter(!toggleFilter)}
                />
            {/* <div className={styles.option_filter_container}>
               
            </div> */}
        </div>
       </form>
    </div>
  )
}
export default FilterWorkspace;
