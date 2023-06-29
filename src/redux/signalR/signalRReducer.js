import signalRActions from "./signalRActions";

const initialState = {
    signalRStore: {
      connection: null,
      isConnected: false
    }
  };
  
  const signalRReducer = (state = initialState, action) => {
    switch (action.type) {
      case signalRActions.SET_SIGNALR_CONNECTION:
        console.log('SET_SIGNALR_CONNECTION',action.payload)
        return {
          ...state,
          signalRStore: {
            connection: action.payload,
            isConnected: true
          }
        };
      case signalRActions.CLOSE_SIGNALR_CONNECTION:
        return {
          ...state,
          signalRStore: {
            connection: null,
            isConnected: false
          }
        };
      default:
        return state;
    }
  };
  
  export default signalRReducer;