import React from "react";
import JwelleryCard from "./JwelleryCard";
import CardDetail from "./CardDetail";

import { useState } from "react";
const JwelleryCardMain = () => {
  const [showCards, setShowCards] = useState(true);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  return (
    <div className="app">
      {showCardDetails && <CardDetail selectedCards={selectedCards} />}
      {showCards && (
        <JwelleryCard
          setShowCardDetails={setShowCardDetails}
          setShowCards={setShowCards}
          setSelectedCards={setSelectedCards}
        />
      )}
    </div>
  );
};

export default JwelleryCardMain;
