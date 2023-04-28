import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"



export const API_URL: string = "http://localhost:4200/animal";


export const api = createApi({
    reducerPath: "api",
    tagTypes: ["animal"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getAnimal: builder.query({
            query: () => "/",
            providesTags: () => [{ type: "animal" }]
        })
    })

})


export const { useGetAnimalQuery } = api;