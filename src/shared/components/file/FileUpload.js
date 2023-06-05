import React from 'react'
import styles from './styles.module.scss'
import { AiOutlineDownload } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";
const FileUpload = () => {
  return (
    <div className={styles.fileupload_container}>
        <div className={styles.fileupload_body}>
            <div className={styles.file_symbol}>
                <CiImageOn className={styles.image_icon}/>
            </div>
            <div className={styles.file_container}>
                <div className={styles.file_infor_container}>
                    <p className={styles.file_name}>Wireframe UIKit.zip</p>
                    <p className={styles.time_upload}>
                        Upload on 15.01.2020 at 15:04pm
                    </p>
                    <p className={styles.file_size}>5.8 MB</p>
                </div>
                <div className={styles.file_option_container}>
                    <AiOutlineDownload className={styles.option_icon}/>
                    <RiDeleteBin6Line className={styles.option_icon}/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default FileUpload;
