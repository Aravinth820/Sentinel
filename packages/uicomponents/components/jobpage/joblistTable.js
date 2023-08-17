import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { TableVirtuoso } from "react-virtuoso";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Joblisttablebody from "./joblistAccordion";
import FilterListIcon from "@mui/icons-material/FilterList";
import { makeStyles } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";
import FilterAndSort from "../FilterAndSort.js/FilterandSort";

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
      marginTop: "181px !important",
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
    //fontStyle: "normal !important",
    // fontWeight: "400 !important",
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
    // marginTop: "-0.2rem !important",
    height: "16px !important",
    width: "16px !important",
    marginLeft: "6px !important",
  },
  checkboxContainer: {
    background: "#ffffff",
    display: "flex",
    marginTop: "22px !important",
  },
  // Checkbox: {
  //   alignSelf: "start",
  //   marginTop: "25px !important",
  //   "& .MuiSvgIcon-root":{
  //     height:'16px',
  //     width:'16px',
  //     borderRadius:'3px solid #9497A1',
  //     color:'#1976d2',

  //   },

  // },
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
}));

const myArray = [
  { id: 1, label: 'Schneider Electric India', checked: false, fieldName: 'Schneider Electric India' },
  { id: 2, label: 'TaTa Motors', checked: false, fieldName: 'TaTa Motors' },
  { id: 3, label: 'V-GUARD INDUSTRIES LIMITED', checked: false, fieldName: 'V-GUARD INDUSTRIES LIMITED' },
  { id: 4, label: 'BERRY N BLOSSOM THE PVT LTD', checked: false, fieldName: 'BERRY N BLOSSOM THE PVT LTD' },
  { id: 5, label: 'Schneider Electric India', checked: false, fieldName: 'Schneider Electric India' },
  { id: 6, label: 'Schneider Electric India', checked: false, fieldName: 'Schneider Electric India' },
  { id: 7, label: 'TaTa Motors', checked: false, fieldName: 'TaTa Motors' },
  { id: 8, label: 'Schneider Electric India', checked: false, fieldName: 'Schneider Electric India' },
  { id: 9, label: 'BERRY N BLOSSOM THE PASTRY LAND PVT LTD', checked: false, fieldName: 'BERRY N BLOSSOM THE PASTRY LAND PVT LTD' },
  { id: 10, label: 'BERRY N BLOSSOM THE PASTRY LAND PVT LTD', checked: false, fieldName: 'BERRY N BLOSSOM THE PASTRY LAND PVT LTD' },
  { id: 11, label: 'V-GUARD INDUSTRIES LIMITED', checked: false, fieldName: 'V-GUARD INDUSTRIES LIMITED' },
  { id: 12, label: 'V-GUARD INDUSTRIES LIMITED', checked: false, fieldName: 'V-GUARD INDUSTRIES LIMITED' },
  { id: 13, label: 'V-GUARD INDUSTRIES LIMITED', checked: false, fieldName: 'V-GUARD INDUSTRIES LIMITED' },
  { id: 14, label: 'TaTa Motors', checked: false, fieldName: 'TaTa Motors' },
  { id: 15, label: 'TaTa Motors', checked: false, fieldName: 'TaTa Motors' },
  { id: 16, label: 'Schneider Electric India', checked: false, fieldName: 'Schneider Electric India' },
  { id: 17, label: 'Schneider Electric India', checked: false, fieldName: 'Schneider Electric India' },
  // Add more checkboxes as needed
];


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
  const [scrolledListData, setScrolledListData] = React.useState(
    props.listData
  );
  const [listItemsData, setListItemData] = React.useState([])
  const [headerCheckbox, setHeaderCheckbox] = React.useState(false);
  const [fullAccordianOpen, setFullAccordianOpen] = React.useState(
    props.hover || props.hover === undefined ? false : props.accordion
  );

  const { columns, checkbox, hover ,onClickJobLink } = props;
  const classes = useStyles();
  React.useEffect(() => {
    setFullAccordianOpen(props.accordion);
  }, [props.accordion]);

  const handleChange = () => {
    setHeaderCheckbox(!headerCheckbox);
  };

  const handleData = (finalList) => {
    // const filterFields = options.map(field => {
    //   const checked = checkedIds.includes(field.id)
    //   return { ...field, checked }
    // })
    setListItemData(finalList)


  }

  return (
    <div className={classes.tableContainer}>
      {/* {fullAccordianOpen === true ? (
        <UnfoldLessIcon onClick={() => handleChange()} />
      ) : (
        <UnfoldMoreIcon onClick={() => handleChange()} />
      )} */}
      <div className={classes.table}>
        <TableVirtuoso
          className={`${classes.virtualizedTable} ${
            columns.length === 3
              ? "table1"
              : columns.length === 2
              ? "table2"
              : ""
          }`}
          data={scrolledListData}
          components={TableComponents}
          fixedHeaderContent={() => (
            <TableHead className={classes.tableHeadContainer}>
              <div className={classes.tableHead}>
                {checkbox && (
                  <Checkbox
                    //className={classes.Checkbox}
                    className={
                      headerCheckbox
                        ? classes.checkedTrue
                        : classes.checkedFalse
                    }
                    checked={headerCheckbox}
                    onClick={handleChange}
                  />
                )}
                <Accordion expanded={true} className={classes.accordianStyle}>
                  <AccordionSummary className={classes.accordianSummary}>
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
                              <FilterAndSort
                              name='Table' 
                              data={headCell}
                              listData={listItemsData}
                              icon={<FilterListIcon/>}
                              filterType={headCell.filterType}
                              handleData = {handleData}
                              boxPosition={headCell.boxPosition}
                              label={headCell.label}
                              />
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
                                    {headCell.filter && 
                                     <FilterAndSort 
                                     name='Table'
                                     data={headCell}
                                     listData={listItemsData}
                                     icon={<FilterListIcon/>}
                                     filterType={headCell.filterType}
                                     handleData={handleData}
                                     boxPosition={headCell.boxPosition}
                                       label={headCell.label}
                                     />
                                        }
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
          itemContent={(index, data) => {
            return (
              <Joblisttablebody
                data={data}
                columns={columns}
                onClickJobLink={onClickJobLink}
                accordionFullOpen={fullAccordianOpen}
                index={index}
                checkbox={checkbox}
                headerCheckbox={headerCheckbox}
                hover={hover}
              />
            );
          }}
        />
      </div>
    </div>
  );
}
