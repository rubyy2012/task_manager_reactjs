import AdminAction from "./AdminAction";

let initialState = {
    adminRegister: {
        loading: false,
        message: '',
        isSuccess: false
    },
    adminInfor: {
        loading:false,
        message: '',
        data: {}
    },
    listUsers: {
        loading: false,
        data: [],
    },
    listProjectss: {
        loading: false,
        data: [],
    },
    profile: {
        loading: false,
        data: {}
    }
}

const AdminReducer = (state=initialState,action)=> {
    // console.log(action)
    switch(action.type) {
        
        case AdminAction.REQUEST_GET_DETAIL_PROFILE_ADMIN: 
        {
            return {
                ...state,
                profile: {
                    ...state.data,
                    loading: true,
                },
            };
        }

        case AdminAction.SUCCESS_GET_DETAIL_PROFILE_ADMIN: 
        {
            return {
                ...state,
                profile: {
                    loading: false,
                    data: action?.payload?.data?.data
                },
            };
        }
        case AdminAction.REQUEST_GET_LIST_PROJECTS_OF_USER: 
        {
            return {
                ...state,
                listProjects: {
                    ...state.data,
                    loading: true,
                },
            };
        }

        case AdminAction.SUCCESS_GET_LIST_PROJECTS_OF_USER: 
        {
            console.log('projects',action?.payload?.data)
            return {
                ...state,
                listProjects: {
                    loading: false,
                    isSuccess: action?.payload?.data?.isSuccess,
                    data: action?.payload?.data?.data
                },
            };
        }
        case AdminAction.REQUEST_GET_LIST_USERS: 
        {
            return {
                ...state,
                listUsers: {
                    ...state.data,
                    loading: true,
                },
            };
        }

        case AdminAction.SUCCESS_GET_LIST_USERS: 
        {
            return {
                ...state,
                listUsers: {
                    loading: false,
                    isSuccess: action?.payload?.data?.isSuccess,
                    data: action?.payload?.data?.data
                },
            };
        }
        case AdminAction.REQUEST_ADMIN_REGISTER: 
        {
            return {
                ...state,
                adminRegister: {
                    ...state.data,
                    loading: true,
                },
            };
        }

        case AdminAction.SUCCESS_REGISTER: 
        {
            console.log('action reducer',action)
            return {
                ...state,
                adminRegister: {
                    loading: false,
                    message:action?.payload?.data?.message,
                    isSuccess: action?.payload?.data?.isSuccess
                },
            };
        }
        case AdminAction.FAIL_ADMIN_REGISTER: 
        {
            console.log('action reducer',action)
            return {
                ...state,
                adminRegister: {
                    loading: false,
                    message:action?.payload?.data?.message,
                    isSuccess: action?.payload?.data?.isSuccess
                },
            };
        }

        case AdminAction.REQUEST_ADMIN_LOGIN: 
        {
            return {
                ...state,
                adminInfor: {
                    ...state.data,
                    loading: true,
                },
            };
        }
        case AdminAction.SUCCESS_ADMIN_LOGIN: 
        {
            return {
                ...state,
                adminInfor: {
                    loading: false,
                },
            };
        }
        default: {
            return state; 
          }
            
        }
    }
   
export default AdminReducer;
