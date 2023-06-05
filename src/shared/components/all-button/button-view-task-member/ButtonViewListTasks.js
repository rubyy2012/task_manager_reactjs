import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
const ButtonViewListTasks = ({id}) => {

  return (
    <Link
        to ={`/${id}`}
        replace
        className={styles.btn_view_task}
        >Xem chi tiết</Link>
  )
}

export default ButtonViewListTasks