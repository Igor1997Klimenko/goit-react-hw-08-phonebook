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
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
                invalidatesTags: ['Contact'], 
        }),

         editPostContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId.id}`,
                method: 'PATCH',
                body: contactId,
            }),
                invalidatesTags: ['Contact'], 
        }),
    }),
});
export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactsMutation,
    useEditPostContactMutation,
} = apiContacts;

// editPostContact: builder.mutation({
//             query: ({contactId, ...rest}) => ({
//                 url: `/contacts/${contactId}`,
//                 method: 'PATCH',
//                 body: rest,
//             }),
//                 invalidatesTags: ['Contact'], 
//         }),

