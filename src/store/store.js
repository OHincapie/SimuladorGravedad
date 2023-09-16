import { configureStore } from '@reduxjs/toolkit'
import { worldsSlice } from './slices/counter'


export const store = configureStore({
  reducer: {
    world: worldsSlice.reducer
  },
})