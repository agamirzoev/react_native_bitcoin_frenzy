// import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import rootReducer from './reducers/rootReducer';
// import rootSaga from './sagas/rootSaga';

// const sagaMiddleware = createSagaMiddleware();

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancer(applyMiddleware(sagaMiddleware)),
// );

// sagaMiddleware.run(rootSaga);

// export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
