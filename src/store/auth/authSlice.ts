import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser } from '../../types/user'
import { hasAccess, login, registerUser } from './auth.actions'
import { IinitialState } from './auth.interface'

const initialState = {
    isLoading: false,
    hasAccess: false,
    user: null,
    error: '',
} as IinitialState

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, _) => {
                state.isLoading = true
            })
            .addCase(
                registerUser.fulfilled,
                (state, action: PayloadAction<IUser>) => {
                    state.isLoading = false
                    state.error = ''
                    state.user = action.payload
                }
            )
            .addCase(
                registerUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false
                    state.error = action.payload
                }
            )
            .addCase(login.pending, (state, _) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.isLoading = false
                state.error = ''
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(
                hasAccess.fulfilled,
                (state, action: PayloadAction<boolean>) => {
                    state.hasAccess = action.payload
                }
            )
    },
})

export const selectCount = (state: IinitialState) => state

export default authSlice.reducer
