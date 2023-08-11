import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import checkbox from "../assests/images/checkbox.svg";
import checkboxDisable from "../assests/images/checkboxDisable.svg";
import checkboxChecked from "../assests/images/checkboxChecked.svg";
import checkboxCheckDisable from "../assests/images/checkboxDisable.svg";
import checkboxNeutral from "../assests/images/checkboxNeutral.svg";
import checkboxNeutralDisabe from "../assests/images//checkboxNeutralDisable.svg";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    padding: "0px !important",
    margin: "0px !important",
  },
}));

const MainCheckbox = (props) => {
  const classes = useStyles();
  const { disable, neutral, isChecked, handleCheckboxChange, id } = props;
  const handleChange = (event) => {
    handleCheckboxChange(id)
  };

  return (
    <Checkbox
      icon={
        disable ? (
          <img src={checkboxDisable} alt="Checkbox" />
        ) : (
          <img src={checkbox} alt="Checkbox" />
        )
      }
      checkedIcon={
        disable ? (
          <img src={checkboxCheckDisable} alt="Checkbox" />
        ) : (
          <img src={checkboxChecked} alt="Checkbox" />
        )
      }
      checked={isChecked}
      indeterminateIcon={
        disable ? (
          <img src={checkboxNeutralDisabe} alt="Checkbox" />
        ) : (
          <img src={checkboxNeutral} alt="Checkbox" />
        )
      }
      indeterminate={neutral ? true : undefined}
      onChange={handleChange}
      disabled={disable}
      className={classes.checkbox}
    />
  );
};

export default MainCheckbox;
