<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import projectReducer from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
=======
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import projectReducer from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
>>>>>>> e7b500a4787e9b495d567a5254f9d942c3897de8
