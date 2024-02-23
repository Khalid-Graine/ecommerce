import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  availableCurrencies: ["dollar", "euro", "pound"],
  selectedCurrency: "dollar",
  count: 0,
  data: [],
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setSelectedCurrency } = currencySlice.actions;

export default currencySlice.reducer;
