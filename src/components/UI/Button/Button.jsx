import React from "react";
import { BasicButton } from "./button.styles";
import { BigButton } from "./button.styles";
import { SmallButton } from "./button.styles";
import { BUTTON_VARIATIONS } from "./buttonVariations";

const getButton = (variation = BUTTON_VARIATIONS.basic) =>
  ({
    [BUTTON_VARIATIONS.basic]: BasicButton,
    [BUTTON_VARIATIONS.big]: BigButton,
    [BUTTON_VARIATIONS.small]: SmallButton,
  }[variation]);

const StyledButton = ({ children, variation, ...otherProps }) => {
  const StyledButton = getButton(variation);
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default StyledButton;
