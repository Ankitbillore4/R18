import { createSlice } from "@reduxjs/toolkit";

const  initialState ={
    product:[
        {id:1,name:'Apple',price:100},
        {id:2,name:'Orange',price:80},
        {id:3,name:'Mango',price:150},
        {id:4,name:'Banana',price:50},
        {id:5,name:'Grapes',price:120},
        {id:6,name:'Cherry',price:70},
        {id:7,name:'Pineapple',price:180},
        {id:8,name:'Strawberry',price:130},
        {id:9,name:'Watermelon',price:200},
        {id:10,name:'Pear',price:110},
        {id:11,name:'Lemon',price:90},
    ],

}

 const productSlice = createSlice({
    name: 'counter',
    initialState
   
})