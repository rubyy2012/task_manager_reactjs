import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { Avatar, Typography, Box, Modal, Button, TextField, ThemeProvider, createTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ColorCalendar from '../../../../api/ColorCalendar';
import styles from './styles.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import WorkspaceAction from '../../../../redux/workspaces/WorkspaceAction'
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';
import viCalendarMessages from './viCalendarMessages';
import viLocale from './viLocate';
const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment,{dayNames: viLocale.week,monthNames: viLocale.month});
const theme = createTheme();
const ScheduleContainer = () => {
  const {id} = useParams();
  const [isActive,setActive] = useState(null);
  const [selectColor, setSelectColor] = useState("");
  const [eventsState, setEventsState] = useState([]);
  const [newEvent, setNewEvent] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [draggedEvent, setDraggedEvent] = useState(null);
  const [draggedEventIndex, setDraggedEventIndex] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const { control, handleSubmit, setValue } = useForm();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); 
  const dispatch = useDispatch();

  const { listSchedulers } = useSelector((state) => ({
    listSchedulers: state.workspace.listSchedulers,
  }));
  useEffect(()=>{
    dispatch({
      type:WorkspaceAction.REQUEST_GET_SCHEDULER_OF_WORKSPACE,
      payload: {
        data: {
          workspaceId: parseInt(id)
        }
      }
    })
  },[])
  useEffect(()=>{
    if(listSchedulers?.data?.schedules)
    {
      setEventsState(listSchedulers?.data?.schedules.map(s =>{
        return {
          id : s.id,
          title: s.title,
          start: new Date(s.startDateTime),
          end: new Date(s.endDateTime),
          avatar: s.avatar,
          workspaceId: s.workspaceId,
          color: s.color,
          description:s.description,
        }
      }))
    }
  },[listSchedulers?.data])
  console.log('listSchedulers',listSchedulers)
  const handleSetActive = (id) => {
    setActive(id)
  }
  const moveEvent = ({ event, start, end }) => {

    const updatedEvents = eventsState.map((existingEvent) =>
      existingEvent.id === event.id ? { ...existingEvent, start, end } : existingEvent
    );

    const startDateTime = moment(start).format('YYYY-MM-DD HH:mm:ss');
    const endDateTime = moment(end).format('YYYY-MM-DD HH:mm:ss');
    const dataSend = {
      title: event.title,
      workspaceId:event.workspaceId,
      description:event.description,
      color:event.color,
      startDateTime,
      endDateTime
    }
    dispatch({
      type:WorkspaceAction.REQUEST_EDIT_SCHEDULER,
      payload: {
        data: dataSend,
        callback: {
          toast: (message) => toast(message),
          closeEditModal: () => closeEditModal()
        },
        workspaceId: event.workspaceId,
        id: event.id
      }
    })
    setEventsState(updatedEvents);
    setDraggedEvent(null);
    setDraggedEventIndex(null);
    setSelectedEvent(null);
    setIsDeleteConfirmationOpen(false);
  };

  const resizeEvent = (resizeType, { event, start, end }) => {
    const updatedEvents = eventsState.map((existingEvent) =>
      existingEvent.id === event.id ? { ...existingEvent, start, end } : existingEvent
    );

    setEventsState(updatedEvents);
    setDraggedEvent(null);
    setDraggedEventIndex(null);
  };

  const handleSelectSlot = ({ start, end }) => {
    const isSlotWithinEvent = eventsState?.some(
      (event) =>
        (start >= event?.startDateTime && start < event?.endDateTime) ||
        (end > event?.startDateTime && end <= event?.endDateTime) ||
        (start <= event?.startDateTime && end >= event?.endDateTime)
    );

    if (isSlotWithinEvent) {
      return;
    }
    const currentDate = new Date();
    if(start>currentDate)
    {
      const newEvent = {
        id: eventsState.length + 1,
        title: 'Sự kiện mới',
        start,
        end,
      };
      setEventsState([...eventsState, newEvent]);
      // handleRequest server:
      const startDateTime = moment(start).format('YYYY-MM-DD HH:mm:ss');
      const endDateTime = moment(end).format('YYYY-MM-DD HH:mm:ss');
      const title = newEvent.title;
      dispatch({
        type: WorkspaceAction.REQUEST_CREATE_SCHEDULER,
        payload: {
          data: {
            startDateTime,
            endDateTime,
            title,
            workspaceId: parseInt(id),
          },
          callback: {
            toast: (message) => toast(message)
          }
        }
      })
    }
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const confirmDeleteEvent = (event) => {
    setSelectedEvent(event);
    setIsDeleteConfirmationOpen(true);
  };

  const deleteEvent = () => {
    const eventToDelete = selectedEvent;

    const updatedEvents = eventsState.filter((event) => event.id !== eventToDelete.id);
    setEventsState(updatedEvents);
    setIsDeleteConfirmationOpen(false);
    setSelectedEvent(null);
    //xử lý yêu cầu xóa sự kiện lên server.
    dispatch({
      type: WorkspaceAction.REQUEST_DELETE_SCHEDULER,
      payload: {
        data: {
          workspaceId: parseInt(id),
          id: parseInt(eventToDelete.id)
        },
        callback: {
          toast: (message) => toast(message)
        }
      }
    })
  };

  const closeEditModal = () => {
    setSelectedEvent(null);
    setIsDeleteConfirmationOpen(false);
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = event?.color || '#FF6666';
    const style = {
      backgroundColor,
      border: 'none',
    };

    return {
      style,
    };
  };

  const EventComponent = ({ event }) => {
    const { title,avatar } = event;

    const handleDelete = (e) => {
      e.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử cha
      confirmDeleteEvent(event);
    };

    const handleEdit = (e) => {
      e.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử cha
      setSelectedEvent(event);
      console.log('event',event)
      if(event?.title)
      {
        setValue('title',event.title);
      }
      if(event?.description)
      {
        setValue('description',event.description);
      }

    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap:'10px', position: 'relative',width:'160px' }}>
        <Box sx={{ display: 'flex', justifyContent:'space-between', padding: '0 5px', borderRadius: '8px' }}>
          <Avatar src={avatar} style={{ width: '24px', height: '24px' }} />
          <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <DeleteIcon onClick={handleDelete} />
              <EditIcon onClick={handleEdit} />
          </Box>
        </Box>
        <Typography>{title}</Typography>
      </Box>
    );
  };

  const onSubmitDataEdit = (data) => {
    const startDateFormat = moment(data?.startDate?.$d).format('YYYY-MM-DD');
    const startTimeFormat = moment(data?.startTime?.$d).format('HH:mm:ss');

    const endDateFormat = moment(data?.endDate?.$d).format('YYYY-MM-DD');
    const endTimeFormat = moment(data?.endTime?.$d).format('HH:mm:ss');

    const startDateTime = `${startDateFormat} ${startTimeFormat}`;
    const endDateTime = `${endDateFormat} ${endTimeFormat}`;
    const dataSend = {
      title: data.title,
      description:data.description,
      color:selectColor||'#FF6666',
      startDateTime,
      endDateTime,
      workspaceId:selectedEvent.workspaceId
    }
    // console.log('dataSend',dataSend)
    dispatch({
      type:WorkspaceAction.REQUEST_EDIT_SCHEDULER,
      payload: {
        data: dataSend,
        callback: {
          toast: (message) => toast(message)
        },
        id:selectedEvent.id,
        workspaceId: parseInt(id)
      }
    })
    setSelectedEvent(null);
    setIsDeleteConfirmationOpen(false);
    setValue('startDate',null)
    setValue('startTime',null)
    setValue('endDate',null)
    setValue('endTime',null)
    // const 
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <DragAndDropCalendar
        selectable
        messages={viCalendarMessages}
        
        localizer={localizer}
        events={[...eventsState, ...(newEvent ? [newEvent] : [])]}
        onEventDrop={moveEvent}
        resizable
        onEventResize={resizeEvent}
        defaultView="month"
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventStyleGetter}
        style={{ minHeight: '100vh' }}
        components={{
          event: EventComponent,
        }}
      />
      <Modal 
        sx={{display:'flex'}}
        open={Boolean(selectedEvent) || isDeleteConfirmationOpen} onClose={closeEditModal}>
        <Box sx={{ minWidth: 500, bgcolor: 'background.paper', p: 2,margin:'auto',
          borderRadius:'8px',display:'flex',flexDirection:'column',gap:'10px'}}>
          {selectedEvent && !isDeleteConfirmationOpen && (
            <>
              <Typography variant="h6" sx={{textAlign:'center',fontWeight:'600',color:'red',marginBottom:'10px'}}>Chỉnh sửa thông tin sự kiện</Typography>
              <form 
                onSubmit={handleSubmit(onSubmitDataEdit)}
                style={{display:'flex',flexDirection:'column',gap:'15px'}}
                action="">
                 <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
                      <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
                          <Typography>Tên sự kiện</Typography>
                          <Controller
                              control={control}
                              name="title"
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  size="small"
                                  id="outlined-required"
                                />
                              )}
                            />
                      </Box>
                      <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
                          <Typography>Mô tả</Typography>
                          <Controller
                              control={control}
                              name="description"
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  size="small"
                                  id="outlined-required"
                                  multiline
                                 rows={3}
                                />
                              )}
                            />
                      </Box>
                      {/* Chỉnh sửa thời gian */}
                      <Box sx={{display:'flex',justifyContent:'space-between',gap:'25px'}}>
                        <Box sx={{display:'flex',flex:'1',flexDirection:'column',gap:'8px'}}>
                          <Typography>Ngày giờ bắt đầu</Typography>
                          <Box sx={{display:'flex',flexDirection:'column',gap:'8px'}}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <Controller
                                control={control}
                                name="startDate"
                                defaultValue = ""
                                value = {new Date(startDate)}
                                render={({ field }) => (
                                  <DatePicker
                                    disablePast

                                    size="small"
                                    closeOnSelect
                                    format="DD/MM/YYYY"
                                    {...field}
                                  />
                                )}
                              />
                            </LocalizationProvider>   

                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <Controller
                                    control={control}
                                    name="startTime"
                                    defaultValue=""
                                    render={({ field }) => (
                                      <TimePicker
                                        {...field}
                                        closeOnSelect
                                        renderInput={(params) => (
                                          <TextField
                                            {...params}
                                            inputProps={{
                                              inputMode: "numeric",
                                              pattern: "[0-9]*",
                                            }}
                                            sx="small"
                                          />
                                        )}
                                      />
                                    )}
                                  />
                                </LocalizationProvider> 
                          </Box>
                        </Box>
                        <Box sx={{display:'flex',flex:'1',flexDirection:'column',gap:'8px'}}>
                          <Typography>Ngày giờ kết thúc</Typography>
                          <Box sx={{display:'flex',flexDirection:'column',gap:'8px'}}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <Controller
                                control={control}
                                name="endDate"
                                defaultValue=""
                                render={({ field }) => (
                                  <DatePicker
                                    disablePast
                                    size="small"
                                    closeOnSelect
                                    format="DD/MM/YYYY"
                                    {...field}
                                  />
                                )}
                              />
                            </LocalizationProvider>   

                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <Controller
                                    control={control}
                                    name="endTime"
                                    defaultValue=""
                                    render={({ field }) => (
                                      <TimePicker
                                        {...field}
                                        closeOnSelect
                                        renderInput={(params) => (
                                          <TextField
                                            {...params}
                                            inputProps={{
                                              inputMode: "numeric",
                                              pattern: "[0-9]*",
                                            }}
                                            size="small"
                                          />
                                        )}
                                      />
                                    )}
                                  />
                                </LocalizationProvider> 
                          </Box>
                        </Box>
                      </Box>
                      {/* Chỉnh sửa màu sắc */}
                      <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
                          <Typography>Chọn màu</Typography>
                          <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                          }}
                        >
                          {ColorCalendar?.map((colorItem) => (
                            <ThemeProvider theme={theme}>
                              <Button
                                className={`${styles.buttn_label} ${isActive===colorItem.id?styles.isActive:''}`}
                                onClick={() => 
                                {setSelectColor(colorItem.color)
                                  handleSetActive(colorItem.id)
                                }}
                                style={{
                                  minWdith: "50px",
                                  minHeight: "30px",
                                  backgroundColor: colorItem.color,
                                }}
                                >
                                </Button>
                            </ThemeProvider>
                          ))}
                        </Box>
                      </Box>
                 </Box>
                  <Box sx={{display:'flex',gap:'10px',justifyContent:'flex-end'}}>
                      <Button 
                        type='submit'
                        variant='contained'
                         >Lưu lại</Button>
                      <Button variant='outlined' onClick={closeEditModal}>Hủy</Button>
                </Box>
              </form>
              
            </>
          )}
          {isDeleteConfirmationOpen && (
            <>
              <Typography variant="h6" sx={{textAlign:'center',fontWeight:'600',color:'red',marginBottom:'10px'}} >XÁC NHẬN XÓA SỰ KIỆN</Typography>
              <Typography sx={{textAlign:'center',marginBottom:'10px',fontWeight:'550'}}>Bạn chắc chắn muốn xóa sự kiện này?</Typography>
              <Box sx={{display:'flex',gap:'10px',justifyContent:'flex-end'}}>
                <Button variant='contained' onClick={deleteEvent}>Xóa</Button>
                <Button variant='outlined' onClick={closeEditModal}>Hủy</Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </DndProvider>
  );
};

export default ScheduleContainer;