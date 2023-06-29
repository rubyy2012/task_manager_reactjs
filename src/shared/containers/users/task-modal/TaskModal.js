import { Label } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import avatar from "../../../../assets/images/avatar.jpg";
import Checkbox from "@mui/material/Checkbox";
import { VscEdit } from "react-icons/vsc";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
// import dayjs from "dayjs";

import { ThemeProvider, createTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import SubjectIcon from "@mui/icons-material/Subject";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { TiFlowChildren } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./styles.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdLabelOutline, MdOutlineTitle } from "react-icons/md";
import { useDispatch } from "react-redux";
import TaskAction from "../../../../redux/tasks/TaskAction";
import WorkspaceAction from "../../../../redux/workspaces/WorkspaceAction";
import { useParams } from "react-router";
import ListColorApi from "../../../../api/ListColor.js";
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
import striptags from "striptags";

import ProgressBar from "@ramonak/react-progress-bar";
import { toast } from "react-toastify";
import signalRActions from "../../../../redux/signalR/signalRActions";
// import { ProgressBar, Toast } from "react-toastify/dist/components";
// import { toast } from "react-toastify";
const TaskModal = ({ open, setOpen, handleOpen, handleClose, taskId }) => {
  const { id } = useParams();
  const theme = createTheme();
  const { control, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const [selectColor, setSelectColor] = useState("");
  const userInfor = JSON.parse(localStorage.getItem("userInfor")) || [];
  //handle open modal
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  //open add member
  const [openAddMember, setOpennAddMember] = useState(false);
  const handleOpenAddMember = () => setOpennAddMember(true);
  const handleCloseAddMember = () => setOpennAddMember(false);
  //open add label
  const [openAddLabel, setOpennAddLabel] = useState(false);
  const handleOpenAddLabel = () => setOpennAddLabel(true);
  const handleCloseAddLabel = () => setOpennAddLabel(false);
  //open create label
  const [openCreateLabel, setOpennCreateLabel] = useState(false);
  const handleOpenCreateLabel = () => setOpennCreateLabel(true);
  const handleCloseCreateLabel = () => setOpennCreateLabel(false);
  //
  const [openDescription, setOpenDescription] = useState(false);
  const handleOpenDescription = () => setOpenDescription(true);
  const handleCloseDescription = () => setOpenDescription(false);

  //OPEN CREATE SUBTASK
  const [openCreateSubtask, setOpenCreateSubtask] = useState(false);
  const handleOpenCreateSubtask = () => setOpenCreateSubtask(true);
  const handleCloseCreateSubtask = () => setOpenCreateSubtask(false);

  //OPEN EDIT SUBTASK
  const [openEditSubtask, setOpenEditSubtask] = useState(false);
  const handleOpenEditSubtask = () => setOpenEditSubtask(true);
  const handleCloseEditSubtask = () => setOpenEditSubtask(false);

  //OPEN CALENDAR
  const [openCalendar, setOpenCalendar] = useState(false);
  const handleOpenCalendar = () => setOpenCalendar(true);
  const handleCloseCalendar = () => setOpenCalendar(false);

  //OPEN EXTEND DUEDATE
  const [openExtendDueDate, setOpenExtendDueDate] = useState(false);
  const handleOpenExtendDueDate = () => setOpenExtendDueDate(true);
  const handleCloseExtendDueDate = () => setOpenExtendDueDate(false);

  // OPEN VIEW REQUEST DUEDATE

  const [openViewRequestDueDate, setOpenViewRequestDueDate] = useState(false);
  const handleOpenViewRequestDueDate = () => setOpenViewRequestDueDate(true);
  const handleCloseViewRequestDueDate = () => setOpenViewRequestDueDate(false);
  //OPEN CREATE COMMENT
  const [openComment, setOpenComment] = useState(false);
  const handleOpenComment = () => setOpenComment(true);
  const handleCloseComment = () => setOpenComment(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: 24,
    p: 4,
    borderRadius: "3px",
    maxHeight: "calc(100vh - 64px)", // Adjust the height accordingly
    overflowY: "auto",
  };
  const boxAdd = {
    ...style,
    maxWidth: "fit-content",
    p: 1,
    bgcolo: "#282e33",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  const boxAddCalendar = {
    ...style,
    padding: " 30px 20px",
    minWdith: '400px',
    width: "550px",
    gap: "20px",
  };
  const boxAddSubtask = {
    ...style,
    maxWidth: "fit-content",
    p: 1,
    bgcolo: "#282e33",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  //handle request server
  //GET DETAIL TASK.
  // listMembersWithTask

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isSelectedMem, setSelectedMem] = useState(false);
  const [selected, setSeleted] = useState(false);
  const [checkedLabels, setCheckedLabels] = useState([]);
  const [checkedSubtasks, setCheckedSubtasks] = useState([]);
  const [isSubtaskValid, setIsSubtaskValid] = useState(false);
  const [isActive,setActive] = useState(null);

  const { detailProject } = useSelector((state) => ({
    detailProject: state.workspace.detailProject,
  }));
  // const myRole = detailProject?.data?.myRole;
  const { myRole } = useSelector((state) => ({
    myRole: state.workspace.myRole,
  }));
  const { listMembers } = useSelector((state) => ({
    listMembers: state.workspace.listMembers,
  }));
  const { listLabelsWorkspace } = useSelector((state) => ({
    listLabelsWorkspace: state.workspace.listLabelsWorkspace,
  }));
  const { detailTask } = useSelector((state) => ({
    detailTask: state.task.detailTask,
  }));
  // Get Task item detail
  useEffect(() => {
    dispatch({
      type: TaskAction.REQUEST_GET_DETAIL_TASK,
      payload: {
        data: {
          taskId: parseInt(taskId),
        },
      },
    });
    dispatch({
      type: WorkspaceAction.REQUEST_GET_LIST_LABELS_WORKSPACE,
      payload: {
        workspaceId: parseInt(id),
      },
    });
  }, [taskId]);

  useEffect(() => {
    if (detailTask?.data?.dueDate) {
      const dateTime = moment(detailTask?.data?.dueDate);
      const dateFormated = dateTime.format("DD/MM/YYYY");
      const timeFormated = dateTime.format("HH:mm");
      setValue("dueDate", dateFormated);
      setValue("dueTime", timeFormated);
    }
    if (
      detailTask?.data?.priority === 0 ||
      detailTask?.data?.priority === 1 ||
      detailTask?.data?.priority === 2
    ) {
      setValue("priority", detailTask?.data?.priority.toString());
    }
    setSelectedMembers(
      detailTask?.data?.members);
    setCheckedLabels(detailTask?.data?.labels);
    setSeleted(false);
    setIsSubtaskValid(true);
    setCheckedSubtasks(
      detailTask?.data?.subtasks?.filter((item) => item.status === true)
    );
  }, [detailTask?.data]);

  const handleMemberSelection = (memberId, members) => {
    console.log("myRole", myRole);
    if(myRole === 2)
    {
      toast.warn('Bạn không có quyền gán thành viên!')
    }
    else{
      setSeleted(true);
      const selectedMember = members.find((member) => member.userId === memberId);
      const isSelected = selectedMembers.some((member) => member.userId === memberId);
      if (isSelected) {
        setSelectedMem(true);
        setSelectedMembers((prevSelectedMembers) =>
          prevSelectedMembers.filter((member) => member.userId !== memberId)
        );
      } else {
        setSelectedMem(false);
        setSelectedMembers((prevSelectedMembers) => [
          ...prevSelectedMembers,
          selectedMember,
        ]);
      }
    }
  };

  useEffect(() => {
    if (selected) {
      dispatch({
        type: TaskAction.REQUEST_ASSIGN_TASK_MEMBERS,
        payload: {
          workspaceId: parseInt(id),
          taskId: taskId,
          data: selectedMembers.map((member) => {
            return {
              userId: member.userId,
              taskItemId: taskId,
            };
          }),
          callback: {
            toast : (message) => toast(message)
          }
        },
      });
    }
  }, [selectedMembers]);

  const onAddComment = (data) => {
    const { content } = data;
    dispatch({
      type: TaskAction.REQUEST_POST_COMMENT,
      payload: {
        data: {
          content: striptags(content),
          userId: userInfor?.account?.id,
          taskItemId: parseInt(taskId),
        },
        workspaceId: parseInt(id),
        taskId: parseInt(taskId),
        callback: {
          handleCloseComment: () => handleCloseComment(),
        },
      },
    });
  };
  const onCreateSubtask = (data) => {
    const { subtask } = data;
    dispatch({
      type: TaskAction.REQUEST_CREATE_SUBTASK,
      payload: {
        data: {
          name: subtask,
          taskItemId: parseInt(taskId),
        },
        workspaceId: parseInt(id),
        callback: {
          handleCloseCreateSubtask: () => handleCloseCreateSubtask(),
        },
      },
    });
  };

  const [idSubtask, setIdSubtask] = useState();
  const onEditSubtask = (data) => {
    const { subtask } = data;
    dispatch({
      type: TaskAction.REQUEST_EDIT_SUBTASK,
      payload: {
        data: {
          update_data: [{ op: "replace", path: "/name", value: subtask }],
          workspaceId: parseInt(id),
          taskId: parseInt(taskId),
          id: parseInt(idSubtask),
          callback: {
            handleCloseEditSubtask: () => handleCloseEditSubtask(),
          },
        },
      },
    });
  };
  const handleDeleteComment = (commentId) => {
    dispatch({
      type: TaskAction.REQUEST_DELETE_COMMENT_TASK,
      payload: {
        data: {
          commentId: parseInt(commentId),
          taskId: parseInt(taskId),
          workspaceId: parseInt(id)
        },
      },
    });
  };
  const handleDeleteSubtask = (subtaskId) => {
    dispatch({
      type: TaskAction.REQUEST_DELETE_SUBTASK,
      payload: {
        data: {
          subtaskId: parseInt(subtaskId),
          workspaceId: parseInt(id),
          taskId: parseInt(taskId),
          callback: {
            toast: (message) => toast(message),
          },
        },
      },
    });
  };
  const onAddDescription = (data) => {
    const { description } = data;
    dispatch({
      type: TaskAction.REQUEST_EDIT_TASK,
      payload: {
        data: {
          update_data: [
            {
              op: "replace",
              path: "/description",
              value: striptags(description),
            },
          ],
          workspaceId: parseInt(id),
          taskId: parseInt(taskId),
          callback: {
            handleCloseDescription: () => handleCloseDescription(),
          },
        },
      },
    });
  };
  const onCreateLabel = (data) => {
    const { name } = data;
    const dataSend = {
      name,
      color: selectColor,
      workspaceId: parseInt(id),
    };
    dispatch({
      type: TaskAction.REQUEST_CREATE_NEW_LABEL,
      payload: {
        data: dataSend,
        workspaceId: parseInt(id),
        taskId: parseInt(taskId),
        callback: {
          // toast: (message) => toast(message),
          handleCloseCreateLabel: () => handleCloseCreateLabel(),
        },
      },
    });
  };

  //handle selected subtask
  const handleChexboxSubtask = (subtask) => {
    // if (checkedSubtasks?.some((item) => item.id === subtask.id)) {
    //   setCheckedSubtasks(
    //     checkedSubtasks.filter((item) => item.id !== subtask.id)
    //   );
    // } else {
    //   setCheckedSubtasks([...checkedSubtasks, subtask]);
    // }

    dispatch({
      type: TaskAction.REQUEST_EDIT_SUBTASK,
      payload: {
        data: {
          update_data: [
            { op: "replace", path: "/status", value: !subtask.status },
          ],
          workspaceId: parseInt(id),
          taskId: parseInt(taskId),
          id: parseInt(subtask.id),
        },
      },
    });
  };

  //handle selected label
  const handleCheckboxChange = (label) => {
    setSeleted(true);
    if (checkedLabels.some((item) => item.id === label.id)) {
      setCheckedLabels(checkedLabels.filter((item) => item.id !== label.id));
    } else {
      setCheckedLabels([...checkedLabels, label]);
    }
  };
  useEffect(() => {
    if (selected) {
      dispatch({
        type: TaskAction.REQUEST_ADD_LABEL,
        payload: {
          data: checkedLabels,
          taskId: parseInt(taskId),
          workspaceId: parseInt(id),
        },
      });
    }
  }, [checkedLabels]);

  const onRequestExtend = (data) => {
    // console.log("request due date", data);
    const { dueDate, dueTime } = data;
    const dateString = new Date(dueDate.$d).toString();
    const timeString = new Date(dueTime.$d).toString();
    const partsTime = timeString.split(" ")[4];
    const formattedDate = moment(dateString).format("YYYY-MM-DD");
    const datetime = `${formattedDate} ${partsTime}`;

    const dataSend = {
      extendDate: datetime,
      taskItemId: taskId,
    };
    dispatch({
      type: TaskAction.REQUEST_EXTEND_DUE_DATE,
      payload: {
        data: dataSend,
        workspaceId: parseInt(id),
        taskId,
        callback: {
          handleCloseExtendDueDate: () => handleCloseExtendDueDate(),
          toast: (message) => toast(message),
        },
      },
    });
  };
  const dateTime = moment(detailTask?.data?.dueDate);
  const dateFormated = dateTime.format("DD/MM/YYYY");
  const timeFormated = dateTime.format("HH:mm");
  const task_percent =
    detailTask?.data?.subtaskQuantity > 0 &&
    parseInt(
      (detailTask?.data?.subtaskCompleted * 100) /
        detailTask?.data?.subtaskQuantity
    );
  const handleSetActive = (item) => {
    // const activeBtn = ListColorApi?.map(color=>color.id === item.id)
    setActive(item.id)
  }

  const handleAcceptExtendDate = (m) => {
      // console.log('user',m.userId)
      dispatch({
        type:TaskAction.REQUEST_ACCEPT_EXTEND_DATE,
        payload: {
          memberTaskId: m.id,
          workspaceId: parseInt(id),
          taskId: taskId,
          callback : {
            toast : (message) => toast(message)
          }
        }
      })
  }

  const handleRejectExtendDate = (m) => {
    dispatch({
      type:TaskAction.REQUEST_REJECT_EXTEND_DATE,
      payload: {
        memberTaskId: m.id,
        workspaceId: parseInt(id),
        taskId: taskId,
        callback : {
          toast : (message) => toast(message)
        }
      }
    })
  }

  const handleDeleteLabel = (labelId) => {
    console.log('label id',labelId);
    dispatch({
      type: TaskAction.REQUEST_DELETE_LABEL,
      payload: {
        data: {
          taskId,
          id: parseInt(labelId),
          callback: {
            toast: (message) => toast(message)
          }
        }
      }
    })
  }


   // SIGNALR
   const signalRStore = useSelector((state) => ({
    signalRStore: state.signalR.signalRStore,
  }));

  useEffect(() => {
    if (signalRStore.signalRStore.isConnected) {
      signalRStore.signalRStore.connection.invoke("ConnectToTaskItem", parseInt(taskId) )
      .catch((e)=>{console.log(e)});
      
    //   signalRStore.signalRStore.connection.on("SendMessageAsync", (res) => {
    //     console.log("Join Workspace", res);
    //   });

      signalRStore.signalRStore.connection.on("TaskItemAsync", (res) => {
        console.log("TaskItemAsync", res);
        dispatch({
          type:TaskAction.SUCCESS_GET_DETAIL_TASK,
          payload: {
            data: {
              taskItem: res?.data?.taskItem    
            }
          }
        })
      })
    }
    return () => {
      if(signalRStore.signalRStore.connection){
        signalRStore.signalRStore.connection.invoke("DisconnectToTaskItem", parseInt(taskId) )
        .catch(
          (e)=>{
            console.log(e)
          });
      }
    };
  }, [signalRStore.signalRStore.isConnected]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            Chi tiết nhiệm vụ
          </Typography>
          <IoCloseSharp sx={{ padding: "4px" }} onClick={handleClose} />
        </Box>
        {/* TÊN NHIỆM VỤ */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <MdOutlineTitle />
            <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
              Tên nhiệm vụ
            </Typography>
          </Box>
          <TextField
            fullWidth
            sx="small"
            placeholder="Nhập tên nhiệm vụ"
            value={detailTask?.data?.title || ""}
          />
        </Box>

        {/* Đánh giá tiến độ */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
            Tiến độ hoàn thành
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography sx={{ textAlign: "right" }}>{task_percent}%</Typography>
            <ProgressBar
              isLabelVisible={false}
              height="6px"
              bgColor={detailTask?.data?.isComplete ? "green" : "orange"}
              completed={task_percent && task_percent}
            />
          </Box>
        </Box>
        {/* Độ ưu tiên */}
        <Box
          sx={{ display: "flex", flexDirection: "column", columnGap: "10px" }}
        >
          <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <PriorityHighIcon />
            <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
              Độ ưu tiên
            </Typography>
          </Box>
          <Box>
            <Controller
              control={control}
              name="priority"
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  onChange={(e) => {
                    // console.log("taskId", taskId);
                    // console.log("taskId", parseInt(id));
                    field.onChange(e.target.value);
                    dispatch({
                      type: TaskAction.REQUEST_EDIT_TASK,
                      payload: {
                        data: {
                          update_data: [
                            {
                              op: "replace",
                              path: "/priority",
                              value: parseInt(e.target.value),
                            },
                          ],
                          workspaceId: parseInt(id),
                          taskId: parseInt(taskId),
                          callback: {},
                        },
                      },
                    });
                  }}
                  size="small"
                  sx={{ minWidth: "200px" }}
                >
                  <MenuItem value="0">Thấp</MenuItem>
                  <MenuItem value="1">Trung bình</MenuItem>
                  <MenuItem value="2">Cao</MenuItem>
                </Select>
              )}
            />
          </Box>
        </Box>

        <Box style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          {/* Thành viên */}
          <Box
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <HiOutlineUserGroup />
              <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                Thành viên
              </Typography>
            </Box>
            <Box style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              {detailTask?.data?.members?.map((member) => (
                <Avatar
                  style={{ width: 30, height: 30 }}
                  src={member.avatar || avatar}
                />
              ))}
              <Button onClick={handleOpenAddMember} style={{ width: "40px" }}>
                <AddIcon />
              </Button>
              <Modal open={openAddMember} onClose={handleCloseAddMember}>
                <Box sx={boxAdd}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 550,
                      }}
                    >
                      Thành viên
                    </Typography>
                    <IoCloseSharp
                      sx={{ padding: "4px", cursor: "pointer" }}
                      onClick={handleCloseAddMember}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography style={{ fontSize: "16px" }}>
                      Danh sách thành viên
                    </Typography>
                    {listMembers?.data?.map((member) => (
                      <Box
                        onClick={() =>
                          handleMemberSelection(member.userId, listMembers.data)
                        }
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "20px",
                          cursor: "pointer",
                          color: "#b6c2cf",
                          borderRadius: "3px",
                          minWidth: "420px",
                          backgroundColor: "#3d474f",
                          padding: " 5px 8px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Avatar src={member.avatar || avatar} />
                          <Typography>
                            {member.fullName} ({member.email})
                          </Typography>
                        </Box>
                        <Box>
                          {selectedMembers?.some(
                            (item) => item.userId === member.userId
                          ) && <CheckIcon />}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Box>
          {/* Box labels */}
          <Box
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <MdLabelOutline />
              <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                Nhãn dán
              </Typography>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              {detailTask?.data?.labels?.map((label) => (
                <Button
                  key={label.id}
                  style={{
                    padding: "4px 8px",
                    maxWidth: "fit-content",
                    backgroundColor: label.color,
                    color: "#ffff",
                    textTransform: "none",
                  }}
                >
                  {label?.name}
                </Button>
              ))}
              <Button onClick={handleOpenAddLabel}>
                <AddIcon />
              </Button>
            </Box>
          </Box>

          <Modal open={openAddLabel} onClose={handleCloseAddLabel}>
            <Box sx={boxAdd}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Nhãn dán
                </Typography>
                <IoCloseSharp
                  sx={{ padding: "4px", cursor: "pointer" }}
                  onClick={handleCloseAddLabel}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <Typography style={{ fontSize: "14px" }}>
                  Nhãn sẵn có
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "5px",
                    cursor: "pointer",
                    flexDirection: "column",
                  }}
                >
                  {/* LABEL ITEM */}
                  {listLabelsWorkspace?.data?
                  listLabelsWorkspace.data.map((label) => (
                    <Box
                      key={label.id}
                      sx={{
                        display: "flex",
                        gap: "10px",
                        cursor: "pointer",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        checked={checkedLabels.some(
                          (item) => item.id === label.id
                        )}
                        onChange={() => handleCheckboxChange(label)}
                      />
                      <Button
                        onClick={() => handleCheckboxChange(label)}
                        style={{
                          padding: "4px",
                          minWidth: "320px",
                          backgroundColor: label?.color,
                          color: "#ffff",
                          textTransform: "none",
                        }}
                      >
                        {label?.name}
                      </Button>
                      <VscEdit/>
                      <AiOutlineDelete onClick={()=>handleDeleteLabel(label.id)}/>
                    </Box>
                  )):
                    <Typography sx={{fontSize:'16px',color:'#040404',textAlign:'left'}}>Bạn chưa có nhãn nào. Hãy tạo nhãn mới!</Typography>}
                </Box>
                <Button onClick={handleOpenCreateLabel} sx={{ width: "100%" }}>
                  Tạo nhãn mới
                </Button>
                {/* BOX CREATE CREATE LABEL */}
                <Modal open={openCreateLabel} onClose={handleCloseCreateLabel}>
                  <Box sx={boxAdd}>
                    <Box
                      sx={{
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: 550,
                        }}
                      >
                        Tạo nhãn dán
                      </Typography>
                      <IoCloseSharp
                        sx={{ padding: "4px", cursor: "pointer" }}
                        onClick={handleCloseAddLabel}
                      />
                    </Box>
                    <Typography>Tên nhãn</Typography>
                    <form onSubmit={handleSubmit(onCreateLabel)}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Controller
                          control={control}
                          name="name"
                          defaultValue=""
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              style={{ minWidth: "400px" }}
                              margin="normal"
                              size="small"
                              id="outlined-required"
                              placeholder="Nhập tên nhãn dán"
                            />
                          )}
                        />
                        <Typography sx={{ margin: "10px 0" }}>
                          Chọn 1 màu
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                            maxWidth: "400px",
                            backgroundColor:'#eeeeee',
                            justifyContent: "space-around",
                          }}
                        >
                          {ListColorApi?.map((colorItem) => (
                            <ThemeProvider theme={theme}>
                              <Button
                                className={`${styles.buttn_label} ${isActive===colorItem.id?styles.isActive:''}`}
                                onClick={() => 
                                {setSelectColor(colorItem.color)
                                  handleSetActive(colorItem)
                                }}
                                style={{
                                  minWdith: "50px",
                                  minHeight: "30px",
                                  backgroundColor: colorItem.color,
                                }}
                              />
                            </ThemeProvider>
                          ))}
                        </Box>
                        {/* Button remove color */}
                        <Box
                          sx={{
                            display: "flex",
                            gap: "20px",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button type="submit" variant="outlined">
                            Tạo nhãn
                          </Button>
                        </Box>
                      </Box>
                    </form>
                  </Box>
                </Modal>
              </Box>
            </Box>
          </Modal>
        </Box>
        {/* NGÀY KẾT THÚC */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <BsCalendar2Date />
            <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
              Ngày kết thúc
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            {/* Button edit date of creator */}
            <Button
              variant="contained"
              disabled={myRole === 2}
              onClick={handleOpenCalendar}
            >
              {`${dateFormated} lúc ${timeFormated}`}
            </Button>
            {openCalendar && (
              <Modal open={openCalendar} onClose={handleCloseCalendar}>
                <Box sx={boxAddCalendar}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                      Chỉnh sửa hạn ngày
                    </Typography>
                    <IoCloseSharp
                      onClick={handleCloseCalendar}
                      sx={{ padding: "5px", cursor: "pointer" }}
                    />
                  </Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Controller
                      control={control}
                      name="dueDate"
                      defaultValue={dateFormated}
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
                      name="dueTime"
                      defaultValue=""
                      render={({ field }) => (
                        <TimePicker
                          {...field}
                          closeOnSelect
                          format="HH:mm"
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
                  <Button style={{ textTransform: "none" }} variant="contained">
                    Lưu lại
                  </Button>
                </Box>
              </Modal>
            )}

            {/* BUTTON REQUEST EXTEND DUEDATE */}
            {detailTask?.data?.members?.map(
              (m) =>
                myRole === 2 && m.userId === userInfor?.account?.id 
                &&(m.requested === true ? (
                  <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                    {`Bạn đã yêu cầu gia hạn vào ${moment(m.extendDate).format(
                      "DD/MM/yyyy HH:mm"
                    )}`}
                  </Typography>
                ) : (
                  <Button variant="contained" onClick={handleOpenExtendDueDate}>
                    Yêu cầu gia hạn
                  </Button>
                ))
            )}

            {openExtendDueDate && (
              <Modal
                open={openExtendDueDate}
                onClose={handleCloseExtendDueDate}
              >
                <Box sx={boxAddCalendar}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                      Yêu cầu gia hạn ngày
                    </Typography>
                    <IoCloseSharp
                      onClick={handleCloseExtendDueDate}
                      sx={{ padding: "5px", cursor: "pointer" }}
                    />
                  </Box>
                  <form
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    onSubmit={handleSubmit(onRequestExtend)}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Controller
                        control={control}
                        name="dueDate"
                        defaultValue={dateFormated}
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
                        name="dueTime"
                        defaultValue=""
                        render={({ field }) => (
                          <TimePicker
                            {...field}
                            closeOnSelect
                            format="HH:mm"
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
                    <Button
                      type="submit"
                      style={{ textTransform: "none" }}
                      variant="contained"
                    >
                      Yêu cầu
                    </Button>
                  </form>
                </Box>
              </Modal>
            )}

            {/* BUTTON VIEW MEMBER EXTEND DUEDATE */}
            {myRole !== 2 && (
              <Button variant="outlined" onClick={handleOpenViewRequestDueDate}>
                Xem yêu cầu gia hạn
              </Button>
            )}
            {openViewRequestDueDate && (
              <Modal
                open={openViewRequestDueDate}
                onClose={handleCloseViewRequestDueDate}
              >
                <Box sx={boxAddCalendar}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                      Danh sách yêu cầu ngày gia hạn
                    </Typography>
                    <IoCloseSharp
                      onClick={handleCloseViewRequestDueDate}
                      sx={{ padding: "5px", cursor: "pointer" }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* item */}
                    {detailTask?.data?.members.every(m => m.requested === false)?
                      <Typography sx={{color:'#040404',fontSize:'16px',textAlign:'left'}}>Hiện tại chưa có yêu cầu nào!</Typography>
                    :detailTask.data.members.map(
                      (m) =>
                        m.requested === true && (
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "10px",
                              alignItems: "center",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          >
                            <Typography sx={{fontWeight:'600', textAlign:'left'}}>{m.fullName}</Typography>
                            <Typography sx={{fontWeight:'550', color:'red'}}>{moment(m.extendDate).format("DD/MM/yyyy HH:mm")}</Typography>
                            <Box
                              sx={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Button
                                style={{ textTransform: "none" }}
                                variant="contained"
                                onClick = {()=>handleAcceptExtendDate(m)}
                              >
                                Chấp nhận
                              </Button>
                              <Button
                                style={{ textTransform: "none" }}
                                variant="outlined"
                                onClick = {()=>handleRejectExtendDate(m)}
                              >
                                Từ chối
                              </Button>
                            </Box>
                          </Box>
                        )
                    )}
                  </Box>
                </Box>
              </Modal>
            )}
          </Box>
        </Box>

        {/* MÔ TẢ */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <SubjectIcon />
            <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
              {" "}
              Mô tả
            </Typography>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Button
              sx={{ textTransform: "none" }}
              onClick={handleOpenDescription}
            >
              {detailTask?.data?.description || "Bấm vào đây để thêm mô tả!"}
            </Button>
            {openDescription && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  zIndex: 10,
                  backgroundColor: "#fafafa",
                }}
              >
                <form onSubmit={handleSubmit(onAddDescription)}>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <ReactQuill
                        {...field}
                        sx={{ width: "800px", borderRadius: "4px" }}
                      />
                    )}
                  />
                  <Button
                    type="submit"
                    // onClick={handleCloseDescription}
                    sx={{ width: "fit-content" }}
                  >
                    Lưu
                  </Button>
                </form>
              </Box>
            )}
          </Box>
        </Box>

        {/* NHIỆM VỤ CON */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <TiFlowChildren />
            <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
              Nhiệm vụ con
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Button
              onClick={handleOpenCreateSubtask}
              sx={{
                textTransform: "none",
                maxWidth: "fit-content",
                padding: "0 5px",
              }}
            >
              Bấm vào đây để thêm nhiệm vụ!
            </Button>
            <Modal open={openCreateSubtask} onClose={handleCloseCreateSubtask}>
              <Box sx={boxAddSubtask}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: 550 }}>
                    Thêm nhiệm vụ con
                  </Typography>
                  <IoCloseSharp
                    onClick={handleCloseCreateSubtask}
                    sx={{ padding: "5px", cursor: "pointer" }}
                  />
                </Box>
                <form onSubmit={handleSubmit(onCreateSubtask)}>
                  <Controller
                    control={control}
                    name="subtask"
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        style={{ minWidth: "400px" }}
                        margin="normal"
                        size="small"
                        id="outlined-required"
                        placeholder="Nhập tên nhãn dán"
                      />
                    )}
                  />
                  <Button type="submit" sx={{ textTransform: "none" }}>
                    Lưu
                  </Button>
                </form>
              </Box>
            </Modal>
          </Box>

          {/* Danh sách nhiệm vụ con */}

          <Box
            sx={{
              display: "flex",
              gap: "5px",
              cursor: "pointer",
              flexDirection: "column",
            }}
          >
            {/* SUBSTASK ITEM */}
            {detailTask?.data?.subtasks?.map((subtask) => (
              <Box
                key={subtask.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  // gap: "10px",
                  cursor: "pointer",
                }}
              >
                <Checkbox
                  name="subtask_status"
                  // checked={checkedSubtasks?.some(
                  //   (item) => item.id === subtask.id
                  // )}
                  checked = {subtask.status}
                  onChange={() => handleChexboxSubtask(subtask)}
                />
                <Button
                  onClick={() => handleChexboxSubtask(subtask)}
                  variant="outlined"
                  style={{
                    padding: "4px",
                    flex: "auto",
                    textTransform: "none",
                  }}
                >
                  {subtask?.name}
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <VscEdit
                    onClick={() => {
                      handleOpenEditSubtask();
                      setIdSubtask(subtask.id);
                    }}
                    className={styles.icon}
                  />
                  <AiOutlineDelete
                    onClick={() => handleDeleteSubtask(subtask.id)}
                    className={styles.icon}
                  />
                  <Modal
                    open={openEditSubtask}
                    onClose={handleCloseEditSubtask}
                  >
                    <Box sx={boxAddSubtask}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "18px", fontWeight: 550 }}>
                          Chỉnh sửa tên nhiệm vụ con
                        </Typography>
                        <IoCloseSharp
                          onClick={handleCloseEditSubtask}
                          sx={{ padding: "5px", cursor: "pointer" }}
                        />
                      </Box>
                      <form onSubmit={handleSubmit(onEditSubtask)}>
                        <Controller
                          control={control}
                          name="subtask"
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              style={{ minWidth: "400px" }}
                              margin="normal"
                              size="small"
                              placeholder="Nhập tên mới"
                              id="outlined-required"
                            />
                          )}
                        />
                        <Button type="submit" sx={{ textTransform: "none" }}>
                          Lưu
                        </Button>
                      </form>
                    </Box>
                  </Modal>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bình luận */}
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
          <BiCommentDetail />
          <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
            Bình luận
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
          <Avatar src={avatar} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Button onClick={handleOpenComment}>Thêm bình luận</Button>
            {openComment && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: "10px",
                  backgroundColor: "#fafafa",
                  width: "700px",
                  transition: "5s",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <form onSubmit={handleSubmit(onAddComment)}>
                  <Controller
                    name="content"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <ReactQuill
                        {...field}
                        sx={{ width: "800px", borderRadius: "4px" }}
                      />
                    )}
                  />
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: "fit-content" }}
                    >
                      Lưu bình luận
                    </Button>
                    <Button onClick={handleCloseComment}>Hủy</Button>
                  </Box>
                </form>
              </Box>
            )}
          </Box>
        </Box>
        {/* DANH SÁCH BÌNH LUẬN */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {detailTask?.data?.comments?.map((comment) => (
            <Box
              key={comment.id}
              sx={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", borderRadius: "4px", gap: "20px" }}>
                <Avatar
                  src={comment?.avatar || avatar}
                  sx={{ width: "28px", height: "28px" }}
                />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Typography sx={{ fontWeight: 550 }}>
                      {comment?.fullName}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "13px", color: "#333", lineHeight: 0 }}
                    >
                      {`${moment(comment.updateAt).format(
                        "DD/MM/YYYY"
                      )} - ${moment(comment.updateAt).format("HH:mm")}`}
                      {/* 27-3-2023 */}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px", marginLeft: "20px" }}>
                    {comment?.content}
                  </Typography>
                </Box>
              </Box>
              {/* OPTION EDIT OR DELETE */}
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <VscEdit className={styles.icon} />
                <AiOutlineDelete
                  onClick={() => handleDeleteComment(comment.id)}
                  className={styles.icon}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default TaskModal;
