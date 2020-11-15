import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import routerReducer from '../router/routerSlice';
import productAttributesTermsListReducer from "../component/product/ProductAttributeTermsList/productAttributeTermsListSlice";

export const store = configureStore({
  reducer: {
    routers: routerReducer,
    productAttributesTermsList: productAttributesTermsListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ProductAttributeTermsListsState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
