import React, { useState } from 'react'
import PriorityLabel from '../PriorityLabel/PriorityLabel';
import TaskOptionsLayout from '../../containers/layouts/share/task/TaskOptionsLayout';

const Priority = ({setOpenPriority}) => {
    
  return (
    <TaskOptionsLayout  
        setTonggle={setOpenPriority}
        textLabel='Set Priority'
    >
        <div>
                <PriorityLabel
                    btn_low = 'btn_low'
                    text = 'Low'
                    iconColor = '#1b486e'
                />
                <PriorityLabel
                    btn_medium = 'btn_medium'
                    text = 'Medium'
                    iconColor='#ca8505'
                />
                <PriorityLabel
                    btn_height = 'btn_height'
                    text = 'Height'
                    iconColor='#cd312b'
                />
        </div>
    </TaskOptionsLayout>
  )
}
export default Priority;
