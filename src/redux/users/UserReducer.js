import UserAction from "./UserAction";

let initialState = {
    userRegister: {
        loading: false,
        message: '',
        isSuccess: false
    },
    userInfor: {
        loading:false,
        message: '',
        data: {}
    },
    profile: {
        loading: false,
        data: {}
    }
}

const UserReducer = (state=initialState,action)=> {
    // console.log(action)
    switch(action.type) {
        case UserAction.REQUEST_GET_DETAIL_PROFILE: 
        {
            return {
                ...state,
                profile: {
                    ...state.data,
                    loading: true,
                },
            };
        }

        case UserAction.SUCCESS_GET_DETAIL_PROFILE: 
        {
            return {
                ...state,
                profile: {
                    loading: false,
                    data: action?.payload?.data?.data
                },
            };
        }
        case UserAction.REQUEST_REGISTER: 
        {
            return {
                ...state,
                userRegister: {
                    ...state.data,
                    loading: true,
                },
            };
        }

        case UserAction.SUCCESS_REGISTER: 
        {
            console.log('action reducer',action)
            return {
                ...state,
                userRegister: {
                    loading: false,
                    message:action?.payload?.data?.message,
                    isSuccess: action?.payload?.data?.isSuccess
                },
            };
        }
        case UserAction.FAIL_REGISTER: 
        {
            console.log('action reducer',action)
            return {
                ...state,
                userRegister: {
                    loading: false,
                    message:action?.payload?.data?.message,
                    isSuccess: action?.payload?.data?.isSuccess
                },
            };
        }

        case UserAction.REQUEST_LOGIN: 
        {
            return {
                ...state,
                userInfor: {
                    ...state.data,
                    loading: true,
                },
            };
        }
        case UserAction.SUCCESS_LOGIN: 
        {
            // const myInfor = action.payload.data.data;
            // const objectString = JSON.stringify(myInfor);
            // localStorage.setItem('userInfor',objectString);
            return {
                ...state,
                userInfor: {
                    loading: false,
                    // data: myInfor
                },
            };
        }
        default: {
            return state; // Return the current state as the default case
          }
            
        }
    }
   
export default UserReducer;
