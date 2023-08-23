import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import errorImg from "../assests/images/errorImg.svg";
import eventBus from "../../apiIntegration/WebSocket/eventBus";
import webSocketSendData from "../../apiIntegration/WebSocket/webSocketSendData";
import { valid } from "joi";
import InputAdornment from "@mui/material/InputAdornment";
import Icon from "@mui/material/Icon";
import MasterSelectionTable from "./MasterSelectionTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => ({
  icon: {
    cursor: "pointer",
    "& .MuiSvgIcon-root": {
      fontSize: "16px !important",
    },
  },
  disabledIcon: {
    cursor: "pointer",
    color: "#9497A1 !important",
    "& .MuiSvgIcon-root": {
      fontSize: "16px !important",
    },
  },
  root: {
    "& > *": {
      cursor: "pointer",
    },
    borderRadius: "4px",
    // width: (styles) => (styles?.width ? styles?.width : "540px"),
    height: "24px !important",
    "& input::placeholder": {
      color: "#9497A1 !important",
      opacity: "0.7",
      textOverflow: "ellipsis",
      fontWeight: "400 !important",
    },
    "& .MuiInput-input": {
      color: "#050E25 !important",
      //color: '#ffffff',
      fontFamily: "Inter !important",
      fontSize: "12px !important",
      height: "16px !important",
      fontWeight: "400 !important",
      padding: "4px 8px 4px 8px !important",
    },
    "& .MuiInput-root:before": {
      borderBottom: "1px solid #EFF0F1 !important",
    },
    "& .MuiInput-root:after": {
      borderBottom: "1px solid  #3874FF !important",
    },
  },
  root1: {
    "& > *": {
      cursor: "pointer",
    },
    borderRadius: "4px",
    width: (styles) => (styles?.width ? styles?.width : "100%"),
    height: "32px",
    "& input::placeholder": {
      color: "#9497A1 !important",
      opacity: "0.7",
      textOverflow: "ellipsis",
      fontWeight: "400 !important",
    },
    "& .MuiInput-input": {
      //color: "#050E25 !important",
      fontFamily: "Inter !important",
      fontSize: "12px !important",
      height: "16px !important",
      fontWeight: "400 !important",
      padding: "8px !important",
    },
    "& .MuiInput-root:before": {
      borderBottom: "1px solid #EFF0F1 !important",
    },
    "& .MuiInput-root:after": {
      borderBottom: "1px solid  #3874FF !important",
    },
  },
  underline: {
    "&:hover:not(.Mui-disabled):before": {
      borderBottomColor: "#3874FF !important",
    },
  },

  mandatoryIcon: {
    padding: "0px",
    color: "#CF3B3B",
    flex: "none",
    position: "absolute",
    right: "0px",
    bottom: "0px",
    order: "1",
    flexGrow: "0",
    zIndex: "1",
  },
  helperText: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    display: "flex",
    alignItems: "center !important",
    color: "#9497A1 !important",
    pointerEvents: "none !important",
    paddingLeft: "8px",
    paddingTop: "4px",
    marginTop: "0px !important",
  },
  enteringText: {
    "& .MuiInput-input": {
      fontWeight: "600 !important",
    },
  },
  Table: {
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "5px",
      backgroundColor: "transparent !important",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#CDCFD3 !important",
      height: "76.58px !important",
      borderRadius: "22px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent !important",
    },
  },
  TableCellInfo: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    wordBreak: "break-word",
    fontFamily: "Inter !important",
    fontSize: "12px !important",
    
  },
}));
const columns = [
  { id: "importerIec", label: "IEC" },
  {id: "importerId" ,label: "importedId",},
  { id: "importerName", label: "Name" },
];


