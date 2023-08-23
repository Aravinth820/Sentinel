//import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Mukta:wght@300&display=swap');
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { TableVirtuoso } from "react-virtuoso";

import React, {Suspense } from 'react';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import OptionPaper from "./OptionMenuIcon";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from "@mui/icons-material/FilterList";
import { makeStyles } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { Typography } from "@mui/material";
import TextField from '../TextField'
import { Divider, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { MenuBar } from "./OptionMenuBar";
import "./Table.css";

const useStyles = makeStyles(() => ({
  tableContainer: {
    padding: "24px 24px",
    background: "#F6F9FF !important",
  },
  table: {
    padding: "16px 16px",
    borderRadius: "10px",
    paddingRight: "20px",
    border: "2px solid #E7E7E7",
    background: "#FDFEFF  !important",
  },
  virtualizedTable: {
    height: "758px !important",
    marginLeft: "0.8rem",
    boxShadow: "none !important",
    background: "#FDFEFF  !important",
    borderRadius: "12px !important",
    "& .MuiTableHead-root": {
      zIndex: "2 !important",
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
    },
    "&::-webkit-scrollbar": {
      width: "5px",
      height: "5px",
      backgroundColor: "transparent !important",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#CDCFD3 !important",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent !important",
      borderRadius: "4px",
      marginTop: "80px !important",
      height: "20px !important",
    },
  },
  tableHeadContainer: {
    display: "flex !important",
    marginRight: "10px",
    marginBottom: "10px",
    background: "#ffffff !important",
  },
  tableHead: {
    display: "flex",
    width: "100%",
  },
  accordianStyle: {
    flexGrow: "1",
  },

  accordianSummary: {
    width: "100%",
    marginBottom: "-1rem !important",
  
  },
 
  tableBodyAccordionSummary:{
    
    '&.Mui-focusVisible':{
      backgroundColor:'transparent !important',
     
     },

  },
  accordionDetails: {
    marginTop: "-2.5rem",
  },
  accordionDetailsContainer: {
    marginTop: "1rem",
  },
  tableRow: {
    display: "flex !important",
    width: "100%",
  },
  tableRow2: {
    width: "100%",
    display: "flex !important",
  },
  tableCell: {
    color: "#626776 !important",
    fontSize: "12px !important",
    fontFamily: "'Inter', sans-serif !important",
    borderBottom: "none !important",
    position: "relative",
  },
  tableCellContainer: {
    display: "flex",
    alignItems: "start",
  },
  tableCellName: {
    lineHeight: "1rem",
  },
  filter: {
    height: "16px !important",
    width: "16px !important",
    marginLeft: "6px !important",
  },
  checkboxContainer: {
    background: "#ffffff",
    display: "flex",
    marginTop: "22px !important",
  },
  
  iconsboxClosed: {
    height: "1.7rem",
    borderRadius: "1rem",
    position: "absolute",
    left: "45%",
    marginTop: "-12px",
    width: "50%",
  },
  iconsboxOpened: {
    height: "1.7rem",
    borderRadius: "1rem",
    position: "absolute",
    left: "45%",
    marginTop: "-12px",
   width: "45%",
  },
  addIcon: {
    cursor: "pointer",
    height: "12px !important",
    width: "12px !important",
    position: "absolute",
  },
  checkedFalse: {
    alignSelf: "start",
    marginTop: "25px !important",
    "& .MuiSvgIcon-root": {
      height: "16px",
      width: "16px",
      borderRadius: "3px",
    },
    color: "#9497A1 !important",
  },
  checkedTrue: {
    alignSelf: "start",
    marginTop: "25px !important",
    "& .MuiSvgIcon-root": {
      height: "16px",
      width: "16px",
      borderRadius: "3px",
    },
    color: "#3874FF !important",
  },
  tableRowContainer: {
    display: "flex",

    marginBottom: "8px",
  },
  tableRowStyle: {
    boxShadow: "0px 0px 13px #EEEEF8",
    borderRadius: "8px",
    marginRight: "10px",
    marginBottom: "15px",
    flexGrow: 1,
  },
  accordion: {
    //backgroundColor: "red !important",
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
  },
  accordionDetail: {
    marginTop: "-2rem",
    display: "flex !important",
    flexDirection: "column",
  },
  TableRow: {
    width: "100%",
    display: "flex !important",
  },
  TableRow2: {
    display: "flex !important",
  },

  tableBodyCell: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "12px !important",
    color: "#050E25 !important",
    fontFamily: "Inter !important",
    borderBottom: "none !important",
    position: "relative",
    fontWeight: "400",
  },
  sNoContainer: {
    display: "flex",
    alignItems: "center",
  },
  number: {
    maxWidth: "55px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Inter !important",
    fontSize: "12px !important",
    color: "#050E25 !important",
  },

  menuBar: {
    position: "relative",
    left: "50%",
  },

  landIcon: {
    height: "16px !important",
    width: "16px !important",
    color: "#FCD277",
  },
  airIcon: {
    height: "16px !important",
    width: "16px !important",
    color: "#99A7F1",
  },
  shipIcon: {
    height: "16px !important",
    width: "16px !important",
    color: "#65D4BA",
  },
  link: {
    cursor: "pointer",
  },

  TableCellInfo: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    wordBreak: "break-word",
    fontFamily: "Inter !important",
    fontSize: "12px !important",
    fontWeight: "400",
  },
}));

const TableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => <Table {...props} style={{ borderCollapse: "collapse" }} />,
  TableHead: TableHead,
  TableRow: TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

export default function ListTable(props) {
  const [headerCheckbox, setHeaderCheckbox] = React.useState(false);
  // const [accordionOpen, setAccordionOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const { columns, checkbox, hover } = props;
  const classes = useStyles();
  const [hoveredIndex, setIndex] = React.useState(null);
  const [eachAccordion, setEachAccordion] = React.useState(props.eachAccordion);
  const [scrolledListData,setScrolledListData]=React.useState(props.listData)
 
  const [selected, setSelected] = React.useState(() => {
    const initialAccordionState = [];
    props.listData.forEach((item, index) => {
      initialAccordionState.push(false)
    });
    return initialAccordionState;
  });
  
 
 

  React.useEffect(() => {
    setScrolledListData(props.listData);
    let accordions=[]
    props.listData.forEach((item, index) => {
      accordions.push(false)
    });
   
  }, [props.listData]);

  React.useEffect(() => {
    setEachAccordion(props.eachAccordion);
    
  }, [props.eachAccordion]);

  const handleAddRow = (index) => {
    console.log('index is coming',index)
    console.log('data at particular index',scrolledListData[index])
    let particularRowData=scrolledListData[index]
    let keys=Object.keys(particularRowData)
    console.log('keys',keys)
    //props.setListData(index);
  };

  const clickedIcon = (index) => {
   props.clickedIcon(index);
  
   
  };
  const handleDeleteRow = (index) => {
 //   props.deletingRow(index);
    console.log('index',index)
  
    
  };

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setIndex(index);
  };
  const handleMouseLeave = (index) => {
    setIsHovered(null);
    setIndex(null);
  };
 
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      
     
      const selectedList = [];
      scrolledListData.forEach((item, index) => {
        selectedList.push(true)
      });
      setSelected(selectedList);

     
     
      setHeaderCheckbox(true);
    } else {
      setSelected([]);
    
      setHeaderCheckbox(false);
    }
  };

 
  const handleClick = (event,index) => {
    setSelected((prevAccordionState) => ({
      ...prevAccordionState,
      [index]: !prevAccordionState[index],
    }));
  };


