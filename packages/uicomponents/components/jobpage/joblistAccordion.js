import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MenuBar1 } from "./jobtooltipmenu";
import Checkbox from "@mui/material/Checkbox";
import Land from '../../assests/images/Land.svg'
import Air from '../../assests/images/Air.svg'
import Sea from '../../assests/images/Sea.svg'




const useStyles = makeStyles(() => ({
  tableRowContainer: {
    display: "flex",
    // boxShadow: "0px 0px 13px #EEEEF8",
    // borderRadius: "8px",
    // marginRight: "10px",
    marginBottom: "8px",
    "& .MuiPaper-root": {
      // boxShadow: "0px 0px 13px #EEEEF8 !important",
    },
  },
  tableRowStyle: {
    boxShadow: "0px 0px 13px #EEEEF8",
    borderRadius: "8px",
    marginRight: "10px",
    marginBottom: "15px",
    flexGrow: 1,
  },
  accordion: {
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
  },
  accordionSumary: {
    width: "100%",
    minHeight: "0px !important",
    marginBottom: "8px !important",

    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: "0px !important",
      marginTop: "10px !important",
    },
  },
  accordionDetail: {
    //marginTop: "-2.5rem",
    padding: "0px 16px 16px !important",
    display: "flex !important",
    flexDirection: "column",
  },
  accordionDetailsContainer: {
    marginBottom: "8px !important",
    //marginTop: "1rem",
  },
  accordionDetailsContainer2: {
    //marginTop: "1rem",
  },

  TableRow: {
    width: "100%",
    display: "flex !important",
    minHeight: "24px !important",
  },
  TableRow2: {
    display: "flex !important",
    minHeight: "24px !important",
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
    padding: "4px 8px 4px 8px !important",
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
  iconsboxClosed: {
    height: "1.7rem",
    borderRadius: "1rem",
    position: "absolute",
    left: "45%",
    // top:"77%",
    marginTop: "-12px",
    width: "50%",
  },
  iconsboxOpened: {
    height: "1.7rem",
    borderRadius: "1rem",
    position: "absolute",
    left: "45%",
    marginTop: "-12px",
    //top:"91%" ,
    width: "45%",
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
  // Checkbox: {
  //   alignSelf: "start",
  //   marginTop: "19px !important",
  //   "& .MuiSvgIcon-root": {
  //     height: "16px",
  //     width: "16px",
  //     borderRadius: "3px",
  //     // color:'#9497A1'
  //   },
  //},
  checkedFalse: {
    alignSelf: "start",
    marginTop: "19px !important",
    "& .MuiSvgIcon-root": {
      height: "16px",
      width: "16px",
      borderRadius: "3px",
    },
    color: "#9497A1 !important",
  },
  checkedTrue: {
    alignSelf: "start",
    marginTop: "19px !important",
    "& .MuiSvgIcon-root": {
      height: "16px",
      width: "16px",
      borderRadius: "3px",
    },
    color: "#3874FF !important",
  },
}));

export default function Joblisttablebody(props) {
  const classes = useStyles();
  const [accordionOpen, setAccordionOpen] = React.useState(
    props.hover || props.hover === undefined ? false : true
  );
  const [isHovered, setIsHovered] = useState(false);
  const [checkedCheckbox, setCheckedBox] = useState(false);
  const {
    data,
    columns,
    index,
    checkbox,
    hover,
    headerCheckbox,
    onClickJobLink,
  } = props;

  React.useEffect(() => {
    if (props.accordionFullOpen === true) {
      setAccordionOpen(true);
    } else if (props.accordionFullOpen === false) {
      setAccordionOpen(false);
    }
    if (headerCheckbox) {
      setCheckedBox(true);
    } else {
      setCheckedBox(false);
    }
  }, [props.accordionFullOpen, headerCheckbox]);

  const handleCheckbox = () => {
    setCheckedBox(!checkedCheckbox);
  };

  return (
    <div
      className={classes.tableRowContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {checkbox && (
        <Checkbox
          //className={classes.Checkbox}
          className={
            checkedCheckbox ? classes.checkedTrue : classes.checkedFalse
          }
          checked={checkedCheckbox}
          onChange={handleCheckbox}
        />
      )}
      <div className={classes.tableRowStyle}>
        <Accordion expanded={accordionOpen} className={classes.accordion}>
          <AccordionSummary className={classes.accordionSumary}>
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
                        {data?.modeOfTransport ? (
                          data.modeOfTransport === "Land" ||
                          data.modeOfTransport === "L-Land" ? (

                           <img src={Land} alt="404" />
                          ) : data.modeOfTransport === "Air" ? (

                            <img src={Air} alt="404" />
                          ) : (
                            <img src={Sea} alt="404" />
                          )
                        ) : null}
                      </div>
                    )}

                    {column.id === "jobNo" ? (
                      <Link
                        className={`${classes.link} ${classes.TableCellInfo}`}
                        onClick={() => onClickJobLink(data)}
                      >
                        {data[column.id]}
                      </Link>
                    ) : column.id !== "srNo" ? (
                      <Typography className={classes.TableCellInfo}>
                        {" "}
                        {data[column.id]}{" "}
                      </Typography>
                    ) : (
                      ""
                    )}
              </TableCell>
                );
              })}
            </TableRow>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            {columns.map((row, i) =>
              i > 0 ? (
                <div
                  className={
                    i === 1
                      ? classes.accordionDetailsContainer
                      : classes.accordionDetailsContainer2
                  }
                  key={i}
                >
                  <TableRow className={classes.TableRow2} key={i}>
                    {row.row.map((column) => (
                      <TableCell
                        style={{
                          width: column.minWidth,
                          flexGrow: column.flexGrow,
                          left: column.left,
                        }}
                        key={column.id}
                        className={classes.tableBodyCell}
                      >
                        <Typography className={classes.TableCellInfo}>
                          {data[column.id]}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </div>
              ) : null
            )}
          </AccordionDetails>
        </Accordion>

        {isHovered && (hover || hover === undefined) ? (
          <span
            className={
              accordionOpen === false
                ? classes.iconsboxClosed
                : classes.iconsboxOpened
            }
          >
            <MenuBar1
              accordionOpen={accordionOpen}
              setAccordionOpen={setAccordionOpen}
            />
          </span>
        ) : null}
      </div>
    </div>
  );
}
