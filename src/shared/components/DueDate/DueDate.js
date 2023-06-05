import React from 'react'
import styles from './styles.module.scss';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers';
import { Button } from '@mui/material';
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { useRef } from 'react';

  
const DueDate = ({setOpenCalendar}) => {
    const ref = useRef();
    useOnClickOutside(ref, () => setOpenCalendar(false));
  return (
    <div 
        ref={ref}
        className={styles.duedate_container}>
        <div className={styles.duedate_body}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar 
                    name = 'dueDate'
                    onChange={(e)=>console.log('date',e.$d)}
                    className={styles.date_picker}
                />
            </LocalizationProvider>
        </div>
    </div>
  )
}
export default DueDate
