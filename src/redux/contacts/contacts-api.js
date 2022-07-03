import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiContacts = createApi({
    reducerPath: 'apiContacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
             return headers;
        }
    }),
    tagTypes: ['Contacts'],
    refetchOnMountOrArgChange: 10,
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => '/contacts',
            transformResponse: res => res.sort((a,b) => b.id - a.id),
            providesTags: (result) =>
                result
                ? [...result.map(({ id }) => ({ type: 'Contacts', id })), 'Contacts']
                    : ['Contacts'],
        }),
    
        addContact: builder.mutation({
            query: newContact => ({
                url: '/contacts',
                method: 'POST',
                body: newContact,
            }),
                invalidatesTags: ['Contacts'],
        }),

        deleteContacts: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
                invalidatesTags: ['Contacts'], 
        }),

         editPostContact: builder.mutation({
            query: ({ id, ...edit }) => ({
                url: `/contacts/${id}`,
                method: 'PATCH',
                body: edit,
            }),
                invalidatesTags: ['Contacts'], 
        }),
    }),
});
export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactsMutation,
    useEditPostContactMutation,
} = apiContacts;
