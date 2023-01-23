import { IUser } from '../../types/user'

export interface IUserRegister {
    name: string
    email: string
    password: string
}

export type IUserLogin = Omit<IUserRegister, 'name'>

export interface IinitialState {
    isLoading: boolean
    hasAccess: boolean
    user: IUser | null
    error: string | undefined
}
