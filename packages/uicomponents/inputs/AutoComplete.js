import React, { useState, useEffect } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TextField, Icon } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import errorImg from '../assests/images/errorImg.svg'


const filter = createFilterOptions();

const useStyles = makeStyles({
  
  
  autocomplete: {
    "& .MuiInput-root:before": {
      
      borderBottom: (props) => props?.showUnderline?'1px solid #9497A1 !important' :"none",
    },
    "& .MuiInput-root:after": {
      borderBottom: "2px solid #1976d2 !important",
    },
    "& .MuiInputBase-root.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before":
      {
        transition: "none !important",
        borderBottom: "2px solid #1976d2 !important",
      },
    "& .MuiSvgIcon-root": {
      fontSize: "16px !important",
    },
  },
  popUpHover: {
    "& .MuiInput-root:before": {
      borderBottom: (props) => props?.showUnderline?'1px solid #949791 !important' :"none",
    },
    "& .MuiInput-root:after": {
      borderBottom: "2px solid #1976d2 !important",
    },
    "& .MuiInputBase-root.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before":
      {
        transition: "none !important",
        borderBottom: "2px solid #1976d2 !important",
      },
    "& .MuiAutocomplete-popupIndicator": {
      visibility: "hidden",
    },

    "&:hover .MuiAutocomplete-popupIndicator": {
      visibility: "visible",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "16px !important",
    },
  },

  optionContainer: {
    "&::-webkit-scrollbar": {
      width: "0px",
    },
  },

  optionsWithoutScroll: {
    "&::-webkit-scrollbar": {
      width: "0px",
      backgroundColor: "transparent",
    },
  },
  optionsWithScroll: {
    "&::-webkit-scrollbar": {
      width: "5px",
      backgroundColor: "rgba(7, 87, 121, 1)",
    },
  },
  dropdown: {
    width: (props) => props?.dropDownStyle?.width || "auto",
    border: (props) => props?.dropDownStyle?.border || "none",
  },

  root: {
    borderRadius: "4px",
    top: "10%",
   // width: "100%",
   "& input::placeholder": {
    color:"#9497A1 !important",
    opacity: "0.7",
    textOverflow: "ellipsis",
    fontWeight: "400 !important",
    },
    "& .MuiInput-root": {
      paddingLeft: "8px",
      paddingRight: "8px !important",
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight:"600 !important",
      height: (props) => props?.height?props?.height:"25px"
    },
    "& .MuiInput-input": {
      paddingLeft: (props) => props?.startIcon?'8px !important':'0px !important',
     
      paddingRight: "8px !important",
      paddingTop: "4px !important",
      paddingBottom: "4px !important",

      //width:'auto !important'
    },

    "& .MuiAutocomplete-endAdornment": {
      right: "5px",
      top: "calc(50% - 10px)",
    },
    "& .MuiAutocomplete-clearIndicator": {
      display: "none",
    },
    "& .MuiAutocomplete-inputRoot": {
      paddingRight: "8px !important",
    },
  },

  root2: {
    "& .MuiAutocomplete-inputRoot": {
      paddingRight: "0px !important",

      "&:hover": {
        paddingRight: "8px !important",
      },
    },
  },

  optionsContainer: {
    backgroundColor: "white !important",
    height: "36px",
    fontFamily: "Inter",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#CCCCCC !important",
    },
  },
  inputAdornment: {
    marginRight: "0px !important",
  },
  inputAdornment2: {
    marginRight: "15px !important",
  },
  

  errorIcon: {
    position: "absolute",
    right: "-6.5px",
    bottom: "3px",
  },
  arrowRightIcon: {
    color: "#CF3B3B",
    rotate: "45deg",
  },
  mandatoryIcon1: {
    padding: "0px",

    position: "absolute",
    //marginLeft: "-2px",
    bottom: "0px",

    zIndex: "1",
  },
  mandatoryIcon2: {
    padding: "0px",

    position: "absolute",

    bottom: "0px",
    zIndex: "1",
    //marginLeft: "2px",
  },
  one: {
    visibility: "visible !important",
  },
  two: {
    visibility: "hidden !important",
  },
});

