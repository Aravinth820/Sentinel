import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

import TopLeft from './TopLeft'
import TopButtonGroup from "./TopButtonGroup";
import TopRight from "./TopRight";
import ImportCheckList from "../../../webapp/src/components/RoutePages/ImportJobDetails/index";


const useStyles = makeStyles((theme) => ({
  topNavigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100% !important",
    height: "48px !important",
    background: "#FFFFFF",
    borderBottom: "1px solid #EFF0F1",
    padding: "0px 24px !important",
  },
  listItem: {
    "& .MuiSvgIcon-root": {
      height: "16px",
      width: "16px",
    },
    "& .MuiTypography-root": {
      fontSize: "16px",
      fontWeight: "600",
    },
  },
  topNavLeft: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topNavCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topNavRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));
const tabsData1 = [
  { name: "Files", label: "Files", tab: 0 },
  { name: "Checklist", label: "Checklist", tab: 1 },
  { name: "Status", label: "Status", tab: 2 },
];

const tabsData2 = [
    { name: "Imports", label: "Imports", tab: 0 },
    { name: "Exports", label: "Exports", tab: 1 },
  ];

const SentinelAppShell = (props) => {
  const[selectedTabName,setSelectedTabName]=React.useState('')
  console.log('selectedTabName',selectedTabName)
  const urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id');

  const classes = useStyles();
  let sentinelIcon,selectOptions,tabsData,jobNo
  let value = JSON.parse(localStorage.getItem('items'))
  if(value==="Import"){
    sentinelIcon=true
   selectOptions=true
    tabsData=tabsData1
    jobNo=id

  }
  else{
    sentinelIcon=true
    selectOptions=true
     tabsData=tabsData2


  }
 


  

  return (
    <>
    <Grid style={{ display:"flex",alignItems:'flex-start',justifyContent:"center",position:'sticky',top:'0',zIndex:'1000'}} >
      <Grid container className={classes.topNavigation}>
        <Grid item xs={4} className={classes.topNavLeft}>
          <TopLeft sentinelIcon={sentinelIcon} selectOptions={selectOptions} jobNo={jobNo} />
        </Grid>
        <Grid item xs={4} className={classes.topNavCenter}>
          <TopButtonGroup tabsData={tabsData} setSelectedTabName={setSelectedTabName}/>
        </Grid>
        <Grid item xs={4} className={classes.topNavRight}>
          <TopRight />
        </Grid>
      </Grid>
    </Grid>
    {/* {props.children} */}
    {value==='Import'?<ImportCheckList tabName={selectedTabName} jobId={id} />:props.children}
    </>

  );
};

export default SentinelAppShell;