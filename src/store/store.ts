import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { authApi } from "./API/authApi";
import { postApi } from "./API/postApi";
import { photosApi } from "./API/photosApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      postApi.middleware,
      photosApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
