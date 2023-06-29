import axios from "axios";
import { toast } from "react-toastify";


const TaskFactory = {
    getToken : ()=>{
        const data_local = JSON.parse(localStorage.getItem('userInfor'));
        const token = data_local?.token;
        return token;
    },
    postComment: async (data,workspaceId) => {
        const token = TaskFactory.getToken();
        return await axios.post(`https://localhost:7070/api/TaskItem/Comment`,
        data,
        {
            params: 
            {
                workspaceId: workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    deleteComment: async(commentId) => {
        const token = TaskFactory.getToken();
        return await axios.delete(`https://localhost:7070/api/TaskItem/Comment/${commentId}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    createNewTask: async (data,workspaceId) => {
        const token = TaskFactory.getToken();

        return await axios.post(`https://localhost:7070/api/TaskItem`,
        data,
        {
            params: 
            {
                workspaceId: workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    createNewSubtask:  async (data,workspaceId) => {
        const token = TaskFactory.getToken();

        return await axios.post(`https://localhost:7070/api/Subtask`,
        data,
        {
            params: 
            {
                workspaceId: workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    
    editSubtask: async (update_data,id,workspaceId) => {
        const token = TaskFactory.getToken();

        return await axios.patch(`https://localhost:7070/api/Subtask/${id}`,
        update_data,
        {
            params: 
            {
                workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    editTask: async (update_data,taskId,workspaceId) => {
        const token = TaskFactory.getToken();

        return await axios.patch(`https://localhost:7070/api/TaskItem/${taskId}`,
        update_data,
        {
            params: 
            {
                workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    moveTask : async (data,taskId,workspaceId) => {
        const token = TaskFactory.getToken();
        return await axios.post(`https://localhost:7070/api/TaskItem/${taskId}/MoveTask`,
        data,
        {
            params: 
            {
                workspaceId: workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    deleteTask : async (id,workspaceId) => {
        const token = TaskFactory.getToken();

        return await axios.delete(`https://localhost:7070/api/TaskItem/${id}`,
        {
            params: 
            {
                workspaceId: workspaceId,
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    detailTask : async (taskId) => {
        const token = TaskFactory.getToken();

        return await axios.get(`https://localhost:7070/api/TaskItem/${taskId}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    assignTaskMember: async (data,workspaceId,taskId) => {
        const token = TaskFactory.getToken();

        return await axios.post(`https://localhost:7070/api/TaskItem/${taskId}/AssignMember`,
        data,
        {
            params: 
            {
                workspaceId: workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    createNewLabel: async (data) => {
        const token = TaskFactory.getToken();

        return await axios.post(`https://localhost:7070/api/Label`,
        data,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    addLabel: async (data,taskId,workspaceId) => {
        const token = TaskFactory.getToken();
        return await axios.post(`https://localhost:7070/api/TaskItem/${taskId}/AddLabels`,
        data,
        {
            params: 
            {
                workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },

    deleteLabel: async (id) => {
        const token = TaskFactory.getToken();
        return await axios.delete(`https://localhost:7070/api/Label/${id}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    deleteSubtask : async (workspaceId,subtaskId) => {
        const token = TaskFactory.getToken();

        return await axios.delete(`https://localhost:7070/api/Subtask/${subtaskId}`,
        {
            params: 
            {
                workspaceId,
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    getTasksByMember: async (workspaceId,memberId) => {
        const token = TaskFactory.getToken();

        return await axios.get(`https://localhost:7070/api/TaskItem/ByMember`,
        { 
            params: 
            {
                workspaceId,
                memberId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    extendDueDateTask :  async (data,workspaceId) => {
        const token = TaskFactory.getToken();
        return await axios.post(`https://localhost:7070/api/TaskItem/ExtendDueDate`,
        data,
        {
            params: 
            {
                workspaceId: workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    acceptExtendDueDateTask:  async (memberTaskId,workspaceId) => {
        const token = TaskFactory.getToken();
        return await axios.post(`https://localhost:7070/api/TaskItem/AcceptDueDate/${memberTaskId}`,null,
        {
            params: 
            {
                workspaceId: workspaceId,
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    rejectExtendDueDateTask: async (memberTaskId,workspaceId) => {
        const token = TaskFactory.getToken();
        return await axios.post(`https://localhost:7070/api/TaskItem/RejectDueDate/${memberTaskId}`,null,
        {
            params: 
            {
                workspaceId: workspaceId,
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .catch((error) => {
            toast.error(error.message)
        })
    },
    getListUpcomingTasks: async () => {
        const token = TaskFactory.getToken();
        return await axios.get(`https://localhost:7070/api/TaskItem/up-comming`, 
        {
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .catch((error) => {
        toast.error(error.message)
    })
}}
export default TaskFactory;
