import React, { createContext } from "react";

export const CurrencyContext = createContext({
  selectedCurrency: "dollar",
  setCurrency: () => {}, // Placeholder function
  availableCurrencies: ["dollar", "euro", "pound"],
});
