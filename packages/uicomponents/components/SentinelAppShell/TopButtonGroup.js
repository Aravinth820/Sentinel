import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";


import { navigate } from '@reach/router'

const useStyles = makeStyles((theme) => ({
  tabs: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0px 2px 0px 2px",
    //width: "349px !important",
    minHeight: "28px !important",
    height: "28px !important",
    backgroundColor: "#F6F9FF",
    borderRadius: "6px",
    "& .MuiTabs-indicator": {
      width: "0px !important",
    },
  },
  appBar: {
    backgroundColor: "transparent !important",
  },
  tab: {
    textTransform: "capitalize !important",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "115px",
    minHeight: "24px !important",
    height: "24px !important",
    flex: "none",
    order: "0",
    flexGrow: "1",
    "&.Mui-selected": {
      backgroundColor: "#ffffff !important",
      borderRadius: "4px",
      color: "#050E25 !important",
    },
  },
}));

const TopButtonGroup = (props) => {
  const classes = useStyles();
  const {tabsData}=props
  const [jobListCurrentTab, setJobListCurrentTab] = React.useState(0);


  let tabName
  React.useEffect(()=>{
    setJobListCurrentTab(0)
    tabName=tabsData[0].name
    props.setSelectedTabName(tabName)
    
    localStorage.setItem('tabName', JSON.stringify(tabName));
    
  },[tabsData])
 


  const handleTabChange = (event, newValue) => {
    setJobListCurrentTab(newValue);
    tabName=tabsData[newValue].name
  
  
    props.setSelectedTabName(tabName)
    localStorage.setItem('tabName', JSON.stringify(tabName));

   
    
  };

  
  return (
    <>
    {tabsData && (
      <Grid>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Tabs
            //value={props.name==="checkListPage"?checkListCurrentTab:jobListCurrentTab}
                        value={jobListCurrentTab}
            onChange={handleTabChange}
            className={classes.tabs}
          >
            {tabsData.map((tab) => (
              <Tab className={classes.tab} label={tab.label} key={tab.name} />
            ))}
          </Tabs>
        </AppBar>
      </Grid>
    )}

    
  </>
  );
}

export default TopButtonGroup;