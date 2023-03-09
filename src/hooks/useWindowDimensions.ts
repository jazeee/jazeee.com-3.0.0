import { useState, useEffect } from "react";

const _window = typeof window !== `undefined` ? window : {
  outerHeight: 100,
  outerWidth: 100,
  addEventListener: () => {},
  removeEventListener: () => {},
};

function getWindowDimensions() {
  const { outerWidth: width, outerHeight: height } = _window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    _window.addEventListener("resize", handleResize);
    return () => _window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
