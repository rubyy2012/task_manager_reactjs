import React from 'react'
import styles from './styles.module.scss';
import { Button, MenuItem, Select, TextField} from '@mui/material';
import { useRef } from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import TaskAction from '../../../redux/tasks/TaskAction';


const EditTask = ({setOpenEditTask,openEditTask}) => {
  const dispatch = useDispatch();
  const [defaultValue,setDefaultValue] = useState()
  const {id} = useParams();
  const { control, handleSubmit } = useForm()
  const ref = useRef();
  const { listCards } = useSelector((state) => ({
    listCards: state.workspace.listCards,
  }));

        useEffect(()=>{
            dispatch({
                type: TaskAction.REQUEST_GET_DETAIL_TASK
            })
        },[])
    const onSubmit = async (data) => {
      const {priority,dueTime,dueDate,cardId} = data;
      const dateString = new Date(dueDate.$d).toString()
      const timeString = new Date(dueTime.$d).toString();
      const partsTime = timeString.split(" ")[4];
      const formattedDate = moment(dateString).format("YYYY-MM-DD");
      console.log('formattedDate',formattedDate);
      const datetime = `${formattedDate} ${partsTime}`;
      const dataSend = {
        ...data,
        priority: parseInt(priority),
        cardId: parseInt(cardId),
        dueDate: datetime,
        dueTime:''
      }
      dispatch({
        type: TaskAction.REQUEST_CREATE_TASK,
        payload: {
          data: dataSend,
          workspaceId: id
        }
      })
  }

  useEffect(()=>{
      if(listCards?.data[0])
      {
        setDefaultValue(parseInt(listCards.data[0]?.id))
      }
  },[id])
  console.log('wwwwwwww',listCards.data[0]?.id.toString())
  return (
    <div 
        ref={ref}
        className={`${styles.createtask_container} ${openEditTask?styles.isVisible:''}`}>
        <div className={styles.createtask_body}>
            <div className={styles.createtask_header}>
                <p className={styles.createtask_title}>Tạo nhiệm vụ mới</p>
                <p className={styles.createtask_instruction}>
                  Nhớ thêm thành viên để cùng cộng tác làm việc nhé!
                </p>
            </div>
            <div className={styles.createtask_content}>
              <form onSubmit={handleSubmit(onSubmit)}>
                 <div className={styles.form_item_group}>
                    <p 
                    className={styles.title_label}
                    >Nhiệm vụ mới</p>
                      <Controller
                          control={control}
                          name='title'
                          defaultValue=""
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              margin="normal"
                              size = 'small'
                              id="outlined-required"
                              placeholder='Nhập tên nhiệm vụ'
                              className={styles.text_input}
                            />
                          )}
                        />
                </div>

                <div className={styles.form_item_group}>
                    <p 
                    className={styles.title_label}
                    >Nhiệm vụ mới</p>
                    <Controller
                          control={control}
                          name='description'
                          defaultValue=""
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              margin="normal"
                              size = 'small'
                              id="outlined-required"
                              placeholder='Nhập mô tả'
                              multiline = {true}
                              rows={3}
                              className={styles.text_input}
                            />
                          )}
                        />
                  
                </div>
                  {/* <SelectGroup/> */}
                  <div className={styles.selectgroup_container}>
                    <div className={styles.form_item_group}>
                        <p 
                            className={styles.title_label}>Thẻ</p>
                            {
                              listCards && (
                                <Controller
                                control={control}
                                name = 'cardId'
                                // defaultValue= {listCards.data[0]?.id.toString()}
                                defaultValue={defaultValue}
                                render={({ field }) => (
                                  <Select 
                                      {...field}
                                      size = 'small'
                                    >
                                      {
                                        listCards.data?.map(item=>(
                                          <MenuItem 
                                            key = {item.code}
                                            value= {item.id.toString()}>{item.name}</MenuItem>
  
                                        ))
                                      }
                                </Select>
                            )}
                          />
                              )
                            }
                            
                          
                    </div>
                    <div className={styles.form_item_group}>
                        <p 
                            className={styles.title_label}>Độ Ưu tiên</p>
                             <Controller
                              control={control}
                              name = 'priority'
                              defaultValue="1"
                              render={({ field }) => (
                                <Select 
                                    {...field}
                                    size = 'small'
                                  >
                                  <MenuItem value="1">Thấp</MenuItem>
                                  <MenuItem value="2">Trung bình</MenuItem>
                                  <MenuItem value="3">Cao</MenuItem>
                              </Select>)}
                            />
                    </div>
                </div>
                  {/* <DateTimeGroup/> */}
                  <div className={styles.date_time_group}>
                    <div className={styles.form_item_group}>
                        <p 
                        className={styles.title_label}
                        >Ngày kết thúc</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                          control={control}
                          name="dueDate"
                          defaultValue=""
                          render={({ field }) => (
                            <DatePicker 
                              size = 'small'
                              closeOnSelect
                            // format="dd-MM-yyyy"
                            {...field}/>
                        )}
                      />
                        </LocalizationProvider>
                    </div>
                    <div 
                        className={styles.time_container}>
                        <span>Giờ kết thúc</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                          control={control}
                          name="dueTime"
                          defaultValue=""
                          render={({ field }) => (
                            <TimePicker
                              {...field}
                              closeOnSelect
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                  }}
                                  sx='small'
                                />
                              )}
                            />
                        )}
                      />
                        </LocalizationProvider>
                    </div>
              </div>
                  <div className={styles.btn_group}>
                        <Button
                          className={styles.btn_cancel}
                          
                          onClick = {()=>setOpenEditTask(false)}
                          >Cancel</Button>
                        <Button
                          type='submit'
                          className={styles.btn_create}
                         >Create task</Button>
                  </div>
                 
              </form>
            </div>
        </div>
    </div>
  )
}
export default EditTask;
