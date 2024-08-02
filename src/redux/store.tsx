import logger from 'redux-logger';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
// import {watcherSaga} from './sagas/rootSagas';
import {configureStore, Tuple} from '@reduxjs/toolkit';
import {watcherSaga} from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

/* const store = configureStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware, logger),
});

sagaMiddleware.run(watcherSaga);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
