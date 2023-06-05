import React from 'react'
import styles from './styles.module.scss'
const ConfirmEmailContainer = ({children}) => {
  return (
    <div className={styles.confirm_email_container}>
        <div className={styles.confirm_email_body}>
            {/* Đăng ký tài khoản thành công. Hãy xác nhận qua email để đăng nhập lại! */}
            {children}
        </div>
    </div>
  )
}

export default ConfirmEmailContainer