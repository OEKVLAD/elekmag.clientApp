import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../../../app/store';
const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'https://elekmag.com.ua/wp-json' });
interface HomePageRouterState {
  value: any;
}

const initialState: HomePageRouterState = {
  value: null,
};

export const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    productList: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    page: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { productList  } = postListSlice.actions;

export const getAllPost = (): AppThunk => dispatch => {
  wp.posts().get()
      .then(function( data: number ) {
        dispatch(productList(data));
      })
      // .catch(function( err ) {
      //   // handle error
      // });
};
export const getPage = (): AppThunk => dispatch => {
  wp.posts().slug( 'tajmery-v-bytu-chto-eto-takoe-i-chem-mogut-byt-polezny/' )
      .then(function( data: any ) {
        dispatch(productList(data));
      })
      // .catch(function( err ) {
      //   // handle error
      // });
};

export const postList = (state: RootState) => state.routers.value;
export const page = (state: RootState) => state.routers.value;

export default postListSlice.reducer;
