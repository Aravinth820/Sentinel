import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Grid } from "@mui/material";
//import user from '../Images/user.svg'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  userCard: {
    height: "24px",
    display: "flex",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      height: "16px !important",
      width: "16px !important",
      padding: "0px 16px 0px 16px !important",
    },
  },
}));

const TopRight = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.userCard}>
      <NotificationsIcon />
      {/* <img src={user} alt="User" /> */}
    </Grid>
  );
};

export default TopRight;