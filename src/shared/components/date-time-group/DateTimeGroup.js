import React from 'react'
import styles from './styles.module.scss'
import { Button } from '@mui/material'
import { BsCalendar4Event, BsClock } from 'react-icons/bs'
import { useState } from 'react'
import DueDate from '../DueDate/DueDate'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
const DateTimeGroup = () => {
  const [isOpenCalendar,setOpenCalendar] = useState(false);
  return (
        <div className={styles.date_time_group}>
            <div className={styles.form_item_group}>
                <p 
                className={styles.title_label}
                >Ngày kết thúc</p>
                <Button 
                    onClick={()=>setOpenCalendar(!isOpenCalendar)}
                className={styles.btn_add_date}
                >
                May 15, 2023
                <BsCalendar4Event
                />
                </Button>
            </div>
            <div 
                className={styles.time_container}>
                <span>Giờ kết thúc</span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker 
                        name = 'dueTime'
                        onChange = { (e)=>console.log('time',e.$d)}
                        className={styles.custom_time_picker}
                        slotProps={{ textField: { size: 'small' } }}/>
                </LocalizationProvider>
            </div>
            {
            isOpenCalendar&&
            <DueDate
                setOpenCalendar = {setOpenCalendar}
            />
            }
        </div>
  )
}

export default DateTimeGroup