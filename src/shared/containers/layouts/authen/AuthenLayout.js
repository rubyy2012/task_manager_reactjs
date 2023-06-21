import React from 'react'
import styles from './styles.module.scss'
import bussinessImage from '../../../../assets/images/BusinessPlan.svg'
import { Link, Outlet  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const AuthenLayout = ({children,welcome,switchPage,currPage,instructionText}) => {

  return (
    <div className={styles.login_wrapper}>
    <ToastContainer/>
    <div className={styles.login_container}>
        <div className={styles.image_container}>
          <img src={bussinessImage} 
                style={{width: '100%', height: '100%'}}
              alt="error"/>
          </div>
          <Outlet/>
    </div>
  </div>
  )
}
export default AuthenLayout;