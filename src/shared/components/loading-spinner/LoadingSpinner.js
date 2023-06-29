import styles from "./styles.module.scss"
import React from 'react'

const LoadingSpinner = ({children,loading}) => {
    return (
        <>
            {
                loading&&
                (<div id={styles.spinner_container}>
                    <div className={styles.spinner_wrapper}>
                    </div>
                </div>)
            }
            {children}
        </>
    )
}
export default LoadingSpinner;