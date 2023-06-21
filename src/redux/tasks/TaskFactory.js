import axios from "axios";
const data_local = JSON.parse(localStorage.getItem('userInfor'));
const token = data_local?.token;
const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
const TaskFactory = {
    postComment: async (data,workspaceId) => {
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
    },
    deleteComment: async(commentId) => {
        return await axios.delete(`https://localhost:7070/api/TaskItem/Comment/${commentId}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
    },
    createNewTask: async (data,workspaceId) => {
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
    },
    createNewSubtask:  async (data,workspaceId) => {
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
    },
    
    editSubtask: async (update_data,id,workspaceId) => {
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
    },
    editTask: async (update_data,taskId,workspaceId) => {
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
    },
    moveTask : async (data,taskId,workspaceId) => {
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
    },
    deleteTask : async (id,workspaceId) => {
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
    },
    detailTask : async (taskId) => {
        return await axios.get(`https://localhost:7070/api/TaskItem/${taskId}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
    },
    assignTaskMember: async (data,workspaceId,taskId) => {
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
    },
    createNewLabel: async (data) => {
        return await axios.post(`https://localhost:7070/api/Label`,
        data,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
    },
    addLabel: async (data,taskId) => {
        return await axios.post(`https://localhost:7070/api/TaskItem/${taskId}/AddLabels`,
        data,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
    },
    deleteSubtask : async (workspaceId,subtaskId) => {
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
    },
    getTasksByMember: async (workspaceId,memberId) => {
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
    }
}
export default TaskFactory;
