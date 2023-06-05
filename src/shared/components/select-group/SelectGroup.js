import React from 'react'
import styles from './styles.module.scss';
const SelectGroup = () => {
  return (
    <div className={styles.selectgroup_container}>
        <div className={styles.form_item_group}>
            <p 
                className={styles.title_label}>Thẻ</p>
            <select 
                className={styles.select_options}>
                <option value="1">Sẽ làm</option>
                <option value="2">Đang làm</option>
                <option value="3">Đã hoàn thành</option>
            </select>
        </div>
        <div className={styles.form_item_group}>
            <p 
                className={styles.title_label}>Độ Ưu tiên</p>
            <select
                className={styles.select_options}>
                <option value="1">Thấp</option>3
                <option value="2">Trung bình</option>
                <option value="3">Cao</option>
            </select>
        </div>
    </div>
  )
}

export default SelectGroup