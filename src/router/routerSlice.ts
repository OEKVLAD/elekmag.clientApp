import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../app/store';

import axios from "axios/index";


const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'https://elekmag.com.ua/wp-json' });

let defaultHeaders = {
    params: {},
    withCredentials: true,
    auth: {
        username: "ck_1473f3fdfd193b72a461fd19f93889cad4b14a08",
        password: "cs_2ffd60420c26b044985b0e1ca1a736ffeec2223e"
    }
};

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
    axios.get(`https://elekmag.com.ua/wp-json/wc/v3/products/categories?slug=${slug}`, defaultHeaders)
        .then( ( response: { data: any; } ) => {
            if (response.data.length > 0)
            {
                dispatch(routers({"content":response.data,
                    "type":"categories"}));

            }
            else
                axios.get(`https://elekmag.com.ua/wp-json/wc/v3/products?slug=${slug}`, defaultHeaders)
                    .then( ( response: { data: any; } ) => {
                    if (response.data.length > 0)
                    {
                        dispatch(routers({"content":response.data,
                            "type":"products"}));
                    }
                    else
                        wp.pages().slug(slug)
                            .then(function (data: any) {
                                if (data.length > 0)
                                {
                                    dispatch(routers({"content":data,
                                        "type":"pages"}));
                                }
                                else
                                    wp.posts().slug(slug)
                                        .then(function (data: any) {
                                            dispatch(routers({"content":data,
                                                "type":"posts"}));
                                        })
                            })
                })
    });
};

export const router = (state: RootState) => state.routers.value;


export default routerSlice.reducer;
