import { ActivityIndicator } from "react-native";
import React from "react";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      <ActivityIndicator animating={isLoading} />
    </>
  );
};

export default Loader;
