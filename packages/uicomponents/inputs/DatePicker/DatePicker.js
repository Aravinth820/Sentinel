import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DatePicker from "react-multi-date-picker";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Icon from "react-multi-date-picker/components/icon";
import EventIcon from "@mui/icons-material/Event";
import "./DatePicker.css";

const hours = [
  { value: "01" },
  { value: "02" },
  { value: "03" },
  { value: "04" },
  { value: "05" },
  { value: "06" },
  { value: "07" },
  { value: "08" },
  { value: "09" },
  { value: "10" },
  { value: "11" },
  { value: "12" },
];
const Minute = [
  { value: "01" },
  { value: "02" },
  { value: "03" },
  { value: "04" },
  { value: "05" },
  { value: "06" },
  { value: "07" },
  { value: "08" },
  { value: "09" },
  { value: "10" },
  { value: "11" },
  { value: "12" },
  { value: "13" },
  { value: "14" },
  { value: "15" },
  { value: "16" },
  { value: "17" },
  { value: "18" },
  { value: "19" },
  { value: "20" },
  { value: "21" },
  { value: "22" },
  { value: "23" },
  { value: "24" },
  { value: "25" },
  { value: "26" },
  { value: "27" },
  { value: "28" },
  { value: "29" },
  { value: "30" },
  { value: "31" },
  { value: "32" },
  { value: "33" },
  { value: "34" },
  { value: "35" },
  { value: "36" },
  { value: "37" },
  { value: "38" },
  { value: "39" },
  { value: "40" },
  { value: "41" },
  { value: "42" },
  { value: "43" },
  { value: "44" },
  { value: "45" },
  { value: "46" },
  { value: "47" },
  { value: "48" },
  { value: "49" },
  { value: "50" },
  { value: "51" },
  { value: "52" },
  { value: "53" },
  { value: "54" },
  { value: "55" },
  { value: "56" },
  { value: "57" },
  { value: "58" },
  { value: "59" },
  { value: "60" },
];
const AmPm = [{ value: "am" }, { value: "pm" }];
const useStyles = makeStyles({
  datePicker: {
    borderRadius: "8px",
    marginTop: "50px !Important",
    marginLeft: "-20px",
    backgroundColor: "#050E25",
    width: "auto",
    maxWidth: "100%",
    height: "auto",
    flexGrow: 1,
    padding: "16px 16px 16px 16px",
    "&:before": {
      marginTop: "50px",
      content: "''",
      position: "absolute",
      top: "-12px",
      left: "-4px",
      height: "15px",
      width: "15px",
      backgroundColor: "#050e25",
      transform: "rotate(225deg) translate(-50%)",
    },
    "& .rmdp-ep-arrow:after": {
      backgroundColor: "red !important",
    },
    "& .rmdp-calendar": {
      padding: "16px 0px 0px 0px",
    },
    "& .rmdp-border-bottom": {
      borderBottom: "none",
    },
    "& .rmdp-border-top": {
      borderTop: "none",
    },

    "& .rmdp-year-picker": {
      background: "#050E25",
      padding: "16px 16px 16px 16px",
      "& .rmdp-ym .rmdp-day": {
        //left: '70px'
      },
      "& .rmdp-day span": {
        fontSize: "12px",
        fontFamily: "Inter",
        fontStyle: "normal",
        lineHeight: "16px",
        fontWeight: 600,
        //padding: '4px 3px 4px 3px',
        width: "auto",
        color: "#FFFFFF",
        borderRadius: "4px",
        border: "none",
        boxShadow: "none",
        // marginLeft: '70px',
      },
    },
    "& .rmdp-day-picker": {
      display: "flex",
      justifyContent: "space-between",
      borderWidth: "0px 2px 2px 2px",
      borderStyle: "solid",
      borderColor: "#32394C",
      borderRadius: "0px 0px 5px 5px",
      flex: "none",
      order: 1,
      flexGrow: 0,
      padding: "16px 16px 7px 16px",
      gap: "24px",
    },
    "& .rmdp-range": {
      boxShadow: "none",
      background: "#32394C",
    },
    "& .rmdp-range-hover.start, .rmdp-range.start": {
      borderRadius: "4px 0px 0px 4px",
    },
    "& .rmdp-range-hover.end, .rmdp-range.end": {
      borderRadius: "0px 4px 4px 0px",
    },
    "& .rmdp-month-picker": {
      backgroundColor: "#050E25",
      padding: "16px 16px 16px 16px",
      "& .rmdp-day": {
        // left: '70px'
      },
      "& .rmdp-day span": {
        fontSize: "12px",
        fontFamily: "Inter",
        fontStyle: "normal",
        lineHeight: "16px",
        fontWeight: 600,
        //padding: '4px 13px 4px 3px',
        color: "#FFFFFF",
        flexGrow: 1,
        borderRadius: "4px",
        border: "none",
        boxShadow: "none",
        //marginLeft: '70px',
        width: "auto",
      },
    },
    "& .rmdp-day": {
      color: "#FFFFFF",
      fontWeight: "600",
      fontFamily: "Inter",
      fontStyle: "normal",
      order: 0,
      flexGrow: 1,
      marginBottom: "9px",
    },
    "& .rmdp-day span": {
      borderRadius: "4px",
      height: "24px",
      width: "24px",
      padding: "4px 4px 4px 4px",
      margin: "-2px 0px 0px 1px",
    },
    "& .rmdp-day.rmdp-today span": {
      background: "#3874FF",
    },

    "& .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover": {
      backgroundColor: "#3874FF",
      color: "#fff",
    },
    "& .rmdp-week": {
      display: "flex",
      justifyContent: "center",
      // marginTop: '8px',
    },
    "& .rmdp-week-day": {
      fontFamily: "Inter",
      "& .rmdp-wrapper": {
        background: "red !important",
        borderRadius: "20px",
      },
      fontStyle: "normal",
      fontWeight: 600,
      textAlign: "center",
      color: "#505767",
      width: "24px",
      height: "24px",
      padding: "0px 8px 0px 8px",
      marginBottom: "9px",
    },
    "& .rmdp-header-values": {
      fontFamily: "Inter",
      fontStyle: "normal",
      lineHeight: "16px",
      fontWeight: 400,
      fontSize: "12px",
      color: "#FFFFFF",
      flex: "none",
      order: 0,
      flexGrow: 0,
      padding: "7px 0px 9px 0px",
    },
    "& .rmdp-header": {
      background: "#242C40",
      border: "1px solid #32394C",
      borderRadius: "5px 5px 0px 0px",
      flex: "none",
      order: 0,
      flexGrow: 0,
      marginTop: "0px",
    },
    "& .rmdp-arrow-container": {
      height: "14px",
      width: "14px",
      margin: "0px 12px 0px 12px",
      display: "flex",
      justifyContent: "center",
    },
    "& .rmdp-arrow-container:hover": {
      boxShadow: "none",
    },
    "& .rmdp-arrow": {
      border: "solid #FFFFFF",
      borderWidth: "0 2px 2px 0",
      padding: "1px",
    },
  },
  fromDateTime: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    color: "#9497A1",
    margin: "0px 0px 8px 0px",
  },
  span: {
    left: "0px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#FFFFFF",
  },
  auto: {
    width: '60px',
    textAlign: "center",
    marginTop: "30%",
  },
  dateTextField: {
    "& .MuiInputLabel-root": {
      color: "#9497A1",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      left: "8px",
    },
    "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      liwrapperneHeight: "16px",
      color: "black",
      flex: "none",
      order: 0,
      flexGrow: 0,
      textAlign: "center",
      width: "285px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #626776",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #626776",
    },
  },
  calenderIcon: {
    color: "#CDCFD3",
    height: "16px",
    width: "16px",
    right: "8px",
  },
  pluginMsg: {
    fontSize: "14px",
    textAlign: "left",
    fontFamily: "Inter",
    fontStyle: "normal",
    color: "#FFFFFF",
    fontWeight: 600,
    lineHeight: "16px",
  },
  optionContainer: {
    backgroundColor: "#050E25 !important",
    color: "white !important",
    lineHeight: "32px",
    fontSize: "12px",
    "&::-webkit-scrollbar": {
      width: "5px",
      height: "5px",
      backgroundColor: "#e6e6e6",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(7, 87, 121, 1)",
      height: "154px",
      borderRadius: "4px",
    },
  },
  customTextField: {
    width: "60px",
    marginTop: "-12px !important",
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #626776",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #626776",
    },
    "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      color: "#FFFFFF !important",
      flex: "none",
      order: 0,
    },
  },
  options: {
    fontSize: "12px",
    fontWeight: 400,
    fontFamily: "Inter",
    lineHeight: "16px",
  },
  wrapper: {
    backgroundColor: "red !important",
    "& .rmdp-wrapper": {
      background: "green !important",
    },
  },
  rangeFooterContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    gap: "16px",
  },
  fromDateContainer: {
    display: "flex",
    maxWidth: "296px",
    flexGrow: 1,
  },
  startDate: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  arrowDownIcon: {
    color: "#CDCFD3",
    width: "16px !important",
    height: "16px",
  },
  buttonContainer: {
    // height: '56px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0px 0px 0px",
  },
  btnCancel: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: 600 + "!important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    textTransform: "none !important",
    color: "#3874FF !important",
    height: "24px !important",
    marginLeft: "-8px !important",
  },
});

