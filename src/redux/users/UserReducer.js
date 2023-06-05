import UserAction from "./UserAction";

let initialState = {
    userData: {
        loading: false,
        data: []
    }
}

const UserReducer = (state=initialState,action)=> {
    // console.log(action)
    switch(action.type) {
        case UserAction.REQUEST_REGISTER: 
        {
            return {
                ...state,
                userData: {
                    ...state.data,
                    loading: true,
                },
            };
        }
        default: {
            return state; // Return the current state as the default case
          }
            
        }
    }
   
export default UserReducer;
