import { configureStore } from "@reduxjs/toolkit";
import { setupApi } from '@reduxjs/toolkit/query/react';
import {cryptoApi} from '../services/cryptoApi'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});