export function MyRangePickerFooter({
  startDate,
  endDate,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
  numberOfMonths,
  time,
  setTime,
}) {
  function handleChange(event, time) {
    const { value } = event.target;
    if (value) {
      setTime((prevSelection) => ({ ...prevSelection, [time]: value }));
    }
  }
  const defaultProps = {
    getOptionLabel: (option) => option.value,
  };
  const classes = useStyles();
  const inputStyle = {
    color: "red",
  };
  return (
    <Grid container className={classes.rangeFooterContainer}>
      <Grid container className={classes.fromDateContainer}>
        <p className={classes.fromDateTime}>From Date & Time</p>
        <Grid className={classes.startDate}>
          <Grid item>
            <span className={classes.span}>{startDate}</span>
          </Grid>
          <Grid item>
            {/* <TextField variant='standard' style={{width: "6rem"}} label="Start Time" type="time" value={time.startTime} onChange={(e)=>{handleChange(e,"startTime")}} /> */}
            <Autocomplete
              disableClearable
              popupIcon={
                <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
              }
              className={classes.auto}
              classes={{
                paper: classes.optionContainer,
                option: classes.options,
              }}
              {...defaultProps}
              id="Start-Hour"
              options={hours}
              value={startTime.h ? startTime.h : null}
              onChange={(event, newValue) => {
                setStartTime((prevSelection) => ({
                  ...prevSelection,
                  h: newValue,
                }));
                event.stopPropagation();
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="hour"
                  variant="standard"
                  className={classes.customTextField}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Autocomplete
              disableClearable
              popupIcon={
                <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
              }
              {...defaultProps}
              className={classes.auto}
              id="Start-Minute"
              classes={{
                paper: classes.optionContainer,
                option: classes.options,
              }}
              options={Minute}
              value={startTime.min ? startTime.min : null}
              onChange={(event, newValue) => {
                setStartTime((prevSelection) => ({
                  ...prevSelection,
                  min: newValue,
                }));
                event.stopPropagation();
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="min"
                  variant="standard"
                  className={classes.customTextField}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Autocomplete
              disableClearable
              popupIcon={
                <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
              }
              {...defaultProps}
              className={classes.auto}
              id="Start-Time"
              classes={{
                paper: classes.optionContainer,
                option: classes.options,
              }}
              options={AmPm}
              value={startTime.time ? startTime.time : null}
              onChange={(event, newValue) => {
                setStartTime((prevSelection) => ({
                  ...prevSelection,
                  time: newValue,
                }));
                event.stopPropagation();
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="am/pm"
                  variant="standard"
                  className={classes.customTextField}
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      {numberOfMonths > 1 && (
        <Grid container className={classes.fromDateContainer}>
          <p className={classes.fromDateTime}>To Date & Time</p>
          <Grid className={classes.startDate}>
            <Grid item>
              <span className={classes.span}>{endDate}</span>
            </Grid>
            <Grid item>
              {/* <TextField variant='standard' style={{width: "6rem"}} label="End Time" type="time" value={time.endTime} onChange={(e)=>{handleChange(e,"endTime")}} /> */}
              <Autocomplete
                popupIcon={
                  <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
                }
                disableClearable
                className={classes.auto}
                classes={{
                  paper: classes.optionContainer,
                  option: classes.options,
                }}
                {...defaultProps}
                id="end-Hour"
                options={hours}
                value={endTime.h ? endTime.h : null}
                onChange={(event, newValue) => {
                  setEndTime((prevSelection) => ({
                    ...prevSelection,
                    h: newValue,
                  }));
                  event.stopPropagation();
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="hour"
                    variant="standard"
                    className={classes.customTextField}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                popupIcon={
                  <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
                }
                disableClearable
                {...defaultProps}
                classes={{
                  paper: classes.optionContainer,
                  option: classes.options,
                }}
                className={classes.auto}
                id="end-Minute"
                options={Minute}
                value={endTime.min ? endTime.min : null}
                onChange={(event, newValue) => {
                  setEndTime((prevSelection) => ({
                    ...prevSelection,
                    min: newValue,
                  }));
                  event.stopPropagation();
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="min"
                    variant="standard"
                    className={classes.customTextField}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disableClearable
                popupIcon={
                  <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
                }
                {...defaultProps}
                className={classes.auto}
                classes={{
                  paper: classes.optionContainer,
                  option: classes.options,
                }}
                id="end-Time"
                options={AmPm}
                value={endTime.time ? endTime.time : null}
                onChange={(event, newValue) => {
                  setEndTime((prevSelection) => ({
                    ...prevSelection,
                    time: newValue,
                  }));
                  event.stopPropagation();
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="am/pm"
                    variant="standard"
                    className={classes.customTextField}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
function MyPlugin() {
  const classes = useStyles();
  return <div className={classes.pluginMsg}>Select Date & Time Range</div>;
}
const DateRangePicker = (props) => {
  //const [value,setValue]=useState("")
  const [open, setOpen] = useState(false);
  const { numberOfMonths, handleSelectedDate } = props;
  const [time, setTime] = React.useState({
    startTime: null,
    endTime: null,
  });
  const [startTime, setStartTime] = useState({
    h: "",
    min: "",
    time: "",
  });
  const [endTime, setEndTime] = useState({
    h: "",
    min: "",
    time: "",
  });
  const weekDaysFormat = ["S", "M", "T", "W", "T", "F", "S"];
  const [selection, setSelection] = useState({
    startDate: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    endDate: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  });
  const ref = useRef();
  const [dates, setDates] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    //console.log(dates,"dates")
    if (dates.length > 0)
      setSelection((prevSelection) => ({
        ...prevSelection,
        startDate: dates[0]
          ? new Date(dates[0]).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
        endDate: dates[1]
          ? new Date(dates[1]).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
      }));
  }, [dates]);

  const handleSelect = (
    startTime,
    endTime,
    time,
    dates,
    selection,
    setSelection
  ) => {
    let Stime = startTime.h.value;
    let stime = new Date();
    if (Stime) stime.setHours(Number(Stime[0]), Number(Stime[1]));
    let Etime = time.endTime?.split(":");
    let etime = new Date();
    if (Etime) etime.setHours(Number(Etime[0]), Number(Etime[1]));
    let sDate = new Date(dates[0]);
    sDate = sDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    let eDate = new Date(dates[1]);
    eDate = eDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    if (time.startTime === null) {
      let subSelection = {
        ...selection,
        startDate: dates[0] ? sDate : selection.startDate,
        endDate: dates[1] ? eDate : selection.endDate,
      };
      setSelection(subSelection);
      if (numberOfMonths > 1) {
        //setValue(`${subSelection.startDate}, ${startTime.h.value}:${startTime.min.value} ${startTime.time.value} - ${subSelection.endDate}, ${endTime.h.value}:${endTime.min.value} ${endTime.time.value}`)
        handleSelectedDate(
          `${subSelection.startDate}, ${startTime.h.value}:${startTime.min.value} ${startTime.time.value} - ${subSelection.endDate}, ${endTime.h.value}:${endTime.min.value} ${endTime.time.value}`
        );
      } else {
        //setValue(`${subSelection.startDate}, ${startTime.h.value}:${startTime.min.value} ${startTime.time.value}`)
        handleSelectedDate(
          `${subSelection.startDate}, ${startTime.h.value}:${startTime.min.value} ${startTime.time.value}`
        );
      }
    } else if (
      stime.toLocaleTimeString() !== "Invalid Date" ||
      etime.toLocaleTimeString() !== "Invalid Date"
    ) {
      let subSelection = {
        ...selection,
        startDate: dates[0] ? sDate : selection.startDate,
        endDate: dates[1] ? eDate : selection.endDate,
        startTime: stime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        endTime: etime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setSelection(subSelection);
      //setValue(`${subSelection.startDate}, ${subSelection.startTime} - ${subSelection.endDate}, ${subSelection.endTime}`)
      //console.log(subSelection,"selection")
    } else {
      setOpen(true);
    }
  };

  const handleCancel = (selection, setSelection) => {
    let subSelection = {
      ...selection,
      startDate: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      endDate: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      startTime: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      endTime: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setSelection(subSelection);
    //setValue("")
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <DatePicker
        rangeHover={true}
        className={classes.datePicker}
        ref={ref}
        render={<Icon className={classes.calenderIcon} />}
        onChange={(dateObjects) => setDates(dateObjects)}
        selectsStart={true}
        selected={selection.startDate}
        startDate={selection.startDate}
        weekDaysFormat
        endDate={selection.endDate}
        weekDays={weekDaysFormat}
        arrow={false}
        range
        shadow={false}
        numberOfMonths={numberOfMonths}
        plugins={[
          <MyPlugin position="top" />,
          <MyRangePickerFooter
            startDate={selection.startDate}
            numberOfMonths={numberOfMonths}
            startTime={startTime}
            endTime={endTime}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
            time={time}
            setTime={setTime}
            endDate={selection.endDate}
            position="bottom"
          />,
        ]}
      >
        <div className={classes.buttonContainer}>
          <Button
            variant="text"
            className={classes.btnCancel}
            onClick={() => {
              handleCancel(selection, setSelection);
              ref.current.closeCalendar();
            }}
          >
            Cancel
          </Button>
          {!dates[1] ? (
            <Button
              variant="disabled"
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeinght: "16px",
                height: "24px",
                textTransform: "none",
                color: "#505767 !important",
                background: "#242C40",
              }}
              style={{ float: "right" }}
            >
              Select
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeinght: "16px",
                height: "24px",
                textTransform: "none",
                background: "#3874FF",
              }}
              style={{ float: "right" }}
              onClick={() => {
                handleSelect(
                  startTime,
                  endTime,
                  time,
                  dates,
                  selection,
                  setSelection
                );
                ref.current.closeCalendar();
              }}
            >
              Select
            </Button>
          )}
        </div>
      </DatePicker>
    </div>
  );
};
export default DateRangePicker;
