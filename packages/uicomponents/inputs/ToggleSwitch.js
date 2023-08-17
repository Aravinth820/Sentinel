import React from "react";
import { Switch, FormControlLabel, Box } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import eventBus from '../../apiIntegration/WebSocket/eventBus';	
import webSocketSendData from '../../apiIntegration/WebSocket/webSocketSendData';

const CustomSwitch = styled(Switch)(({ theme, isCorrect }) => ({
  "& .MuiSwitch-thumb": {
    backgroundColor: "#FFFFFF",
    width: isCorrect ? 8 : 8, // Update width to 8px
    height: isCorrect ? 8 : 8, // Update height to 8px
    borderRadius: "50%",
    marginLeft: isCorrect ? 24 : 2,
    position: "absolute",
    left: isCorrect ? -10 : 11, // Update left position to 15px
    top: 4, // Update top position to 4px
  },

  "& .MuiSwitch-track": {
    position: "absolute",
    backgroundColor: isCorrect ? "#2ED8BE !important" : "#F44545 !important",
    opacity: 1,
    width: 37,
    height: 17,
    top: 0,
    borderRadius: 10,
  },
  "& .MuiFormControlLabel-label": {
    width: isCorrect ? 21 : 17,
    height: 16,
    border: "2px solid red !important",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "16px",
    color: "#050E25",
    flex: "none",
    order: 1,
    flexGrow: 0,
  },
  "&.custom-switch-class": {
    height: "100%",
    padding: "9px !important",
    marginLeft:'5px !important'
  },
}));

const ToggleSwitch = (props) => {
  const [isCorrect, setIsCorrect] = useState(props.toggle);
   const { ws, jobId, isWebSocketAlive, fieldKey, userId } = props.propData
  React.useEffect(() => {
    eventBus.subscribeToEvent(fieldKey, (data) => {
      setData(data.eventData.changedValue)
    })
    return () => {
      eventBus.removeEventSubscription(fieldKey)
    }
  }, [fieldKey])

  const handleChange = (event) => {
    setIsCorrect(event.target.checked);
    const wssData = { jobId: jobId, userId: userId, initialValue: data, changedValue: event.target.value, field: fieldKey, ws }
    webSocketSendData(wssData)
  };

  return (
    <Box key={props.keyName}>
      <FormControlLabel
        label={isCorrect ? "Yes" : "No"}
        control={
          <CustomSwitch
            checked={isCorrect}
            onChange={handleChange}
            isCorrect={isCorrect}
            className="custom-switch-class"
          />
        }
      />
    </Box>
  );
};
export default ToggleSwitch;
