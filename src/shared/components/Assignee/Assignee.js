import React from 'react'
import Search from '../Search/Search';
import MemberSelect from '../MemberSelect/MemberSelect';
import TaskOptionsLayout from '../../containers/layouts/share/task/TaskOptionsLayout';
const Assignee = ({setOpenSelectMember}) => {
  return (
    <TaskOptionsLayout
        setTonggle={setOpenSelectMember}
        textLabel='Assignees'>
        <div 

            style={{margin: '20px 0'}}>
            <Search
                placeholder='Find person...'
                />
        </div>
        <div style={{maxHeight: '300px',
                    overflowY: "scroll"}}>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
            <MemberSelect/>
        </div>
    </TaskOptionsLayout>
  )
}
export default Assignee;
