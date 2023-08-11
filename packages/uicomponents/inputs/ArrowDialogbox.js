import React from 'react';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    margin: '20px 0px 0px -8px',
    padding: '16px 16px 16px 16px',
    height: (props) => (props.height ? props.height : '300px'),
    width: (props) => (props.filterType === 'Date&Time' ? '413px' : props.width ? props.width : '318px'),
    backgroundColor: '#050e25',
    position: 'absolute',
    top: (props) => (props.top ? props.top: '20px'),
    cursor: 'pointer',
    borderRadius: '10px',
    '&:before': {
      marginTop:'-28px',
      content: '""',
      position: 'absolute',
      bottom: (props) => (props.ArrowPlaced ? props.ArrowPlaced : ''), // Set bottom position for the arrow
      left: (props) => (props.ArrowPosition ? props.ArrowPosition : '125px'),
      height: (props) => (props.ArrowHeight ? props.ArrowHeight : '15px'),
      width: '15px',
      backgroundColor: '#050e25',
      transform: (props) => (props.transform? props.transform : 'rotate(225deg) translate(-50%)'), // Rotate and position the arrow below the box
    },
    transform: (props) => (props.boxPosition? props.boxPosition : "")
  },
}));

export default function BasicPopover(props) {
  const { open, setOpen, width, height, ArrowPosition, ArrowSize, ArrowPlaced , transform, boxPosition, top, filterType} = props;
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles({ width, height, ArrowPosition, ArrowSize, ArrowPlaced,transform , boxPosition,top, filterType});

  return (
    <div>
      {open && (
        <ClickAwayListener onClickAway={handleClose} anchorOrigin={{ ...props.anchorOrigin }}>
          <div className={classes.dialogBox}>
            {props.children}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}