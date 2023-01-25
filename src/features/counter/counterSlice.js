import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux toolkit nos permite creat logica que muta en los reducers
      // No muta el estado porque usa immer
      // Detecta cambios en un estado de borrador y produce uno nuevo
      // crea un nuevo estado inmutable basado en esos cambios
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Los creadores de acciones son generados por cada function reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
