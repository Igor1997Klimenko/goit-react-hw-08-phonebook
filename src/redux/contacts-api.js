import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiContacts = createApi({
    reducerPath: 'apiContacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62727f8825fed8fcb5f54bcd.mockapi.io',
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => ({
                url: `/contacts`,
                method: 'GET',
            }),
            providesTags: ['Contact'],
        }),

        addContact: builder.mutation({
            query: newContact => ({
                    url: '/contacts',
                    method: 'POST',
                    body: newContact,
            }),
             invalidatesTags: ['Contact'],
        }),

        deleteContacts: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'], 
        }),
    }),
});
export const { useGetContactsQuery, useAddContactMutation, useDeleteContactsMutation } = apiContacts;