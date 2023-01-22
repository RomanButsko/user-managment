import { combineReducers } from '@reduxjs/toolkit'

import { api } from './api/api'
import { authSlice } from './auth/authSlice'

export const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
})
