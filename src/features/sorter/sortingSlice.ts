import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface showMenWomen {
  statusMen: boolean;
  statusWomen:boolean
}

// Define the initial state using that type
const initialState: showMenWomen = {
  statusMen: false,
  statusWomen:false
}

export const sortingSlice = createSlice({
  name: 'sorting',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
     changeMen: (state) => {
      state.statusMen = !state.statusMen
    },
    changeWomen: (state) => {
      state.statusWomen = !state.statusWomen
    }
  },
})

export const { changeMen, changeWomen } = sortingSlice.actions


export default sortingSlice.reducer