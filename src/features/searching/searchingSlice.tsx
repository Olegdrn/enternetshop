import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface searchText {
  text: string;
  filterSensor:boolean;
}

// Define the initial state using that type
const initialState: searchText = {
  text: "",
  filterSensor:false
}

export const searchingSlice = createSlice({
  name: 'searcher',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    searching: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setFilterSensor: (state) => {
      state.filterSensor = !state.filterSensor;
    }
  },
})

export const { searching, setFilterSensor} = searchingSlice.actions;


export default searchingSlice.reducer;