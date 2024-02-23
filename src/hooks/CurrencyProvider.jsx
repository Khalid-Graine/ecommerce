import { useState } from "react";
import { CurrencyContext } from "./CurrencyContext";

const UserProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("dollar");
  const availableCurrencies = ["dollar", "pound", "euro"];

  // Function to update the selected currency
  const setCurrency = (currency) => {
    if (availableCurrencies.includes(currency)) {
      setSelectedCurrency(currency);
    } else {
      console.error(`Currency ${currency} is not available.`);
    }
  };

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, availableCurrencies, setCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );

  return (
    <CurrencyContext.Provider
      value={{ availableCurrencies, selectedCurrency, setSelectedCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
export default UserProvider;
