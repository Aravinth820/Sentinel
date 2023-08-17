import React, { useEffect, useState } from "react";
import { Select, InputBase, MenuItem, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Divider } from "@mui/material";
//import sentinelLogo from '../Images/sentinelLogo.svg'
import { makeStyles } from "@mui/styles";
import sentinelFullLogo from '../../assests/images/sentinelFullLogo.svg'
import { navigate } from '@reach/router'
const option = [
  { label: "Jobs", value: "jobs" },
];
const useStyles = makeStyles((theme) => ({
  selectOptions: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "68px",
    margin: "12px 0px 12px 0px !important",
    height: "24px !important",
    color: "#050E25 !important",
    fontWeight: "400 !important",
    lineHeight: "16px !important",
    fontSize: "12px !important",
    "& .MuiSvgIcon-root": {
      width: "16px !important",
    },

  },
  divider: {
    height: "47px !important",
    backgroundColor: "#EFF0F1",
    margin: "0px 16px 0px 16px !important",
  },
  backArrow: {
    display: "flex",
    marginRight: "16px !important",
    justifyContent: "flex-start",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      height: "16px !important",
      width: "16px !important",
    },
  },
  jobNo: {
    marginLeft: "16px !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "20px !important",
  },
}));

const TopLeft = (props) => {
  const classes = useStyles();
  const {sentinelIcon, selectOptions, jobNo}=props
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(option[0]?.value);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleNavigate=(()=>{
   
        navigate("/app/myJobs/")


  })

  return (
    <Grid style={{ display: "flex", alignItems: "center" }}>
      {sentinelIcon&& 
      <Grid>
     <img src={sentinelFullLogo} alt="Sentinel" />
    </Grid>
      }
     {sentinelIcon && <Divider orientation="vertical" className={classes.divider} />}
      {selectOptions && <Select
        style={{ border: "none" }}
        className={classes.selectOptions}
        value={value}
        // onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        input={<InputBase style={{ border: "none" }} />}
      >
        {option?.map((optionItem) => (
          <MenuItem key={optionItem.label} value={optionItem.value}>
            {optionItem.label}
          </MenuItem>
        ))}
      </Select>}
      {(jobNo && selectOptions)  && <Divider orientation="vertical" className={classes.divider} />}
      {jobNo && <Grid className={classes.backArrow}>
        <ArrowBackIosNewIcon onClick={handleNavigate}/>
        <Typography className={classes.jobNo}>{jobNo}</Typography>
      </Grid>}
    </Grid>
  );
};

export default TopLeft;