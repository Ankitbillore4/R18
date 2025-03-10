import { createSlice } from "@reduxjs/toolkit";


const initialState={
        user:[
            {
                id:1,
                name:'John Doe',
                email:'john.doe@example.com'
            },
            {
                id:2,
                name:' Doe',
                email:'jo@doe@example.com'
            },{
                id:3,
                name:'chacha Doe',
                email:'jo@example.com'
            },
        ]
    }

createSlice({
    name: 'user',
    initialState
})