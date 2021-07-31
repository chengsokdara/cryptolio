import React from "react";
import { Button as PaperButton } from "react-native-paper";

type TButtonProp = {
  label?: string;
  children?: React.ReactChild;
};

const Button = ({ label, children }: TButtonProp) => {
  return <PaperButton>{label || children}</PaperButton>;
};

export default Button;
