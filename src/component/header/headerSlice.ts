import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../../app/store';
const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'https://elekmag.com.ua/wp-json' });
interface HeaderState {
  value: any;
}

const initialState: HeaderState = {
  value: null,
};

export const headerSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    productList: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { productList  } = headerSlice.actions;

export const getAllPost = (): AppThunk => dispatch => {
  wp.posts().get()
      .then(function( data: number ) {
        dispatch(productList(data));
      })
      // .catch(function( err ) {
      //   // handle error
      // });
};

export const postList = (state: RootState) => state.routers.value;

export default headerSlice.reducer;
