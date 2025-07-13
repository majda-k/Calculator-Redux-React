import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  result: 0,
}

export const calcSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    sum : (state, action) => {
       state.result  = Number(action.payload.firstNumber) + Number(action.payload.secondNumber);
         console.log("Sum is: ", state.result);
    },
    sub : (state, action) => {
       state.result  = Number(action.payload.firstNumber) - Number(action.payload.secondNumber);
         console.log("Sum is: ", state.result);
    },
    mul : (state, action) => {
       state.result  = Number(action.payload.firstNumber) * Number(action.payload.secondNumber);
         console.log("Sum is: ", state.result);
    },
    div : (state, action) => {
       state.result  = Number(action.payload.firstNumber) / Number(action.payload.secondNumber);
         console.log("Sum is: ", state.result);
    }
  },

}
)

export const { sum , sub , mul , div } = calcSlice.actions;
export default calcSlice.reducer;
