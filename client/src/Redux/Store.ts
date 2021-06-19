import { createStore } from "@reduxjs/toolkit";
// @ts-ignore
import tasksReducer from "./reducers/TasksReducer.ts";

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//   },
// });
export const store = createStore(tasksReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;