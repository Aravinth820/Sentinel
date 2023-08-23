import React from 'react'
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    overflow:'auto',
    margin: '20px',
  
    height: (props) => (props.height ? props.height : '300px'),
    width: (props) => (props.filterType === 'Date&Time' ? '413px' : props.width ? props.width : '318px'),
    backgroundColor: '#050e25',
    position: 'absolute',
    top:'5px',
    borderRadius: '4px',
    '&:before': {
      marginTop:'-28px',
      content: '""',
      position: 'absolute',
     
      width: '15px',
      backgroundColor: '#050e25',
      transform: (props) => (props.transform? props.transform : 'rotate(225deg) translate(-50%)'), // Rotate and position the arrow below the box
    },
    transform: (props) => (props.boxPosition? props.boxPosition : "")
  },
}));

export default function MasterSelectionTable(props) {
  const { open, setOpen, width, height, ArrowPosition, ArrowSize, ArrowPlaced , transform, boxPosition, top, filterType} = props;
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles({ width, height, ArrowPosition, ArrowSize, ArrowPlaced,transform , boxPosition,top, filterType});

  return (
    <div >
      {open && (
        <ClickAwayListener onClickAway={handleClose} anchorOrigin={{ ...props.anchorEl }} placement="bottom-start">
          <div className={classes.dialogBox}>
            {props.children}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}