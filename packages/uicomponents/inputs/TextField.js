import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { makeStyles } from "@mui/styles";
import errorImg from '../assests/images/errorImg.svg'
import eventBus from '../../apiIntegration/WebSocket/eventBus';	
import webSocketSendData from '../../apiIntegration/WebSocket/webSocketSendData';
//import { boolean } from 'joi';

const useStyles = makeStyles((theme) => ({
  icon: {
    cursor: 'pointer',
    '& .MuiSvgIcon-root':{
      fontSize:"16px !important",
    }
  },
  disabledIcon: {
      cursor: 'pointer',
      color: "#9497A1 !important",
      '& .MuiSvgIcon-root':{
        fontSize:"16px !important",
      }
  },
  root: {
    '& > *': {
      cursor: 'pointer',
    },
    borderRadius: "4px",
     width: (styles) => styles?.width ? styles?.width: '540px',
    height: "24px !important",
    "& input::placeholder": {
      color:"#9497A1 !important",
      opacity: "0.7",
      textOverflow: "ellipsis",
      fontWeight: "400 !important",
    },
    '& .MuiInput-input':{
      color: "#050E25 !important",
      // color: (styles) => styles?.color ? styles?.color + " !important": '',
      //color: '#ffffff',
      fontFamily: "Inter !important",
      fontSize:"12px !important",
      height:"16px !important",
      fontWeight:"600 !important",
      padding:"4px 8px 4px 8px !important",
    }
  },
  root1: {
    '& > *': {
      cursor: 'pointer',
    },
    borderRadius: "4px",
     width: (styles) => styles?.width ? styles?.width: '540px',
    height: "32px",
    "& input::placeholder": {
      color:"#9497A1 !important",
      opacity: "0.7",
      textOverflow: "ellipsis",
      fontWeight: "400 !important",
    },
    '& .MuiInput-input':{
      //color: "#050E25 !important",
      fontFamily: "Inter !important",
      fontSize:"12px !important",
      height:"16px !important",
      fontWeight:"600 !important",
      padding:"8px !important",
    }
  },
  underline: {
    '&:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#3874FF !important',
    },
    '&:not(:hover):not(.Mui-disabled):before': {
      borderBottom: "1px solid #EFF0F1",
    },
  },
  mandatoryIcon:{
     padding:"0px",
     color:"#CF3B3B",
     flex: "none",
     position:"absolute",
     right:"0px",
     bottom:"0px",
     order: "1",
     flexGrow: "0",
     zIndex: "1"
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
    paddingLeft:"8px",
    paddingTop:"4px",
    marginTop:"0px !important"
  },
}))

const TextFields = (props) => {
  const classes = useStyles(props.styles);
  const {size,variant, placeholder, mandatory, iconType, helperText, showEndAdornment, showStartAdornment, isDisabled,disableLine,isNormalField ,style,name,id,className ,error, value} = props
  //  const { ws, jobId, isWebSocketAlive, fieldKey, userId } = props.propData
  
 
  const [read, setRead] = React.useState(false)
  const [data, setData] = useState(value)
  const [disable, setDisable] = React.useState(disableLine)
  
 

  // React.useEffect(() => {
  //   setData(value)
  // } )
  // React.useEffect(() => {
  //   eventBus.subscribeToEvent(fieldKey, (data) => {
  //     setData(data.eventData.changedValue)
  //   })
  //   return () => {
  //     eventBus.removeEventSubscription(fieldKey)
  //   }
  // }, [fieldKey])


  const handleMouseEnter = () => {
    if (isDisabled!==true && disable === true) {
      setDisable(false)
    }
  };

  const handleMouseLeave = () => {
    if (disable === false) {
      setDisable(true)
    }
  };

  const handleChange = event => {
    setData(event.target.value)
    if (disable === true) {
      setDisable(false)
    }
  }

  const handleDisable = (event) => {
    setData(event.target.value)
  //  const wssData = { jobId: jobId, userId: userId, initialValue: data, changedValue: event.target.value, field: fieldKey, ws }
   // webSocketSendData(wssData)
    setDisable(true)
  }
  
  return (
    <TextField
      autoComplete='off'
      size={size?size:"medium"}
      variant={variant}
      placeholder={placeholder}
      helperText={helperText ? helperText : ""}
      onChange={handleChange}
           // error = {Boolean(error)}
      onBlur={handleDisable}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isNormalField? classes.root1:classes.root}
      disabled={isDisabled}
      value={data}
      style={{...className,...style}}
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
          <InputAdornment position="end" className={isDisabled ? classes.disabledIcon : classes.icon} >
             {iconType}  
          </InputAdornment>
        ),
        endAdornment: (
          <>
            {showEndAdornment && (
              <InputAdornment
                position="start"
                className={isDisabled?classes.disabledIcon: classes.icon}
              >
               {iconType} 
              </InputAdornment>
            )}
             {mandatory && (
              <InputAdornment position="end" >
                <img src={errorImg} alt="Error" className={classes.mandatoryIcon}  />               
              </InputAdornment>
            )}
          </>
        ),
      }}
    />
  )
}

export default TextFields