const AutoComplete = (props) => {
  const classes = useStyles(props);
  const {
    label,
    option,
    placeholder,
    value,
    add,
    dropDownStyle,
    mandatory,
    popUpHover,
    classProperties,
    startIcon,
    endIcon,showUnderline,  id,error,
    name,style
  } = props;

  const [data, setData] = React.useState ("");
  const [isHovered, setIsHovered] = React.useState(false);
  
  
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  React.useEffect(() => {
    setData(props.value);
  }, [props.value]);

  const handleChange = (event, value) => {
    
      if (value === null) {
        setData(value);
        props.handledata(id, name, value,event);
      } else if (typeof value === "string") {
        setData({
          title: value,
        }
      );
     props.handledata(id, name, value,event);
      } else if (value && value.inputValue) {
        setData({
          title: value.inputValue,
        }

        
        );
        props.handledata(id, name, value.inputValue,event);
      } else {
        setData(value);
      }
    // props.handledata(id, name, value,event);
    //console.log("event.target.name.value",event.target.name,event.target.value)
    
  };

  return (
    <Autocomplete
    blurOnSelect ={true}
      onMouseEnter={handleMouseEnter} // Handle mouse enter event
      onMouseLeave={handleMouseLeave}
      className={
        
        !popUpHover || popUpHover === undefined
          ? classes.autocomplete
          : classes.popUpHover
      }
      popupIcon={<KeyboardArrowDownIcon />}
      style={{ ...style  }}
      multiple={props.multiple}
      options={option?.length > 0 ? option.map((option) => option.value) : []}
      onChange={( event,value) => handleChange(event,value)}
      error = {Boolean(error)}
      classes={{
        listbox: props.scrollInVisible
          ? classes.optionsWithoutScroll
          : classes.optionsWithScroll,
        option: classes.optionsContainer,
        paper: props.dropDownStyle ? classes.dropdown : null,
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== "" && add === true) {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered.slice(0, 200);
      }}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        if (option.title) {
          return option.title;
        }

        return option.inputValue;
      }}
      isOptionEqualToValue={(option, value) =>
        option === value.title || option !== value.title
      }
      name={name}
      value={data ? data : null}
      renderInput={(params) => {
        return (
          <TextField
            // error={(mandatory===true || label?.includes("*")||placeholder?.includes("*"))&& (data===""|| data===null || data===undefined)?true:false}

            //className={classes.root}
            className={
              !popUpHover || popUpHover === undefined
                ? classes.root
                : `${classes.root} ${classes.root2}`
            }
            {...params}
            size="small"
            label={label}
           // style={{ width: "100%" }}
            placeholder={placeholder}
            variant="standard"
            name={name}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  {params.InputProps.startAdornment}
                  {startIcon && <InputAdornment>{startIcon}</InputAdornment>}
                </>
              ),
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                  {endIcon && (
                    <InputAdornment
                     
                      className={
                        mandatory &&
                        (popUpHover === undefined || popUpHover === false)
                          ? classes.inputAdornment2
                          : mandatory && isHovered && popUpHover
                          ? classes.inputAdornment2
                          : (mandatory === false || mandatory === undefined) &&
                            (popUpHover === undefined || popUpHover === false)
                          ? classes.inputAdornment2
                          : (mandatory === false || mandatory === undefined) &&
                            isHovered &&
                            popUpHover
                          ? classes.inputAdornment2
                          : classes.inputAdornment
                      }
                    >
                      {endIcon}
                    </InputAdornment>
                  )}

                  {mandatory ? (
                    <InputAdornment
                      position="end"
                    
                    >
                      <img
                        src={errorImg}
                        alt="Error icon"
                        className={
                          isHovered && popUpHover
                            ? classes.mandatoryIcon2
                            : classes.mandatoryIcon1
                        }
                      />
                    </InputAdornment> ): <InputAdornment
                      position="end"
                      style={{visibility:'hidden'}}
                    >
                      <img
                        src={errorImg}
                        alt="Error icon"
                        className={
                          isHovered && popUpHover
                            ? classes.mandatoryIcon2
                            : classes.mandatoryIcon1
                        }
                      />
                    </InputAdornment> 
                  }
                </>
              ),
            }}
          />
        );
      }}
    />
  );
};

export default AutoComplete;
