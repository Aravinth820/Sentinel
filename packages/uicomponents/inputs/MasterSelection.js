import React, { useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { TextField, Icon } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { InputAdornment } from "@mui/material";
import { makeStyles } from "@mui/styles";
import errorImg from "../assests/images/errorImg.svg";
import eventBus from "../../apiIntegration/WebSocket/eventBus";
import webSocketSendData from "../../apiIntegration/WebSocket/webSocketSendData";

//import { boolean } from 'joi';

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
    width: (styles) => (styles?.width ? styles?.width : "540px"),
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
    width: (styles) => (styles?.width ? styles?.width : "540px"),
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
}));
const columns = [
  { id: "importerIec", label: "IEC" },
  { label: "importedId", id: "importerId" },
  { id: "importerName", label: "Name" },
];
const listData = [
  {
    importerIec: "AABCF2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "NFl2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "MNO2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "PQRF2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "SDFRF2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "HYTR2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "234rfrffrc2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "wedededAABCF2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "eddeAABCF2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "SDFGHJ2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "DFRGTHYJUKI2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "DFGHJK2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
  {
    importerIec: "EDTFGHYUJI2133MCH001",
    importerName: "importerId",
    importerId: "456",
  },
];

export default function ComboBox(props) {
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
  const { ws, jobId, isWebSocketAlive, fieldKey, userId } = props.propData;

  const [isEntering, setEntering] = useState(false);
  const [read, setRead] = React.useState(false);
  const [data, setData] = useState(value ? value : "");
  const [disable, setDisable] = React.useState(disableLine);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    eventBus.subscribeToEvent(fieldKey, (data) => {
      setData(data.eventData.changedValue);
    });
    return () => {
      eventBus.removeEventSubscription(fieldKey);
    };
  }, [fieldKey]);

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
    setEntering(true);
    if (event.target.value.length === 0) {
      setOpen(false);
    }
    setData(event.target.value);
    if (disable === true) {
      setDisable(false);
    }
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
  };
  const handleTablePopUp = () => {
    setOpen(false);
  };
  const handleFocus = () => {
    setOpen(true);
  };

  return (
    <div
      style={{ position: "relative",}}
      onBlur={handleTablePopUp}
      onFocus={handleFocus}
    >
      <TextField
        key={props.keyName}
        autoComplete="off"
        //size={size ? size : "medium"}
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
        style={{ ...className, ...style, width: "100%" }}
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
            <>
              {showEndAdornment && (
                <InputAdornment
                  position="start"
                  className={isDisabled ? classes.disabledIcon : classes.icon}
                >
                  {iconType}
                </InputAdornment>
              )}
              {mandatory && (
                <InputAdornment position="end">
                  <img
                    src={errorImg}
                    alt="Error"
                    className={classes.mandatoryIcon}
                  />
                </InputAdornment>
              )}
            </>
          ),
        }}
      />
      {open ? (
        <TableContainer
          className={classes.Table}
          key="text"
          component={Paper}
          style={{
            position: "absolute",
            zIndex: "1000",
           // border: "2px solid red",
            width: "340px",
            height: "275px",
          }}
          onFocus={handleFocus}
        >
          <Table>
            <TableHead className={classes.tableHeadContainer}>
              <div className={classes.tableHead}>
                <TableRow className={classes.tableRow}>
                  {columns.map((headCell) => (
                    <TableCell>{headCell.label}</TableCell>
                  ))}
                </TableRow>
              </div>
            </TableHead>
            <TableBody>
              {listData?.map((row) => (
                <TableRow
                  key={row.option}
                  onClick={() => props.handleSelectedRowData(row)}
                >
                  {columns.map((headCell) => (
                    <TableCell> {row[headCell.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </div>
  );
}
