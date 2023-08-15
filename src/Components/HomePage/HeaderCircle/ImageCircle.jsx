import React from "react";
import ImageSlider from "./ImageSlider";
import Er1 from "../../../Assets/images/er1.PNG";
import Er2 from "../../../Assets/images/er2.PNG";
import Er3 from "../../../Assets/images/er3.PNG";
import Er4 from "../../../Assets/images/er4.PNG";

function ImageCircle() {
  const imageSets = [
    {
      id: 1,
      urls: [Er1, Er2, Er3, Er4],
      name: "EARRINGS",
    },
    {
      id: 2,
      urls: [Er1, Er2, Er3, Er4],
      name: "RINGS",
    },
    {
      id: 3,
      urls: [Er1, Er2, Er3, Er4],
      name: "NECK PIECES",
    },
    {
      id: 4,
      urls: [Er1, Er2, Er3, Er4],
      name: "BRACELETS",
    },
    {
      id: 5,
      urls: [Er1, Er2, Er3, Er4],
      name: "ANKLETS",
    },
    {
      id: 6,
      urls: [Er1, Er2, Er3, Er4],
      name: "NOSE PINS",
    },
  ];

  return <ImageSlider imageSets={imageSets} />;
}

export default ImageCircle;
{
}
