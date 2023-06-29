import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer'
import rootSaga  from './root-saga';
import signalRMiddleware from '../middleware/signalRMiddleware'


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware,signalRMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;