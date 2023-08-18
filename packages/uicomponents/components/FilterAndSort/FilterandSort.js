import React, { useEffect } from 'react'
import Checkbox from '../../inputs/CheckBox';
import Popover from '../../inputs/ArrowDialogbox'
import SearchTextBox from '../../inputs/SearchTextBox';
import { List, ListItem,Typography, useAutocomplete } from '@mui/material';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import {Snackbar} from '@mui/material';
import { Alert } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DatePicker from '../../inputs/DatePicker/DatePicker'
import TextFields from '../../inputs/TextField';
import {Grid} from '@mui/material';
import Button from '../../inputs/Button/Button'
import FilterListIcon from "@mui/icons-material/FilterList";
import { masterServices } from '../../../apiIntegration/masterServices';


const useStyles = makeStyles({
  container: {
  display: 'flex',
  flexDirection: 'column'
 
  },
  container2:{
  display: 'flex',
  flexDirection: 'column',
  width:'16px !important'
  },
  iconContainer: {
  display: "flex !important",
  alignItems: "center !important",
  position: "relative !important",
  left: "8px !important",
  "&:hover": {
  backgroundColor: "#FFFFFF !important",
  },
 },
 iconStyle:{
  color:'#3874FF',
  width: "16px",
  height: "16px", 
  marginRight: "4px"
 },
  paragraph3: {
  fontFamily: "Inter !important",
  fontStyle: "normal !important",
  fontWeight: "600 !important",
  fontSize: "12px !important",
  lineHeight: "16px !important",
  color: '#3874FF'
 },
  heading:{
  // height: "18px",
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: '18px',
  color: "#FFFFFF",
  textAlign: 'start',
  margin:0
  },
  searchListContainer: {
  listStyleType: 'none',
  paddingLeft: 0,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10 ,
  '& .css-h4y409-MuiList-root':{
  display:'flex',
  }
  },
  results: {
  fontFamily: 'Inter',
  color: '#ffffff',
  textAlign: 'left',
  top: '0px',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '16px',
  marginBottom: '0',
  },
 
  failureCard: {
  height: '232px',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  //width: '302px',
  height: '247px',
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 0,
  },
  noResult: {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '16px',
  color: 'white',
  },
  failureMsg: {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#CDCFD3',
  },
  errorImg: {
  height: '66.602054595947266px',
  width: '78.16188430786133px',
  },
  alertMsg: {
  textAlign: 'center',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#FFFFFF',
  },
  snackBar:{
  borderRadius: "4px",
  '& .MuiAlert-message':{
    overflow:'unset !important',
    
  }
 
  },
  checkIcon:{
  color:'#ffffff',
  height: '14px',
  width: '14px'
  },
  alertBox:{
  display: 'flex',
  alignItems: 'center',
  width: "414px",
  height: "50px",
  gap:'10px',
  left: "calc(50% - 414px/2)",
  backgroundColor: "#00B196",
  '& .css-ptiqhd-MuiSvgIcon-root':{
  color : '#FFFFFF',
  }
 
  },
  buttonContainer:{
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 0px 0px 0px'
  },
 
  checkedFalse:{
  color: "#1565c0 !important"
  }
  ,checkedTrue:{
  color: '#D9D9D9 !important'
  },
 checkbox: {
  position: "relative",
  "&::after": {
  content: '""',
  position: "absolute",
  // left: "50%",
  // top: "42%",
  transform: "translate(-50%, -50%) rotate(45deg)",
  width: "5px",
  height: "10px",
  border: "solid white",
  borderWidth: "0 3px 3px 0",
  opacity: 0
  },
  "&.Mui-checked::after": {
  opacity: 1
  }
  },
 
  countContainer: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '0',
  },
  selectedCard: {
  display: 'flex',
  justifyContent: 'space-between',
  // paddingRight: '16px',
  // paddingLeft: '5px',
  },
  itemsSelected: {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#9497A1',
  marginLeft: '8px',
  },
  listDataContainer:{
  width: '100%',
  paddingTop: 0,
  height: "192px",
  maxHeight: "192px",
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
  width: '6px',
  backgroundColor: '',
  borderRadius: '22px',
  
  },
  '&::-webkit-scrollbar-thumb': {
  backgroundColor: "#505767",
  height: "105px",
  borderRadius: '4px',
  },
  },
  listItem: {
  
 
  },
  listContent: {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px' ,
  marginLeft: '8px',
  color: '#FFFFFF',
  },
  // date Field Styles 
  dateFieldContainer: {
  display: 'flex',
  justifyContent:'space-between',
  alignItems: 'center',
  width: '413px',
  margin: '0px 0px 0px 0px'
 
  },
  selectDate: {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#9497A1',
  },
  filterIcon: {
  // marginTop: "-0.2rem !important",
  height: "16px !important",
  width: "16px !important",
  marginLeft: "6px !important",
 },
 loadingCard:{
  display: 'flex',
   flexDirection:'column',
   justifyContent: 'center', 
   alignItems:'center',
   width: '302px',
   height: '247px'
 },
 loadingText:{
  fontFamily: 'Inter',
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '16px',
  color:'#FFFFFF !important'
 }
 })
 
 
 
 const LoadingView = () =>{
  const classes = useStyles()
  return ( <Box className={classes.failureCard}>
 <CircularProgress sx={{width: '20px', height: '20px'}}/>
 <Typography className={classes.loadingText}>Loading...</Typography>
 </Box>)}
 
 
