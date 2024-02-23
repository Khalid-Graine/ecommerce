import React from "react";
import OfferBanner from "../components/parts/header/OfferBanner";
import Secondbanner from "../components/parts/header/Secondbanner";
import TheMainHeader from "../components/parts/header/TheMainHeader";
import SearchBar from "../components/parts/header/SearchBar";
import TheSecondaryHeader from "../components/parts/header/TheSecondaryHeader";

const TheHeader = () => {
  return (
    <div>
      <OfferBanner />
      <Secondbanner />
      <div className="bg-1 flex flex-col gap-2 py-2">
        <TheMainHeader />
        <SearchBar devices="sm" />
      </div>

      <TheSecondaryHeader />
    </div>
  );
};

export default TheHeader;
