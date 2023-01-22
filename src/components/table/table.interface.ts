import { IUser } from './../../types/user'

export interface ITable {
    data: IUser[] | undefined
    setSelectBox: (value: number[]) => void
    selectedBox: number[]
}