const handleDataUpdate = (name, newValue, item, index) => {
  const updatedData = scrolledListData.map((dataItem, i) => {
    if (i === index) {
      
      return { ...dataItem, [name]: newValue };
    } else {
      return dataItem;
    }
  });


  setScrolledListData(updatedData);
};

  return (
    <div className={classes.tableContainer} >
      <div className={classes.table}>
        <TableVirtuoso   key={props.key} className={`${classes.virtualizedTable} ${columns.length === 3 ? "table1" : columns.length === 2 ? "table2": ""}`}
          data={scrolledListData}
         
          components={TableComponents}
          fixedHeaderContent={() => (
            <TableHead className={classes.tableHeadContainer}>
              <div className={classes.tableHead}>
                {checkbox && (
                   <Checkbox
                 
                   checked={headerCheckbox}
                   onChange={handleSelectAllClick}
                   
                    className={
                      headerCheckbox
                        ? classes.checkedTrue
                        : classes.checkedFalse
                    }
                 />
                 
                )}
                <Accordion expanded={true} className={classes.accordianStyle}>
                  <AccordionSummary className={classes.accordianSummary}  >
                    <TableRow className={classes.tableRow}>
                      {columns[0].row.map((headCell) => (
                        <TableCell
                          style={{
                            width: headCell.minWidth,
                            flexGrow: headCell.flexGrow,
                            left: headCell.left,
                          }}
                          key={headCell.id}
                          className={classes.tableCell}
                        >
                          <div style={{ display: "flex", alignItems: "start" }}>
                            <span style={{ lineHeight: "1rem" }}>
                              {headCell.label}
                            </span>
                            {headCell.filter && (
                              <FilterListIcon className={classes.filter} />
                            )}
                          </div>
                        </TableCell>
                      ))}
                    </TableRow>
                  </AccordionSummary>
                  {columns.map((row, i) => (
                    <AccordionDetails className={classes.accordionDetails}>
                      <div className={classes.accordionDetailsContainer}>
                        <TableRow className={classes.tableRow} key={i}>
                          {i > 0
                            ? row.row.map((headCell) => (
                                <TableCell
                                  style={{
                                    width: headCell.minWidth,
                                    flexGrow: headCell.flexGrow,
                                    left: headCell.left,
                                  }}
                                  key={headCell.id}
                                  className={classes.tableCell}
                                >
                                  <div className={classes.tableCellContainer}>
                                    <span className={classes.tableCellName}>
                                      {headCell.label}
                                    </span>
                                    {headCell.filter && (
                                      <FilterListIcon
                                        className={classes.filter}
                                      />
                                    )}
                                  </div>
                                </TableCell>
                              ))
                            : null}
                        </TableRow>
                      </div>
                    </AccordionDetails>
                  ))}
                </Accordion>
              </div>
            </TableHead>
          )}
          itemContent={(index, item) => {
           let accordionOpen = eachAccordion[index];
            let isItemSelected = selected[index]
            //console.log('isItemSelected',isItemSelected)
        
            return (
              <div key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              >
                <div className={classes.tableRowContainer}>
             
                  {checkbox && <Checkbox     
                    onClick={(event) => handleClick(event, index)}   
                 
                    checked={isItemSelected} 
                  className={ isItemSelected ? classes.checkedTrue
                        : classes.checkedFalse}
                        />}
                  <div className={classes.tableRowStyle}>
                    <Accordion
                      expanded={eachAccordion[index]}
                      className={classes.accordion}
                      key={index}
                    >
                      <AccordionSummary className={classes.tableBodyAccordionSummary}>
                        <TableRow className={classes.TableRow} key={index}>
                          {columns[0].row.map((column) => {
                            return (
                              <TableCell
                                style={{
                                  width: column.minWidth,

                                  flexGrow: column.flexGrow,

                                  left: column.left,
                                }}
                                key={column.id}
                                className={classes.tableBodyCell}
                              >
                                {column.id === "srNo" && (
                                  <div className={classes.sNoContainer}>
                                    <Typography className={classes.number}>{`${
                                      index + 1
                                    }. \u00A0`}</Typography>
                                    {item?.mot ? (
                                      item.mot === "Land" ||
                                      item.mot === "L-Land" ? (
                                        <LocalShippingIcon
                                          className={classes.landIcon}
                                        />
                                      ) : item.mot === "Air" ? (
                                        <LocalAirportIcon
                                          className={classes.airIcon}
                                        />
                                      ) : (
                                        <DirectionsBoatIcon
                                          className={classes.shipIcon}
                                        />
                                      )
                                    ) : null}
                                  </div>
                                )}
                                {column.id !== "srNo" ? (
                                  <TextField
                                  placeholder={column.placeholder}
                                    variant="standard"
                                    disableLine={true}
                                    disabled={true}
                                    style={{
                                      fontFamily: "Inter",
                                      fontSize: "14px",
                                    }}
                                    customClass={classes.textField}
                                     //handledata={handleDataUpdate}
                                     handledata={(name, value) => handleDataUpdate(name, value, item, index)}
                                    name={column.id}
                                    value={item[column.id]}
                                  />
                                ) : (
                                  ""
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      </AccordionSummary>
                      <AccordionDetails className={classes.accordionDetail}>
                        {columns.map((row, i) => (
                          <TableRow
                            className={classes.TableRow2}
                            onMouseEnter={() => setIsHovered(true)}
                           
                          >
                            {i > 0
                              ? row.row.map((column) => {
                                  return (
                                    <TableCell
                                      style={{
                                        width: column.minWidth,
                                        flexGrow: column.flexGrow,
                                        left: column.left,
                                      }}
                                      key={column.id}
                                      className={classes.tableBodyCell}
                                    >
                                      <TextField
                                       
                                        variant="standard"
                                        disableLine={true}
                                        style={{
                                          fontFamily: "Inter",
                                          fontSize: "14px",
                                        }}
                                        customClass={classes.textField}
                                    // handledata={handleDataUpdate}
                                    handledata={(name, value) => handleDataUpdate(name, value, item, index)}
                                    placeholder={column.placeholder}
                                        name={column.id}
                                        value={item[column.id]}
                                      />
                                    </TableCell>
                                  );
                                })
                              : null}
                          </TableRow>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                    {hoveredIndex === index  && (hover || hover === undefined) ? (
                      <span
                        className={
                          accordionOpen === false
                            ? classes.iconsboxClosed
                            : classes.iconsboxOpened
                        }
                      >
                        <MenuBar
                          accordionOpen={eachAccordion[index]}
                          handleDelete={handleDeleteRow}
                          index={index}
                          clickedIcon={clickedIcon}
                        />
                          {/* <OptionPaper OptionMenu={JoblistMenu} AccordionOpen={accordionOpen} /> */}
                      </span>
                    ) : null}
                  </div>
                </div>
               
                {hoveredIndex === index && (hover || hover === undefined) ? (
                  <Grid
                    style={{
                      height: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight:"10px"
                    }}
                  >
                    <Divider
                      sx={{
                        backgroundColor: "blue",
                        marginRight: "5px",
                        width: "100%",
                      }}
                    />
                    <AddIcon
                      className={classes.addIcon}
                      onClick={() => handleAddRow(index)}
                    />
                  </Grid>
                ) : null}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
