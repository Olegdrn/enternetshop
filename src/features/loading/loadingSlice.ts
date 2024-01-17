import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface isLoading {
  loading: boolean;
}

// Define the initial state using that type
const initialState: isLoading = {
  loading: true
}

export const loadingSlice = createSlice({
  name: 'loader',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
     loading: (state) => {
      state.loading = false;
    }
  },
})

export const { loading } = loadingSlice.actions


export default loadingSlice.reducer