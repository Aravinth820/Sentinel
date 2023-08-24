import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
import ClearIcon from '@mui/icons-material/Clear';
import Avatar from 'react-avatar';


const useStyles = makeStyles((theme) => ({
  textFieldRoot: {
    '&.MuiTextField-root': {
      width: '289px',
    },
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
      backgroundColor: '#fafafa !important',
    },
    '& .MuiFilledInput-input': {
      padding: '4px 8px !important',
    },
    '& .MuiFilledInput-root:before': {
      borderBottom: '0px solid #3874FF'
    },
    '& .MuiFilledInput-root:after': {
      borderBottom: '1px solid #3874FF'
    },
  } 

}));


const App = () => {
  const classes = useStyles()
  const [chips, setChips] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [disable, setDisable] = React.useState(true)

  const handleBlur = () => {
    setDisable(false)
    addChip()
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

  return (
    <div>
      <Autocomplete
        multiple
        freeSolo
        value={chips}
        onChange={(event, newValue) => setChips(newValue)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        options={[]}
        className= {classes.autoCompleteRoot}
        style={{display: 'inline'}}
        renderTags={(value, getTagProps) =>
          value.map((chip, index) => (
            <Chip
              key={index}
              avatar={<Avatar size='20' textSizeRatio={2} round = {true} maxInitials = {1} name= {chip.value ? chip.value : chip} style={{}} />}
              className= {classes.chipRoot}
              label={chip.value ? chip.value : chip}
              onDelete={() => handleDelete(chip)}
              {...getTagProps({ index })}
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '16px',
                color: '#050E25',
                backgroundColor: '#ffffff',
                border: '1px solid #EFF0F1',
                gap: '4px',
              }}
              deleteIcon={< ClearIcon style={{fontSize: '16px', color: '#2E2E2E'}}/>} 
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            className= {classes.textFieldRoot}
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

export default App