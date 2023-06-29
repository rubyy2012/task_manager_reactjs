import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import signalRActions from '../redux/signalR/signalRActions';

const signalRMiddleware = store => next => action => {
    switch (action.type) {
      case signalRActions.INITIALIZE_SIGNALR_CONNECTION:
        // const connectionHub = /* URL của SignalR Hub */
        const connectionHub = 'https://localhost:7070/HubService'
        const initializeConnection = new HubConnectionBuilder()
          .withUrl(connectionHub)
          .configureLogging(LogLevel.Information)
          .build();
        initializeConnection.start()
          .then(() => {
            store.dispatch({ type: signalRActions.SET_SIGNALR_CONNECTION, payload: initializeConnection });
          })
          .catch(error => {
            console.error('Kết nối SignalR thất bại:', error);
          });
        break;
      case signalRActions.CLOSE_SIGNALR_CONNECTION:
        const { connection } = store.getState().signalR;
        if (connection) {
          connection.stop()
            .then(() => {
              store.dispatch({ type: signalRActions.CLOSE_SIGNALR_CONNECTION });
            })
            .catch(error => {
              console.error('Ngắt kết nối SignalR thất bại:', error);
            });
        }
        break;
  
      default:
        return next(action);
    }
  };
  
  export default signalRMiddleware;