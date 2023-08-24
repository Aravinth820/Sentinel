import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import HomeIcon from '@mui/icons-material/Home';
import { Icon } from '@mui/material';
//import image  from './Images/icon.svg'


const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    gap: '2px',
    width: '169px',
    height: '48px',
    background: '#FFFFFF',
    border: '1px solid #3874FF',
    borderRadius: '4px !important',
    marginRight:'24px',
    marginLeft:'-8px',
    boxSizing: "border-box",
    '&.MuiCard-root': {
      boxShadow: 'none',
    }
  },
  cardDisabled: {
    border: "none",
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    gap: '2px',
    width: '169px',
    height: '48px',
    background: '#FFFFFF',
    borderRadius: '4px !important',
    boxSizing: "border-box",
    boxShadow: "0px 0px 13px #EEEEF8 !important",
    marginRight:'24px',
    marginLeft:'-8px',
  },
  typographyRoot: {
    '&.MuiTypography-root': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '43px',
      color: '#050E25',
      // minWidth: '21px',
      maxWidth: "105px",
      height: "29px",
      whiteSpace: 'nowrap', 
      overflow: 'hidden',
      //textOverflow: 'ellipsis', 
      //marginLeft: "2rem",
      // pointerEvents: 'none', 
    },
  },

  typographyDisabled: {
    color: "#626776 !important",
    fontFamily: 'Inter !important',
    fontStyle: 'normal !important',
    fontWeight: '400 !important',
    fontSize: '12px !important',
    lineHeight: '43px !important',
    // minWidth: '21px !important',
    maxWidth: '105px !important',
    height: '29px !important',
    whiteSpace: 'nowrap !important',
    overflow: 'hidden !important',
      //textOverflow: 'ellipsis', 
      //marginLeft: "2rem",
      // pointerEvents: 'none'
  },
  cardContentRoot: {
    '&.MuiCardContent-root': {
      // paddingLeft: "25px",
      // marginLeft: "-1.5rem",
      padding: '8px'
    }
  },
  // container: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   marginTop: '20px',
  //   justifyContent: 'center',
  // },

  container: {
    flexDirection: 'row !important',
    marginTop:"24.5px !important",
    // border:'2px solid red'
  },

}));

const MyCard = (props) => {
  const {text, disabled, icon, iconColor, array, handledata, fieldName} = props
  const [cardItems, setCardItems] = React.useState(array)
  const classes = useStyles();
  const iconStyle = {
    color: disabled ? '#d3d3d3' : iconColor,
  };

  const handleSelectCard = (label) => {
    const updatedItems = cardItems.map(eachItem => eachItem.label === label ? {...eachItem, selected:true}: {...eachItem, selected:false})
    setCardItems(updatedItems)
    const selectedValue = updatedItems.find(eachItem => eachItem.selected).value
    handledata(fieldName, selectedValue)
   
    
    
  }
  
  
  return (
     <Grid container className={classes.container}>
        {cardItems.map(eachItem => <Card className={!eachItem.selected ? classes.cardDisabled : classes.card} onClick={() => handleSelectCard(eachItem.label)}>
          <Icon style={iconStyle}>
              <img src = {eachItem.image} alt = 'image' />                                 
            </Icon>
            <CardContent className= {classes.cardContentRoot}>
              <Typography  className={!eachItem.selected ? classes.typographyDisabled : classes.typographyRoot}>
                  {eachItem.label}
              </Typography>
            </CardContent>
        </Card>)}
    </Grid>
  );
};

export default MyCard;