const MasterTextFields = (props) => {
  const classes = useStyles(props.styles);
  const {
    size,
    variant,
    placeholder,
    mandatory,
    iconType,
    helperText,
    showEndAdornment,
    showStartAdornment,
    isDisabled,
    disableLine,
    isNormalField,
    style,
    name,
    id,
    className,
    error,
    value,
  } = props;
  console.log('value is coming',value)
  //const { ws, jobId, isWebSocketAlive, fieldKey, userId } = props.propData;
  //console.log('propData in TextField',props.propData)

  const [isEntering, setEntering] = useState(false);
  const [read, setRead] = React.useState(false);
  const [data, setData] = useState(value ? value : "");
  const [disable, setDisable] = React.useState(disableLine);
  const [open, setOpen] = React.useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  // React.useEffect(() => {
  //   eventBus.subscribeToEvent(fieldKey, (data) => {
  //     setData(data.eventData.changedValue);
  //   });
  //   return () => {
  //     eventBus.removeEventSubscription(fieldKey);
  //   };
  // }, [fieldKey]);
 
React.useEffect(()=>{

  setData(props.value)

  
},[props.value])

  const handleMouseEnter = () => {
    if (isDisabled !== true && disable === true) {
      setDisable(false);
    }
  };

  const handleMouseLeave = () => {
    if (disable === false) {
      setDisable(true);
    }
  };

  const handleChange = (event) => {
    setOpen(true);
    
    setAnchorEl(event.target);
    if (event.target.value.length === 0) {
      setOpen(false);
    }
    setEntering(true);
    setData(event.target.value);
    if (disable === true) {
      setDisable(false);
    }
    //console.log(event.target.value, "event.target.value");
    props.handledata(id, event.target.value);
  };

  const handleOnBlur = (event) => {
    setData(event.target.value);
    const wssData = {
      jobId: jobId,
      userId: userId,
      initialValue: data,
      changedValue: event.target.value,
      field: fieldKey,
      ws,
    };
    webSocketSendData(wssData);
    setDisable(true);
    setEntering(false);
    props.handledata(id, event.target.value);
    setAnchorEl(event.target);
  };
  const handleSelectedRowData = (row) => {
    props.handleSelectedRowData(row);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "45%", marginBottom: "12px" }}>
      <TextField
        key={props.keyName}
        autoComplete="off"
        size={size ? size : "medium"}
        variant={variant}
        placeholder={placeholder}
        helperText={helperText ? helperText : ""}
        onChange={handleChange}
        // error = {Boolean(error)}
        onBlur={handleOnBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          isNormalField
            ? `${classes.root1} ${isEntering && classes.enteringText}`
            : `${classes.root} ${isEntering && classes.enteringText}`
        }
        disabled={isDisabled}
        value={data}
        style={{ ...className }}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
          },
        }}
        InputProps={{
          classes: {
            underline: classes.underline,
          },
          disableUnderline: disable,
          readOnly: read,
          startAdornment: showStartAdornment && (
            <InputAdornment
              position="end"
              className={isDisabled ? classes.disabledIcon : classes.icon}
            >
              {iconType}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              style={{ position: "absolute", marginTop: "-2px", zIndex: "999" }}
            >
              <Icon>
                <MasterSelectionTable
                  open={open}
                  setOpen={setOpen}
                  anchorEl={anchorEl}
                  
                >
                  <div>
                   
                  <TableContainer
                    className={classes.Table}
                    key="text" 
                    component={Paper}
                    style={{ background: "black"}}
                  >
                    <Table stickyHeader aria-label="sticky table" style={{backgroundColor:'black',}}>
                  
                      <TableHead style={{backgroundColor:'black',}}>
                        
                          <TableRow style={{display:'flex',backgroundColor:'black'}}>
                            {columns.map((headCell) => (
                              <TableCell style={{ color: "#ffffff",width:'80px',flexGrow:"1",backgroundColor:'black',position:'sticky',zIndex:'2000'}}>
                                {headCell.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        
                      </TableHead>
                      <TableBody style={{position:'relative',}}>
                        {props.partyMasterData &&
                          props.partyMasterData.length > 0 &&
                          props.partyMasterData.map((row) => (
                            <TableRow style={{display:'flex',}}
                              key={row.option}
                              onClick={() => handleSelectedRowData(row)}
                            >
                              {columns.map((headCell) => (
                                <TableCell
                                  key={headCell.id}
                                  style={{ color: "#ffffff",width:'80px',flexGrow:"1",overFlow:'hidden',textOverflow:'ellipsis'}}
                                  className={classes.TableCellInfo}
                                >
                                  {row[headCell.id]}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>  
                  </TableContainer>
                  
                  </div>
                  
                </MasterSelectionTable>
              </Icon>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default MasterTextFields;
