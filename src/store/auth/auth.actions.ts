import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IUser } from '../../types/user'
import { ApiURL } from './../../api/axios'
import { IUserLogin, IUserRegister } from './auth.interface'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const registerUser = createAsyncThunk<IUser, IUserRegister>(
    'auth/register',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `${ApiURL}auth/register`,
                { name, email, password },
                config
            )
            return data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const login = createAsyncThunk<any, IUserLogin>(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `${ApiURL}auth/login`,
                { email, password },
                config
            )
            return data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const hasAccess = createAsyncThunk<boolean, string>(
    'auth/isExist',
    async (email, thunkApi) => {
        try {
            const { data } = await axios.post(
                `${ApiURL}auth/isExist`,
                { email },
                config
            )
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)
