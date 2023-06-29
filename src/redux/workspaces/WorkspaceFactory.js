import axios from "axios";
import { toast } from "react-toastify";


const WorkspaceFactory = {
    getToken : ()=>{
        const data_local = JSON.parse(localStorage.getItem('userInfor'));
        const token = data_local?.token;
        return token;
    },
    getAllWorkspaces : async () => {
        const token = WorkspaceFactory.getToken();
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get('https://localhost:7070/api/Workspace/me', {headers})
        .catch((error) => {
            toast.error(error.message)
        })
    },
    geRecentlyProjects: async () => {
        const token = WorkspaceFactory.getToken();
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get('https://localhost:7070/api/Workspace/recently', {headers})
        .catch((error) => {
            toast.error(error.message)
        })
    },
    createNewWorkspace: async (data) => {
        const token = WorkspaceFactory.getToken();
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.post('https://localhost:7070/api/Workspace',data,{headers})
        .catch((error) => {
            toast.error(error.message)
        })
    },
    deleteWorkspace: async (id) => {
        const token = WorkspaceFactory.getToken();
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.delete(`https://localhost:7070/api/Workspace/${id}`,{headers})
        .catch((error) => {
            toast.error(error.message)
        })
    },
    getDetailProject: async (id) => {
        console.log('id facetory',id)
        const token = WorkspaceFactory.getToken();
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/api/Workspace/${id}`,
        {headers})
        .catch((error) => {
            toast.error(error.message)
        })
    },
    getListLabels : async (workspaceId) => {
        const token = WorkspaceFactory.getToken();
        return await axios.get(`https://localhost:7070/api/Label`,
        {
            params: 
            {
                workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .catch((error) => {
            toast.error(error.message)
        })
    },
    getListCards : async (workspaceId) => {
        const token = WorkspaceFactory.getToken();
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/api/Workspace/${workspaceId}/cards`, {headers})
        .catch((error) => {
            toast.error(error.message)
        })
    },
    getListMembers : async (workspaceId) => {
        const token = WorkspaceFactory.getToken();
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/api/Workspace/${workspaceId}/Members`, {headers})
        .catch((error) => {
            toast.error(error.message)
        })
    },
    inviteMember: async (data,workspaceId) => {
        const token = WorkspaceFactory.getToken();
        return await axios.post(`https://localhost:7070/api/Workspace/${workspaceId}/Invite`, 
        data,
        {
            params: 
            {
                id: workspaceId
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
    getListMembersWithTasks:  async (workspaceId) => {
        const token = WorkspaceFactory.getToken();
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/api/Workspace/${workspaceId}/MembersWithTasks`, {headers})
        .catch((error) => {
            toast.error(error.message)
        })
    },
    removeMemberOfWorkspace: async(id,memberId) => {
        const token = WorkspaceFactory.getToken();
        return await axios.post(`https://localhost:7070/api/Workspace/${id}/RemoveMember`,null,{
            params: 
            {
                memberId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .catch((error) => {
            toast.error(error.message)
        })
    },
    leaveWorkspace: async(id) => {
        const token = WorkspaceFactory.getToken();
        return await axios.post(`https://localhost:7070/api/Workspace/${id}/LeaveWorkspace`,null,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .catch((error) => {
            toast.error(error.message)
        })
    },

    //scheduler
    createScheduler: async(data) => {
        console.log('data',data)
        const token = WorkspaceFactory.getToken();
        return await axios.post(`https://localhost:7070/api/Schedule`,data,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .catch((error) => {
            toast.error(error.message)
        })
    },
    getListSchedulersWorkspace: async(workspaceId) => {
        const token = WorkspaceFactory.getToken();
        return await axios.get(`https://localhost:7070/api/Schedule`,{
            params: 
            {
                workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .catch((error) => {
            toast.error(error.message)
        })
    },
    deleteSchedulerofWorkspace:  async (data) => {
        const token = WorkspaceFactory.getToken();
        return await axios.delete(`https://localhost:7070/api/Schedule/${data.id}`,{
            params: 
            {
                workspaceId:data.workspaceId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .catch((error) => {
            toast.error(error.message)
        })
    },
    editSchedulerofWorkspace: async (data,id) => {
        const token = WorkspaceFactory.getToken();
        return await axios.put(`https://localhost:7070/api/Schedule/${id}`,data,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .catch((error) => {
            toast.error(error.message)
        })
    },
}
export default WorkspaceFactory;
