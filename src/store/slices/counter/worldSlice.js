import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const worldsSlice = createSlice({
  name: 'world',
  initialState: {
    planeta: null,
    gravedad: 0
  },
  reducers: {
    setWorlds: (state, action) => {
      console.log(action);
      state.planeta = action.payload.imagen;
      state.gravedad = action.payload.gravedad;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setWorlds } = worldsSlice.actions;