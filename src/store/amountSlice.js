import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 10000,
  debitCount:0,
  creditCount:0
}

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    addDebitCount: (state,action) =>{

    },
    addCreditCount: (state,action) =>{

    },
    incrementByAmount: (state, action) => {
        state.creditCount+=1; 
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
        state.debitCount += 1;
        state.value -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,decrementByAmount,addCreditCount,addDebitCount } = amountSlice.actions
export const selectBalance = (state) => state.amount.value;
export const selectCreditCount = (state) => state.amount.creditCount;
export const selectDebitCount = (state) => state.amount.debitCount;
export default amountSlice.reducer;