const FailureView = () => {
  const classes = useStyles()
  return(
  <Box className={classes.failureCard}>
      <img src = 'https://res.cloudinary.com/duoqwzxmo/image/upload/v1685289673/2634442_fjpepr.jpg' alt ='404' className={classes.errorImg}/>
      <h1 className={classes.noResult}>No Result Found</h1>
      <p className={classes.failureMsg}>We cannot find the item you are searching, may be enter the correct value</p>
  </Box>
  )
}
 
export default function FilterAndSort(props) {
  const { listData,filterName, icon, data, transform, boxPosition, ArrowPlaced, top, fieldName} = props
  const [dateSelected, setDateSelected] = useState('')
  const [isChecked, setCheckedStatus] = useState(false)
  const [searchValue, setSearchInput] = useState("")
  const [listOfResults, setListOfResults] = useState(listData)
  const [open, setOpen] = useState(false)
  const [checkedList, setCheckedList] = useState([])
  const [openDialog ,setOpenDialog] = React.useState(false)
  const [checkedItems, setCheckedItems] = React.useState(listData)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalSelected, setTotalSelected] = useState(0)
  const [selectAll, setSelectAll] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    setListOfResults(listData)
    const count = listData.filter(item => item.checked).length;
    setTotalSelected(count)

  }, [listData])

  const handleSearchInputChange = async  (searchInput) => {
    setSearchInput(searchInput.value)

    if (props.label === 'Importer'){
      setIsLoading(true);
    
        try{
          let  options = await masterServices.getPartyMaster(searchInput)
          let checkedListIds = checkedList.filter(each => each.checked === true).map(each => each.id)
          let finalList =  options.map(each => {
            if (checkedListIds.includes(each.id)){
              return {...each, checked: true }
            }
            return each
          })
          props.handleData(finalList)
          setListOfResults(finalList)
  
        
        }
        catch(error){
          setIsLoading(false);
          setIsError(true);
        }
        setIsLoading(false)

    }
    else{
      let filteredResults = checkedItems.filter(item => item.fieldName.toLowerCase().includes(searchInput.value.toLocaleLowerCase()))
      setListOfResults(filteredResults) 

    }

  }
  
  
  const handleOpen= ()=>{
    setOpenDialog(!openDialog)
    //setListOfResults(listData)
  }
 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;
  
    }
    setOpen(false);
  }
  const handleApplyClick = () => {
    setOpen(true)
    const checkedIds = [];
    for (const key in checkedItems) {
      if (checkedItems[key].checked) {
      checkedIds.push(checkedItems[key].id);
      }
    }

    if (props.label === 'Importer'){
      let checkedListIds = listOfResults.filter(each => each.checked === true).map(each => each.id)
        let finalList =  listOfResults.map(each => {
          if (checkedListIds.includes(each.id)){
            return {...each, checked: true }
          }
          return each
        })
      return props.handleData(finalList)
    }

    let resultArray;
    if (props.fieldName === 'Toolbar'){
      resultArray = checkedIds.map(index => ({id: checkedItems[index - 1]?.id,value:data.label + " : " + checkedItems[index - 1]?.label}))
      let payload;
      
      if (props.filterType === 'Date&Time'){
        payload = {key:data.label, selected:[{value:data.label + " : " + dateSelected}]}
        return props.handleData(checkedIds, payload)
      }
      else{
        console.log(resultArray, 'resultArray')
        payload = {key:data.label, selected:resultArray}
        return props.handleData(checkedIds, payload);
      }
    }

    props.handleData(checkedIds)

  }

  const handleSelectAll = () => { 
    setSelectAll(!selectAll)
    let finalList;
    let count;
    if (!selectAll){
      finalList = listOfResults.map(eachItem => ({...eachItem, checked: true}))
      
    }
    else{
      finalList = listOfResults.map(eachItem => ({...eachItem, checked: false}))
    }
    setListOfResults(finalList)
    count = finalList.filter(item => item.checked).length;
    setTotalSelected(count)

    setCheckedItems(finalList)


  }
  
  const handleAnyCheckboxClick = (status, id) => {
    const resultItems = checkedItems.map(each => {
      if (each.id === id){
        return {...each, checked:!each.checked}
      }
      return each
    })
    let selectedItems = listOfResults.map(each => {
      if (each.id === id){
        return {...each, checked:!each.checked}
      }
      return each
    })
  
    setListOfResults(selectedItems)

    setCheckedItems(resultItems)

    const count = resultItems.filter(item => item.checked).length;
    setTotalSelected(count)
  }
  const handleDateTimeSelected = (dateSelected) => {
    setDateSelected(dateSelected)

  }
 
  const handleCancel = () => {
    setOpenDialog(false)
  
  }

  return(
      <Grid container className={props.name==='Table' ? `${classes.container2}`:`${classes.container}`} > 
        {props.name !== 'Table' ? 
        <Grid container className={classes.iconContainer}onClick={handleOpen}>
        {icon}
        {(filterName === 'Add Details' || filterName === 'Add Sections') && <p className={classes.paragraph3}>{filterName}</p>}
        </Grid> : <FilterListIcon className={classes.filterIcon} onClick={handleOpen}/>}
        <Grid style={{position: "fixed", marginTop: "-2px",zIndex: "999"}}>
          <Popover
            className = {classes.popover}
            open={openDialog}
            setOpen={setOpenDialog}
            height='auto'
            ArrowPosition={data?.filterType === 'date' ? '194px': (data?.id == 'createdBy' || data?.id === 'update' || data.id === 'time' ||data.id==='JobDetails' || data.id === 'status')? data.ArrowPosition: "16px"} 
            //anchorOrigin={{ vertical: 'top', horizontal: 'top' }}
            transform={transform}
            boxPosition={boxPosition}
            ArrowPlaced={ArrowPlaced}
            filterType={props.filterType}
            top={top}
          >
          <h1 className={classes.heading}>Filter by</h1>
          {props.data?.subFilterValues !== undefined ? 
          <> <List classes={{root:classes.searchListContainer}}>{data.subFilterValues.map(each => <SearchTextBox text={each.label} placeholder={each.placeholder} key = {each.label} width={each.width} searchValue = {searchValue}backgroundColor='#242C40' border="none" handleSearchInputChange ={handleSearchInputChange} />)} 
          </List > 
          <p className={classes.results}>{listOfResults?.length} Results</p>
            {isLoading && <LoadingView/>}
            {isError && <FailureView/>}
            {!isLoading && !isError && listOfResults && <SuccessView listItems={listOfResults} handleAnyCheckboxClick={handleAnyCheckboxClick} totalSelected = {totalSelected} handleSelectAll={handleSelectAll} selectAll = {selectAll}/>}
          </> 
          : 
          <DateField dateSelected={dateSelected} handleDateTimeSelected = {handleDateTimeSelected} filterType={props.filterType}/>
          }
          <FooterButtons isChecked = {isChecked} handleCancel={handleCancel} handleApplyClick={handleApplyClick} dateSelected={dateSelected}/>
          </Popover>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} className={classes.snackBar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
          <Alert onClose={handleClose} icon={<CheckCircleIcon className={classes.checkIcon}/>} className={classes.alertBox} sx={{backgroundColor: '#00B196'}}>
          <p className={classes.alertMsg}>{`Job is Filtered based on ${data?.label} successfully`}</p>
          </Alert>
        </Snackbar>
      </Grid>
  )
 }
 
 
