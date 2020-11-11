import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// @ts-ignore
import routerReducer from '../router/routerSlice';

export const store = configureStore({
  reducer: {
    routers: routerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
