import React, { Suspense, useMemo } from "react";

const ListTable = React.lazy(() => import("./Table"));

import ListItemIcon from "@mui/material";

import { Grid, Typography } from "@mui/material";
import SearchTextBox from "../SearchTextBox";

function TableVirtuoso(props) {
  const [fullAccordianOpen, setFullAccordianOpen] = React.useState(false);
  const [eachAccordion, setEachAccordion] = React.useState(() => {
    const initialAccordionState = {};
    props.listData.forEach((item, index) => {
      initialAccordionState[index] = false;
    });
    return initialAccordionState;
  });
  
  const [opened, setOpened] = React.useState(props.isOpened);
  //console.log("table Virtuoso", props);

  React.useEffect(() => {
    setOpened(props.isOpened);
  }, [props.isOpened]);

  const clickedIcon = (index) => {
    setEachAccordion((prevAccordionState) => ({
      ...prevAccordionState,
      [index]: !prevAccordionState[index],
    }));
  };
  console.log('props.itemName',props.itemName)

  const handleChange = () => {
    // If fullAccordianOpen is true, set eachAccordion state to true for all rows, otherwise set to false for all rows
    setEachAccordion((prevAccordionState) => {
      const updatedAccordionState = {};
      Object.keys(prevAccordionState).forEach((index) => {
        updatedAccordionState[index] = !fullAccordianOpen;
      });
      return updatedAccordionState;
    });
    setFullAccordianOpen((prevValue) => !prevValue);
  };

  const setListData = (index) => {
    props.setListDataItem(index);
  };
  const deletingRow = (index) => {
    props.deleteItem(index);
    let accordionStates = { ...eachAccordion };
    delete accordionStates[index];
    console.log("accordionStates", accordionStates);
    setEachAccordion(accordionStates);
  };
 

  return (
    <div style={{ marginLeft: "55px" ,width:props.width,}} id={`#${props.id}`}>
      {/* {fullAccordianOpen===true?<UnfoldLessIcon   onClick={()=>handleChange()}/>:<UnfoldMoreIcon   onClick={()=>handleChange()}/>} */}
      <Grid
        style={{
          backgroundColor: "#F6F9FF",
          paddingLeft: "24px",
          paddingRight: "24px",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <img src={props.icon} alt={props.itemName} />
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "18px",
              marginLeft: "8px",
            }}
          >
            {props.itemName}
          </Typography>
        </div>
        <SearchTextBox
          dropDown={true}
          backgroundColor={"#FFFFFF"}
          width={"302px"}
          text={"Search"}
          border={"1px solid #EFF0F1"}
        />
      </Grid>
      {/* deletingRow={deletingRow} setListData={setListData}  */}
      <Suspense fallback={<div style={{marginLeft:'120px',marginTop:'40px'}}>Loading</div>}>
        <ListTable
          key={props.key}
          columns={props.columns}
          listData={props.listData}
          accordion={fullAccordianOpen}
          checkbox={props.checkbox}
          hover={props.hover}
          clickedIcon={clickedIcon}
          eachAccordion={eachAccordion}
          width={props.width}
        />
      </Suspense>
    </div>
  );
}

export default TableVirtuoso;




