import React from "react";
import Button from "@mui/material/Button";
import "./Button.css";

const CustomizedButton = (props) => {
  const { onClick, disabled = false, text, startIcon = false, endIcon= false, classProperties,style, leftIcon, rightIcon} =
    props;
  const iconStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Button onClick={onClick} disabled={disabled} className={classProperties} style={{...style}}>
        {startIcon && (
          <span style={iconStyles}>
            <img src={leftIcon} />
          </span>
        )}
        <span>{text}</span>
        {endIcon && (
          <span style={iconStyles}>
            <img src={rightIcon} />
          </span>
        )}
      </Button>
    </>
  );
};

export default CustomizedButton;
