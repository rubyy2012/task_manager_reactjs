import React from 'react'
import styles from './styles.module.scss';
import { Button} from '@mui/material';
import ListColor from '../../../api/ListColor';
import ColorItem from '../ColorItem/ColorItem';
import { useRef } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import SelectGroup from '../select-group/SelectGroup';
import FormItem from '../form-item-group/FormItem';
import DateTimeGroup from '../date-time-group/DateTimeGroup';
import { useState } from 'react';
const CreateTask = ({setOpenCreateTask,openCreateTask}) => {
  const ref = useRef();
    useOnClickOutside(ref, () => setOpenCreateTask(false));
    const [selectedColor,setSelectedColor] = useState(false)
  return (
    <div 
        ref={ref}
        className={`${styles.createtask_container} ${openCreateTask?styles.isVisible:''}`}>
        <div className={styles.createtask_body}>
            <div className={styles.createtask_header}>
                <p className={styles.createtask_title}>Tạo nhiệm vụ mới</p>
                <p className={styles.createtask_instruction}>
                  Nhớ thêm thành viên để cùng cộng tác làm việc nhé!
                </p>
            </div>
            <div className={styles.createtask_content}>
              <form action="">
                  <FormItem
                      placeholder='Nhập tên nhiệm vụ'
                      value = ''
                      defaultValue = ''
                      name = ''
                      multiline={false}
                      maxRows = {1}
                      minRows = {1}
                  />
                  <FormItem
                    placeholder='Nhập mô tả'
                    value = ''
                    defaultValue = ''
                    name = ''
                    multiline = {true}
                    minRows={3}
                    maxRows={5}
                  />
                  <SelectGroup/>
                  {/* <FormItem
                    placeholder='Enter label'
                    value = ''
                    defaultValue = ''
                    name = ''
                    multiline = {false}
                    minRows={1}
                    maxRows={1}
                  />
                  <div className={styles.form_item_group}>
                      <p 
                        className={styles.title_label}
                      >Choose color</p>
                     <div className={styles.group_colors}>
                        {
                          ListColor.map(item=>(
                            <ColorItem
                                width = {24}
                                height = {24}
                                color = {item.colorCode}
                                
                            />
                          ))
                        }
                     </div>
                  </div> */}
                  <DateTimeGroup/>
                  <div className={styles.btn_group}>
                        <Button
                          className={styles.btn_cancel}
                          onClick = {()=>setOpenCreateTask(false)}
                          >Cancel</Button>
                        <Button
                          className={styles.btn_create}
                         >Create task</Button>
                  </div>
                 
              </form>
            </div>
        </div>
    </div>
  )
}
export default CreateTask;
