import axios from "axios";


const WorkspaceFactory = {
   
    getAllWorkspaces : async () => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get('https://localhost:7070/api/Workspace/me', {headers})
    },
    geRecentlyProjects: async () => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get('https://localhost:7070/api/Workspace/recently', {headers})
    },
    createNewWorkspace: async (data) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.post('https://localhost:7070/api/Workspace',data,{headers})
        
    },
    deleteWorkspace: async (id) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.delete(`https://localhost:7070/api/Workspace/${id}`,{headers})
    },
    getDetailProject: async (id) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/api/Workspace/${id}`,
        {headers})
    },
    getListLabels : async (workspaceId) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
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
    },
    getListCards : async (workspaceId) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/api/Workspace/${workspaceId}/cards`, {headers})
    },
    getListMembers : async (workspaceId) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/api/Workspace/${workspaceId}/Members`, {headers})
    },
    inviteMember: async (data,workspaceId) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
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
    },
    getListMembersWithTasks:  async (workspaceId) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/api/Workspace/${workspaceId}/MembersWithTasks`, {headers})
    },
    removeMemberOfWorkspace: async(id,memberId) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        console.log('token delete',token)
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
    },
    leaveWorkspace: async(id) => {
        const data_local = JSON.parse(localStorage.getItem('userInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.post(`https://localhost:7070/api/Workspace/${id}/LeaveWorkspace`,null,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
    }
}
export default WorkspaceFactory;
