import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name:"todo",
  initialState:{
    myTodo:[
      {
        id : 1,
        todo : "sdkfmlasmkl"
      }
    ]
},
  reducers:{
    createTodo: (state, action) => {
      console.log(action,"aciton")
      let newTodo = {
        id : state.myTodo.length +1,
        todo : action.payload
      }
      state.myTodo.push(newTodo)
    },
    deleteTodo: (state, action) => {
      let { myTodo } = state;
      state.myTodo = myTodo.filter((item)=>{
        return item.id !== action.payload
      })
    },
    updateTodo: (state,action) =>{
      let { myTodo } = state;
      state.myTodo = myTodo.map((item)=>{
        return item.id === action.payload.id ? action.payload : item
      })
    }
  }
})
export const { createTodo, deleteTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
