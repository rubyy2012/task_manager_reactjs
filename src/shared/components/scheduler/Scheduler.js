import React from 'react'
import styles from './styles.module.scss'
import { ScheduleComponent,Inject,Day,Week,WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'
import { Work } from '@mui/icons-material'
const Scheduler = () => {
  return (
    <ScheduleComponent>
      <Inject
        services={[Day,Week,WorkWeek,Month,Agenda]}
      />
    </ScheduleComponent>
  )
}

export default Scheduler