export const SuccessView = ({listItems, handleAnyCheckboxClick, totalSelected, handleSelectAll, selectAll}) => { 
  const classes = useStyles()
  const [listData, setListData] = useState(listItems)


  useEffect(() => {
    setListData(listItems)
  })

  const totalItemsSelected = (updatedItems) => {
    const count = updatedItems.filter(item => item.checked).length;
  }

  const handleSelectAllItems = () => { 
 
    handleSelectAll()
    
  }
 
  const handleCheckboxChange = (id) => {
    const updatedItems = listData.map((item) => {
    if (item.id === id) {
      return {
      ...item,
      checked: !item.checked, 
      };
    }
    return item;
      });

    let isChecked = updatedItems.some(each => each.checked === true)
   
    totalItemsSelected(updatedItems)
    handleAnyCheckboxClick(isChecked, id)
  };
  
  
  return(
  <Grid> 
    <Grid className={classes.selectedCard}>
      <Grid className={classes.countContainer}>
        <Checkbox 
        sx={{width: '16px', height: '16px'}}
        className = {selectAll? classes.checkedTrue: classes.checkedFalse}
        onChange = {()=> handleSelectAllItems()}
        handleCheckboxChange = {handleSelectAllItems}
        neutral={true} 
        id = "selectAll" 
        />
        <label className={classes.itemsSelected} htmlFor="selectAll">Select All</label>
      </Grid>
      <p className={classes.itemsSelected}>{totalSelected} items selected</p>
    </Grid>
    <List className={classes.listDataContainer} sx={{padding: '0px 0px 0px 0px'}}>
    {listData.map(each => <ListItem sx={{paddingLeft: '0px', borderBottom: '1px solid #32394C', width: '100% !important'}} key = {each.id} style = {each.checked ? {backgroundColor: '#242C40'}: null}><Checkbox id = {each.id} isChecked={each.checked}
    classes={{root: classes.checkbox}}
    handleCheckboxChange = {handleCheckboxChange}
    /><label className={classes.listContent} htmlFor={each.id}>{each.fieldName}</label></ListItem>)}
    </List>
  </Grid>
  )}
 
