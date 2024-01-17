import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface showMenWomen {
  gender: string
}

// Define the initial state using that type
const initialState: showMenWomen = {
  gender: ""
}

export const sortingSlice = createSlice({
  name: 'sorting',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
     changeMen: (state) => {
      state.gender = "male"
    },
    changeWomen: (state) => {
      state.gender = "female"
    },
    changeAll: (state) => {
      state.gender = ""
    }
  },
})

export const { changeMen, changeWomen,changeAll } = sortingSlice.actions


export default sortingSlice.reducer