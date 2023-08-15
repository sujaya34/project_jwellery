import React from "react";
import Image1 from "../../../Assets/images/great_indian_wedding_1300_2_.gif";
import Image2 from "../../../Assets/images/second.gif";
import Image3 from "../../../Assets/images/third.gif";
import Image4 from "../../../Assets/images/fourth.gif";
import Image5 from "../../../Assets/images/fifth.gif";
import Image6 from "../../../Assets/images/sixth.gif";
import Image7 from "../../../Assets/images/seventh.gif";
function GridDefinition() {
  return (
    <div className="grid-container">
      <div className="grid-item-1 gallery">
        <img src={Image1} className="gallery" />
      </div>
      <div className="grid-item-2 gallery">
        <img src={Image2} className="gallery" />
      </div>
      <div className="grid-item-3 gallery">
        <img src={Image3} className="gallery" />
      </div>
      <div className="grid-item-4 gallery">
        <img src={Image4} className="gallery" />
      </div>
      <div className="grid-item-5 gallery">
        <img src={Image5} className="gallery" />
      </div>
      <div className="grid-item-6 gallery">
        <img src={Image6} className="gallery" />
      </div>
      <div className="grid-item-7 gallery">
        <img src={Image7} className="gallery" />
      </div>
    </div>
  );
}

export default GridDefinition;