export const DateField = (props) =>{
  const classes = useStyles()
  const {handleDateTimeSelected, dateSelected, filterType} = props
  return (
    <Grid className={classes.dateFieldContainer}>
      <p className={classes.selectDate}>Select Date</p>
      <TextFields placeholder = {'From Date & Time - To Date & Time'}
      value = {dateSelected}
      iconType={ <DatePicker handleSelectedDate = {handleDateTimeSelected} numberOfMonths = {2}/>}
      showEndAdornment = {true}
      filterType ={filterType}
      variant = 'standard'
      style={{width:'285px', color:'#ffffff'}}
      />
    
    </Grid>
  )
  
 }
 
export const FooterButtons = ({isChecked, dateSelected, handleApplyClick, handleCancel}) => {
  const classes = useStyles()
  return(<Box className={classes.buttonContainer}>
          <Button classProperties='tertiaryButtonCondensed' text='Cancel' onClick={handleCancel} style={{marginLeft: '-14px'}}>Cancel</Button>
          <Button classProperties="primaryButtonCondensed" text='Apply' onClick={handleApplyClick}>Apply
          </Button>
          {/* {(isChecked || dateSelected) ? <Button classProperties="primaryButtonCondensed" text='Apply' onClick={handleApplyClick}>Apply
          </Button> :
          <Button classProperties='primaryButtonCondensed' text = "Apply" disabled={true}>Apply
          </Button>
          } */}
      </Box>)
 }
 