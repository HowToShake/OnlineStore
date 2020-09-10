export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};
