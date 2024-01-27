import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SAMPLE_SERVICE_API_HOST
    }),
    endpoints: (builder) => ({
        getFavorites: builder.query({
            query: () => ({
                url: '/api/favorites',
                credentials: 'include'
            }),
            transformResponse: (response) => response.favorites,
            providesTags: ['Favorites']
        }),
        createFavorite: builder.mutation({
            query: (body) => ({
                url: '/api/favorites',
                body,
                method: 'POST',
                credentials: 'include'
            }),
            invalidatesTags: ['Favorites']
        }),
        deleteFavorite: builder.mutation({
            query: (favorite_id) => ({
                url: `/api/favorites/${favorite_id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Favorites']
        }),
        getAllPokemon: builder.query({
            query: () => '/api/pokemon',
            transformResponse: (response) => response.pokemon
        }),
        getPokemonByName: builder.query({
            query: (name) => `/api/pokemon/${name}`
        }),
        getAccount: builder.query({
            query: () => ({
                url: `/token`,
                credentials: 'include'
            }),
            transformResponse: (response) => response ? response.account : null,
            providesTags: ['Account']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/token',
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Account']
        }),
        login: builder.mutation({
            query: ({username, password}) => {
                const body = new FormData();
                body.append('username', username)
                body.append('password', password)
                return {
                    url: `/token`,
                    method: `POST`,
                    body,
                    credentials: 'include'
                }
            },
            invalidatesTags: ['Account']
        }),
        signup: builder.mutation({
            query: (body) => ({
                url: `/api/accounts`,
                method: 'POST',
                body,
                credentials: 'include'
            }),
            invalidatesTags: ['Account']
        })
    })
})

export const {
    useSignupMutation,
    useCreateFavoriteMutation,
    useDeleteFavoriteMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetAllPokemonQuery,
    useGetPokemonByNameQuery,
    useGetAccountQuery,
    useGetFavoritesQuery
} = pokemonApi;
