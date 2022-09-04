import { configureStore } from '@reduxjs/toolkit';
import WallsReducer from './walls.reducer';

const store = configureStore({
  reducer: {
    wall: WallsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
