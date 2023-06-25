
// const config = {
//     headers: { Authorization: `Bearer ${token}` }

import axios from "axios";

// };
const AdminFactory = {
    registerAdmin : async (data) => {
        return await axios.post('https://localhost:7070/account/register-admin',data)
    },
    loginAdmin : async (data) => {
        console.log(data)
        return await axios.post('https://localhost:7070/account/admin/login',data)
    },
    getListUsers: async (data) => {
        const data_local = JSON.parse(localStorage.getItem('adminInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get('https://localhost:7070/account/admin/users',{headers})
    },
    getListProjectsOfUsers: async (userId) => {
        const data_local = JSON.parse(localStorage.getItem('adminInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/account/admin/users/${userId}`,{headers})
    },
    getAdminProfile: async () => {
        const data_local = JSON.parse(localStorage.getItem('adminInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.get(`https://localhost:7070/account`,{headers})
    },
    editAdminProfile: async (userId,data) => {
        const data_local = JSON.parse(localStorage.getItem('adminInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.put(`https://localhost:7070/account/${userId}`,data,{headers})
    },
    uploadProfileToCloudinary: async (formData) => {
        const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/diql0n3kn/image/upload';
        return await axios.post(CLOUDINARY_URL,formData,{ header:{
            'Allowed-Origin': '*',
            "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS" 
          }})
    },
    uploadAvatarToServer: async (avatar_url) => {
        const data_local = JSON.parse(localStorage.getItem('adminInfor'))||{};
        const token = data_local?.token;
        const headers = {
        'Authorization': `Bearer ${token}`};
        return await axios.put('https://localhost:7070/account/upload-avt',avatar_url,{headers})
    },
}
export default AdminFactory;