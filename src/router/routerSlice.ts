import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../app/store';

import ProductService from "../service/Product.service";
import {ProductModel} from "../model/Product.model";
import {ProductAttributeTermsListModel} from "../model/ProductAttributesTermsList.mode"

interface RouterState {
   value: any
}

const initialState: RouterState = {
    value: null
};

export const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        routers: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
        },
    },
});

export const { routers } = routerSlice.actions;


export const getRouter = (slug: string): AppThunk => dispatch => {

    // ProductService.getProductAttributeTermsList([270, 268, 271], (data: ProductAttributeTermsListModel[])=>{
    //     dispatch(routers({...data}));
    // }, ()=>{});

    ProductService.getProductBySlug(slug, (data: ProductModel)=>{
        dispatch(routers({"content":data, "type":"products"}));
    }, ()=>{});

    // axios.get(`https://elekmag.com.ua/wp-json/wc/v3/products/categories?slug=${slug}`, defaultHeaders)
    //     .then( ( response: { data: any; } ) => {
    //         if (response.data.length > 0)
    //         {
    //             dispatch(routers({"content":response.data, "type":"categories"}));
    //
    //         }
    //         else
    //             axios.get(`https://elekmag.com.ua/wp-json/wc/v3/products?slug=${slug}`, defaultHeaders)
    //                 .then( ( response: { data: any; } ) => {
    //                 if (response.data.length > 0)
    //                 {
    //                     dispatch(routers({"content":response.data,
    //                         "type":"products"}));
    //                 }
    //                 else
    //                     wp.pages().slug(slug)
    //                         .then(function (data: any) {
    //                             if (data.length > 0)
    //                             {
    //                                 dispatch(routers({"content":data,
    //                                     "type":"pages"}));
    //                             }
    //                             else
    //                                 wp.posts().slug(slug)
    //                                     .then(function (data: any) {
    //                                         dispatch(routers({"content":data,
    //                                             "type":"posts"}));
    //                                     })
    //                         })
    //             })
    // });
};

export const router = (state: RootState) => state.routers.value;


export default routerSlice.reducer;
