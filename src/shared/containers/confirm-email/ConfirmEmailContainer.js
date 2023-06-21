import React from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
const ConfirmEmailContainer = ({children}) => {
  // const 
  // const {message} = useSelector(state=>state.)
  const { userRegister } = useSelector((state) => ({
    userRegister: state.user.userRegister,
}));
  return (
    <div className={styles.confirm_email_container}>
        <div className={styles.confirm_email_body}>
          {
            userRegister.message
          }
        </div>
    </div>
  )
}

export default ConfirmEmailContainer