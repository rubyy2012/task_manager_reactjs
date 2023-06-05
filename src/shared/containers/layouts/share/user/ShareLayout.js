import { Outlet } from 'react-router-dom';
import Header from '../../../../components/header/Header';
import SideBar from '../../../../components/sidebar/SideBar';
import styles from './styles.module.scss';
import React from 'react'
import { useState } from 'react';
import Notification from '../../../../components/notifycation/Notification';

const ShareLayout = ({children}) => {

  return (
    <div className={styles.share_layout_container}>
        <SideBar/>
        <div className={styles.main_container}>
            {/* <Header/>  */}
            <div className={styles.main_container_body}>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
export default ShareLayout;
