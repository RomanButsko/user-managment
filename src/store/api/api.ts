import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ApiURL } from './../../api/axios'
import { IUser } from './../../types/user'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({ baseUrl: ApiURL }),
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => `users`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(
                              ({ id }) => ({ type: 'Users', id } as const)
                          ),
                          { type: 'Users', id: 'LIST' },
                      ]
                    : [{ type: 'Users', id: 'LIST' }],
        }),
        deleteFromList: builder.mutation<IUser[], number>({
            query(id) {
                return {
                    url: `users/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
        }),
        updateStatusBlock: builder.mutation<IUser[], number>({
            query(id) {
                return {
                    url: `users/block/${id}`,
                    method: 'PATCH',
                }
            },
            invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
        }),
        updateStatusUnBlock: builder.mutation<IUser[], number>({
            query(id) {
                return {
                    url: `users/unblock/${id}`,
                    method: 'PATCH',
                }
            },
            invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
        }),
    }),
})

export const {
    useGetUsersQuery,
    useDeleteFromListMutation,
    useUpdateStatusBlockMutation,
    useUpdateStatusUnBlockMutation,
} = api
