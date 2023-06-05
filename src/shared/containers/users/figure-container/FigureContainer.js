import React from 'react'
import styles from './styles.module.scss'
import FigureCard from '../../../components/FigureCard/FigureCard';
const FigureContainer = () => {
  return (
    <div className={styles.figure_container}>
        <div className={styles.figure_container_body}>
          <div className={styles.myprojects_container}>
              <p className={styles.onwer_label}>My projects</p>
              <div className={styles.listprojects}>
                  <FigureCard/>
                  <FigureCard/>
                  <FigureCard/>
                  <FigureCard/>
                  <FigureCard/>
              </div>
          </div>
          <div className={styles.parternerprojects_container}>
              <div className={styles.owner_item}>
                <p className={styles.onwer_label}>Partner's projects</p>
                <div className={styles.listprojects}>
                    <FigureCard/>
                    <FigureCard/>
                    <FigureCard/>
                    <FigureCard/>
                    <FigureCard/>
                </div>
              </div>
          </div>
          
        </div>
    </div>
  )
}
export default FigureContainer;
