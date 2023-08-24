import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
import Avatar from 'react-avatar';
import cancel from '../assests/images/close.svg'
import eventBus from '../../apiIntegration/WebSocket/eventBus';	
import webSocketSendData from '../../apiIntegration/WebSocket/webSocketSendData';


const useStyles = makeStyles({
  textFieldRoot: {
    '&.MuiTextField-root': {
      width: (props) => props?.Style?.width || "289px",
     // width: '289px',      
    },
    '& .MuiFilledInput-input': {
      fontSize: '12px !important',
      fontWeight: 400
    }
    
  },

  underline: {
    '&:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#3874FF !important',
    },
  },
  autoCompleteRoot: {
    '& .MuiButtonBase-root-MuiChip-root': {
      padding: '4px 8px !important',

    },
    '& .MuiFilledInput-root': {
      padding: '4px 8px !important',
      backgroundColor: '#ffffff !important',
    },
    '& .MuiFilledInput-input': {
      padding: '5px 8px !important',
      paddingLeft:'0px !important'
    },
    '& .MuiFilledInput-root:before': {
      borderBottom: "1px solid #EFF0F1",
    },
    '& .MuiFilledInput-root:after': {
      borderBottom: '1px solid #3874FF'
    },
    '& .MuiChip-label': {
        paddingLeft: '0px !important',
        paddingRight: '4px !important',
    },
    '& .MuiChip-avatar': {
      marginLeft: '0px !important',
    },
    '& .MuiAutocomplete-tag': {
      maxHeight: '24px !important',
    },
    '& .MuiChip-deleteIcon': {
       margin: '0px 3px 0px -6px !important'
    },

  },
  chipContainer:{
   width:"100%"
  },
  autoCompleteRoot1: {
    '& .MuiButtonBase-root-MuiChip-root': {
      padding: '4px 8px !important',

    },
    '& .MuiFilledInput-root': {
      padding: '4px 8px !important',
      backgroundColor: '#ffffff !important',
    },
    '& .MuiFilledInput-input': {
      padding: '4px 8px !important',
    },
    '& .MuiFilledInput-root:before': {
      borderBottom: "0px solid #EFF0F1",
    },
    '& .MuiFilledInput-root:after': {
      borderBottom: '1px solid #3874FF'
    },
    '& .MuiChip-label': {
        paddingLeft: '0px !important',
        paddingRight: '4px !important',
    },
    '& .MuiChip-avatar': {
      marginLeft: '0px !important',
    },
    '& .MuiAutocomplete-tag': {
      maxHeight: '24px !important',
    },
    '& .MuiChip-deleteIcon': {
       margin: '0px 3px 0px -6px !important'
    },

  }
});


const MultiChipText = (props) => {
  const {variant , style} = props
  const classes = useStyles(props)
  const [chips, setChips] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [disable, setDisable] = React.useState(true)
  const [data , setData] = React.useState("")

  const handleBlur = (value) => {
    setDisable(false)
    addChip(value[0])
    const wssData = { jobId: jobId, userId: userId, initialValue: data, changedValue: event.target.value, field: fieldKey, ws }
   webSocketSendData(wssData)
  }

  const handleDelete = (chip) => {
    setChips((prevChips) => prevChips.filter((c) => c !== chip))
  }

  const addChip = () => {
    if (inputValue.trim() !== '') {
      const newChip = { value: inputValue.trim() }
      setChips([...chips, newChip]);
      setInputValue('');
    } 

  }
   const { ws, jobId, isWebSocketAlive, fieldKey, userId } = props.propData
  React.useEffect(() => {
    eventBus.subscribeToEvent(fieldKey, (data) => {
      setData(data.eventData.changedValue)
    })
    return () => {
      eventBus.removeEventSubscription(fieldKey)
    }
  }, [fieldKey])


  return (
    <div className={classes.chipContainer}>
      <Autocomplete
      key={props.keyName}
        multiple
        // freeSolo
        onBlur={handleBlur}
        value={chips}
        onChange={(event, value) => handleBlur(event , value)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        options={["Aravinth"]}
        className= {variant === 'normal' ? classes.autoCompleteRoot1 : classes.autoCompleteRoot}
        style={{display: 'inline',...style}}
        renderTags={(value, getTagProps) =>
          value.map((chip, index) => (
            <Chip
              key={index}
              avatar={<Avatar size='16' textSizeRatio={2} round = {true} maxInitials = {1} name= {chip.value ? chip.value : chip}  />}
              className= {classes.chipRoot}
              label={chip.value ? chip.value : chip}
              onDelete={() => handleDelete(chip)}
              {...getTagProps({ index })}
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#050E25',
                backgroundColor: '#ffffff',
                border: '1px solid #EFF0F1',
                paddingLeft: '3px',
                gap: '10px',
              }}
              deleteIcon={<img
                src={cancel}
                alt="cancel-icon"
              />} 
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            className= {classes.textFieldRoot}
           
            style={{...style}}
            onBlur={handleBlur}
            variant="filled"
            label=""
            placeholder="Select"
            InputProps={{
              classes: {
                underline: classes.underline,
              },
              ...params.InputProps,
              endAdornment: null, 
            }}
          />
        )}
      />
    </div>
  )
}

export default MultiChipText