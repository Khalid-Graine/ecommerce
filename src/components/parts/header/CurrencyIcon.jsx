import React from "react";

const CurrencyIcon = ({ currency = "dollar" }) => {
  return (
    <div>
      {currency == "dollar" && <i className="fa-solid fa-dollar-sign"></i>}
      {currency == "euro" && <i className="fa-solid fa-euro-sign"></i>}

      {currency == "pound" && <i className="fa-solid fa-sterling-sign"></i>}
    </div>
  );
};

export default CurrencyIcon;
