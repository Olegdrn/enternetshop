import { createSlice} from '@reduxjs/toolkit'

// Define a type for the slice state
interface quantity {
  productsAmount: number;
}

// Define the initial state using that type
const initialState: quantity = {
  productsAmount: 6
}

export const paginationSlice = createSlice({
  name: 'paginator',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increasingProductsAmount: (state) => {
      state.productsAmount +=6;
    },
    decreasingProductsAmount: (state)=>{
      state.productsAmount -=6;
    }
  },
})

export const { increasingProductsAmount, decreasingProductsAmount} = paginationSlice.actions;


export default paginationSlice.reducer;