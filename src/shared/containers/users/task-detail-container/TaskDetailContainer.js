import React from 'react'
import styles from './styles.module.scss'
import { IoCloseOutline } from "react-icons/io5";
import { BsCalendarDay } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import ProgressBar from '@ramonak/react-progress-bar';
import { Avatar } from '@mui/material';
import { IoAdd } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { GrFormEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
import SelectMember from '../../../components/select-member-group/SelectMemberGroup';
import LabelAndColor from '../../../components/label-and-color/LabelAndColor';
import Subtask from '../../../components/sub-task/Subtask';
const TaskDetailContainer = ({taskDetailForm,setOpenTaskDetailForm}) => {
    const [openSelectMember,setOpenSelectMember] = useState(false);
    const [openSelectTag,setOpenSelectTag] = useState(false);
  return (
    <div className={`${styles.taskdetail_container} ${taskDetailForm?styles.isVisible:''}`}>
        <div className={styles.taskdetail_body}>
            <div className={styles.taskdetail_header}>
                <div className={styles.left}>
                    <AiOutlineEdit className={styles.edit_icon}/>
                    <p className={styles.name_task}>Chiến dịch cắm trại</p>
                </div>
                <IoCloseOutline 
                    onClick = {()=>setOpenTaskDetailForm(false)}
                    className={styles.close_icon}/>
            </div>
            <div className={styles.priority_and_due}>
                <div className={styles.priority_container}>
                    <p className={styles.label}>Độ ưu tiên</p>
                    <label className={styles.priority}>Trung bình</label>
                </div>
                <div className={styles.date_time_container}>
                    <p className={styles.label}>Due at:</p>
                   <div className={styles.date_time_content}>
                    <div className={styles.date_container}>
                            <BsCalendarDay/>
                            <p className={styles.label}>27/05/2023</p>                 
                        </div>
                        <div className={styles.time_container}>
                            <TbTargetArrow/>
                            <p className={styles.label}>12:03PM</p>                 
                        </div>
                   </div>
                </div>
               
            </div>
            <div className={styles.progress_container}>
                <p className={styles.label}>Hoành thành 60%</p>
                <ProgressBar
                    isLabelVisible = {false}
                    completed={60}
                    height='8px'
                />
            </div>
            <div className={styles.description_container}>
                    <p className={styles.label}>Mô tả: </p>
                    <button className={styles.add_description}>Thêm mô tả</button>
                    {/* <p className={styles.description_content}>
                        Project này thực hiện môn học 
                        ABC với nội dung Jeankins,CI/CD, Deploy server...</p> */}
            </div>
            <div className={styles.members_container}>
                <p className={styles.label}>Thành viên:</p>
                <div className={styles.list_member}>
                    <div className={styles.member_item_container}>
                        <Avatar
                            className={styles.avatar}
                        />
                        <p className={styles.name_member}>Hồng Ngọc</p>
                    </div>

                    <div className={styles.member_item_container}>
                        <Avatar
                            className={styles.avatar}
                        />
                        <p className={styles.name_member}>Hồng Ngọc</p>
                    </div>
                    <button 
                        onClick = {()=>setOpenSelectMember(!openSelectMember)}
                        className={styles.btn_add_member}>
                        <IoAdd className={styles.icon_add}/>
                    </button>
                    {
                        openSelectMember&& 
                            <SelectMember
                                setOpenSelectMember ={setOpenSelectMember}
                                openSelectMember ={openSelectMember}
                            />
                    }
                </div>
            </div>
            <div className={styles.label_container}>
                <p className={styles.label}>Nhãn:</p>
                <div className={styles.list_tags}>
                    <p
                        style = {{
                            backgroundColor:'green'
                        }}
                         className={styles.tag}>
                        Mobile
                    </p>
                    <p
                        style = {{
                            backgroundColor:'purple'
                        }}
                         className={styles.tag}>
                        Jeankins
                    </p>
                </div>
                <button 
                    onClick = {()=>setOpenSelectTag(!openSelectTag)}
                    className={styles.add_tag}>Thêm nhãn</button>

                {
                    openSelectTag&& 
                    <LabelAndColor
                        setOpenSelectTag = {setOpenSelectTag}
                        openSelectTag ={openSelectTag}
                    />
                }
            </div>
            <div className={styles.subtask_container}>
                <p className={styles.label}>Nhiệm vụ con:</p>
                {/* <p className={styles.instruction}>Bạn chưa tạo nhiệm vụ nào, hãy 
                    <button className={styles.btn_add_subtask}>Tạo nhiệm vụ</button>
                </p> */}
                <div className={styles.list_subtasks}>
                    <Subtask/>
                    <Subtask/>
                    <Subtask/>
                </div>
            </div>
            <div className={styles.comment_container}>
                <p className={styles.label}>Bình luận:</p>
                {/* <p className={styles.instruction}>Chưa có bình luận nào!</p> */}
                <div className={styles.comment_body}>
                    <div className={styles.input_container}>
                        <Avatar/>
                        <input 
                            placeholder='Nhập vào đây để thêm bình luận!'
                            type='text'/>
                    </div>
                    <button className={styles.btn_send_comment}>Gửi bình luận</button>
                </div>
                <div className={styles.list_comments}>
                    <div className={styles.comment_item}>
                       <div className={styles.left}>
                            <div className={styles.avatar_wrapper}>
                                <Avatar className={styles.avatar}/>
                                <p className={styles.name}>Hồng Ngọc</p>
                            </div>
                            <div className={styles.content_comment}>
                                <div className={styles.text}>Cái này chưa ổn lắm!</div>
                                <p className={styles.time}>17/06/2023 - 18:09PM</p>
                            </div>
                       </div>
                       <div className={styles.right}>
                            <GrFormEdit className={styles.icon_edit}/>
                            <MdDeleteOutline className={styles.icon_delete}/>
                       </div>
                    </div>
                    <div className={styles.comment_item}>
                       <div className={styles.left}>
                            <div className={styles.avatar_wrapper}>
                                <Avatar className={styles.avatar}/>
                                <p className={styles.name}>Hồng Ngọc</p>
                            </div>
                            <div className={styles.content_comment}>
                                <div className={styles.text}>Cái này chưa ổn lắm!</div>
                                <p className={styles.time}>17/06/2023 - 18:09PM</p>
                            </div>
                       </div>
                       <div className={styles.right}>
                            <GrFormEdit className={styles.icon_edit}/>
                            <MdDeleteOutline className={styles.icon_delete}/>
                       </div>
                    </div>
                    <div className={styles.comment_item}>
                       <div className={styles.left}>
                            <div className={styles.avatar_wrapper}>
                                <Avatar className={styles.avatar}/>
                                <p className={styles.name}>Hồng Ngọc</p>
                            </div>
                            <div className={styles.content_comment}>
                                <div className={styles.text}>Cái này chưa ổn lắm!</div>
                                <p className={styles.time}>17/06/2023 - 18:09PM</p>
                            </div>
                       </div>
                       <div className={styles.right}>
                            <GrFormEdit className={styles.icon_edit}/>
                            <MdDeleteOutline className={styles.icon_delete}/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskDetailContainer