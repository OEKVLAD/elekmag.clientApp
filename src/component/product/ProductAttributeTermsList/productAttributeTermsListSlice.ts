import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, ProductAttributeTermsListsState } from '../../../app/store';

import ProductService from "../../../service/Product.service";
import {ProductAttributeTermsListModel} from "../../../model/ProductAttributesTermsList.mode"

interface ProductAttributeTermsListState {
    value: any
}

const initialState: ProductAttributeTermsListState = {
    value: null
};

export const productAttributesTermsListSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        productAttributesTermsLists: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
        },
    },
});

export const { productAttributesTermsLists } = productAttributesTermsListSlice.actions;


export const getProductAttributesTermsList = (attributesList: number[]): AppThunk => dispatch => {
    ProductService.getProductAttributeTermsList(attributesList, (data: ProductAttributeTermsListModel[])=>{
        dispatch(productAttributesTermsLists({...data}));
    }, ()=>{});
};

export const productAttributesTermsList = (state: ProductAttributeTermsListsState) => state.productAttributesTermsList.value;


export default productAttributesTermsListSlice.reducer;
