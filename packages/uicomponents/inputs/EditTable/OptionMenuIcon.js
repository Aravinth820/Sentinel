import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  iconContainer: {
    display: "inline-block !important",
  },
  icons: {
    borderRadius: " 24px !important",
    backgroundColor: "#050E25 !important",
    padding: "4px 16px 4px 16px !important",
    minHeight: "20px !important",
  },
  button: {
    color: "#ffffff !important",
    minWidth: "20px !important",
    height: "15px",
    "& .MuiSvgIcon-root": {
      height: "16px",
      width: "16px",
      color: "#CDCFD3",
    },
  },
});

export default function OptionPaper(props) {
  const { OptionMenu } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.iconContainer}>
      <Paper className={classes.icons}>
        {OptionMenu.map((name) =>
          name.showTooltip ? (
            <Tooltip title={name.toolTipName} arrow key={name.name}>
              <Button className={classes.button} onClick={name.onClick}>
                {name.icon}
              </Button>
            </Tooltip>
          ) : (
            <Button className={classes.button} onClick={name.onClick}>
              {name.icon}
            </Button>
          )
        )}
      </Paper>
    </Grid>
  );
}
