import React, { useEffect, useState } from "react";

const ImageSlider = ({ imageSets }) => {
  const [currentIndexes, setCurrentIndexes] = useState(imageSets.map(() => 0));

  useEffect(() => {
    const getRandomInterval = () => {
      return Math.floor(Math.random() * 2000) + 2500;
    };

    const randomIntervals = imageSets.map(() => getRandomInterval());

    const imageSetIntervals = randomIntervals.map((interval, index) =>
      setInterval(() => {
        setCurrentIndexes((prevIndexes) =>
          prevIndexes.map((prevIndex, setIndex) =>
            setIndex === index
              ? (prevIndex + 1) % imageSets[setIndex].urls.length
              : prevIndex
          )
        );
      }, interval)
    );

    const transitionInterval = setInterval(() => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map(
          (prevIndex, index) => (prevIndex + 1) % imageSets[index].urls.length
        )
      );
    }, 3000);

    return () => {
      imageSetIntervals.forEach((interval) => clearInterval(interval));
      clearInterval(transitionInterval);
    };
  }, [imageSets]);

  return (
    <div className="image-slider">
      {imageSets.map((imageSet, setIndex) => (
        <div key={setIndex} className="image-set">
          <div className="circle me-5">
            <img
              src={imageSet.urls[currentIndexes[setIndex]]}
              alt={`Slide ${currentIndexes[setIndex] + 1}`}
            />
          </div>
          <div className="name me-5">{imageSet.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
