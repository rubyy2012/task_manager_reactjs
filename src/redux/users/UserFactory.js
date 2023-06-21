
// const config = {
//     headers: { Authorization: `Bearer ${token}` }

import axios from "axios";

// };
const UserFactory = {
    registerUser : async (data) => {
        return await axios.post('https://localhost:7070/account/register',data)
    },
    loginUser : async (data) => {
        console.log(data)
        return await axios.post('https://localhost:7070/account/login',data)
    }
}
export default UserFactory;