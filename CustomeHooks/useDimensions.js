// dimensions.js
import { Dimensions } from "react-native";
import { useState, useEffect } from "react";

const initialDimensions = Dimensions.get("window");

export const useScreenDimensions = () => {
  const [screenWidth, setScreenWidth] = useState(initialDimensions.width);
  const [screenHeight, setScreenHeight] = useState(initialDimensions.height);

  useEffect(() => {
    const handleChange = ({ window }) => {
      setScreenWidth(window.width);
      setScreenHeight(window.height);
    };

    Dimensions.addEventListener("change", handleChange);

    // return () => {
    //   Dimensions.removeEventListener("change", handleChange);
    // };
  }, []);

  return { screenWidth, screenHeight };
};
