import React, { useEffect } from 'react'
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { Grid } from '@mui/material'
import { BasicDetails } from '../../sectionfields/createJobSection';
import MyCard from '../../inputs/SelectCard';
import CloseIcon from '../../assests/images/close.svg'
import TextField from '../../inputs/TextField';
import Autocomplete from '../../inputs/AutoComplete';
import ChipText from '../../inputs/MultiChip';
import CustomizedButton from '../../inputs/Button/Button'
import FileUploadDnD from '../EmptyDialog/FileDragAndDrop';

const useStyles = makeStyles({
  drawer: {
    display: "flex",
    width: "790px",
    height: "1140px !important"
  },
  header: {
    width: "800px",
    height: "101px",
    flexShrink: 0,
    borderBottom:"1px solid #0000001f"
  },
  headerText: {
    fontFamily: "Inter",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    color: "#050E25",
    paddingTop: "24px",
    paddingLeft: "24px"
  },
  subHeaderText: {
    fontFamily: "Inter",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    color: "#626776",
    paddingTop: "8px",
    paddingLeft: "24px"
  },
  Headerdivider: {
    paddingTop: "6px"
  },
  fileDivider: {
    paddingTop: "32px",
    width:"97.5%"
  },
  basicInfo: {
    //  paddingTop:"22px",
    paddingLeft: "24.5px",
    width: "775px",
    height: "936px",
    paddingBottom: "16px",
    overflowY:"scroll",
    overflowX:"hidden",
    "&::-webkit-scrollbar": {
         width: "5px",
         height: "5px",
         backgroundColor: "transparent",
        },
       "&::-webkit-scrollbar-thumb": {
       backgroundColor: "#CDCFD3",
       borderRadius: "4px",
      },
  },
  basicLabel: {
    paddingTop: "24px",
    fontFamily: "Inter",
    fontSize: "12px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    color: "#050E25",
    lineHeight: "16px"

  },
  basicTypes: {
    position: "relative",
    left: "94px",
    //marginLeft:"97px"
    // border:'2px solid green'
  },
  closeIcon: {
    position: "relative",
    bottom: "3rem",
    left: "47.5rem",
    cursor: "pointer"
  },
  textfield: {
    paddingTop: "24.5px",
    position: "relative",
    right: "10px"
  },


  footer:{
    width:"800px",
    height:"64px",
    borderTop:"1px solid #0000001f",
    marginTop:"42px"
  },
})

function CreateJob(props) {
 console.log(props.openDrawer, 'create job1')
  const classes = useStyles()
  const [selectedLabel, setSelectedLabel] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(props.openDrawer)
  const [jobInfo, setjobInfo] = React.useState(BasicDetails)
  const [totalItems, setTotalItems] = React.useState(0)
  const [createJob, setCreateJob] = React.useState({portOfLoading:'', customHouseCode:'', mot:'Sea'})
  useEffect(() => {
    setOpenDrawer(props.openDrawer)
  }, [props.openDrawer])
  const handleClose = () => {
    props.handleOpenDrawerClose()
    setOpenDrawer(false)
  }


  const handledata = (name, data) => {
    console.log(name, 'name')
    let Data = createJob;
    Data[name] = data 
    setCreateJob(Data)
  }

  const handleCreateJob = () => {
   
    console.log(createJob, 'createJobData')
  }
   console.log(props.masterData, 'masterData')
  return (
    <div>
      <Drawer
        anchor={'right'}
        open={openDrawer}
        className={classes.drawer}
      >
        {/* header Details start */}
        <div className={classes.header}>
          <Typography className={classes.headerText} style={{ fontFamily: "Inter" }}>Create Import Job</Typography>
          <Typography className={classes.subHeaderText} style={{ fontFamily: "Inter" }}>Enter the basic details to create Import Job</Typography>
          <img src={CloseIcon} className={classes.closeIcon} onClick={handleClose} />
        </div>
        {/* header Details End */}

        {/* //tableBasicInfoDetail Start */}

        <div className={classes.basicInfo}>
          {jobInfo.map((label) => (
            <div key={label.label}>
              <Grid container alignItems="center" sx={{mt:'12px', mb:'12px',}}>
                <Grid item xs={2}>
                  <Typography className={classes.basicLabel} style={{ fontFamily: "Inter" }}>{label.label}</Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="row" className={classes.basicTypes}>
                    {(() => {
                      switch (label.type) {
                        case 'selectCard':
                          return (
                              <Grid container sx={{display:'flex'}}>
                                <MyCard
                                  array={label.Inputs}
                                  fieldName={label.optionName}
                                  handledata={handledata}

                                />
                              </Grid>
                          );
                        case 'textField':
                          return (
                            <Grid item className={classes.textfield}>
                              <TextField disableLine={false} placeholder={label.placeholder} size="normal" variant={"standard"} style={{ width: "540px !important" }} propData = {{ws:'', jobId:'', fieldKey:'', userId:''}}/>
                            </Grid>
                          )

                        case 'dropdown':
                          return (
                            <Grid item className={classes.textfield}>
                              <Autocomplete style={{ width: "540px" }} add={true} placeholder={label.placeholder} showUnderline={true} propData = {{ws:'', jobId:'', fieldKey:'', userId:''}} 
                              option = {props.masterData? props.masterData[label.optionName]:[]} name={label.optionName}
                              handledata= {handledata}
                              />
                            </Grid>
                          )

                        case 'chipText':
                          return (
                            <Grid item className={classes.textfield}>
                              <ChipText variant={"underline"} style={{ width: "540px" }}   propData = {{ws:'', jobId:'', fieldKey:'', userId:''}}/>
                            </Grid>
                          )
                        // Add other cases if needed
                        default:
                          return null;
                      }
                    })()}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
          <Divider className={classes.fileDivider} />

          {/* //tableBasicInfoDetail End */}


          <FileUploadDnD/>
        
        </div>      
        {/* //FileTable Header End */}
        <div className={classes.footer}>
          <Grid item style={{height:"48px",marginTop:"15.5px" , display:"flex",alignItems:"baseline" , float:"right" ,position:'relative', right:"23px"}}>
            <Grid style={{position:"relative",right:"16px"}} >
          <CustomizedButton classProperties="tertiaryButtonNormal" text="Cancel" onClick={handleClose} />
          </Grid>
          <Grid>
          <CustomizedButton classProperties="primaryButtonNormal" text="Create Job" onClick = {handleCreateJob}/>
          </Grid>
        </Grid>
        </div>

      </Drawer>
    </div>


  )
}

export default CreateJob