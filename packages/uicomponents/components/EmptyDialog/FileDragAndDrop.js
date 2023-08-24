import React ,  {useState , useRef }  from 'react'
import { Typography,Grid, Divider, FormControl} from '@mui/material';
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import DeleteIcon from '@mui/icons-material/Delete';
import {DialogContent} from '@mui/material';
import {DialogContentText} from '@mui/material';
import { makeStyles } from "@mui/styles";
//import FileUpload from '../assets/Icons/FileUpload.svg'
import CustomizedButton from '../../inputs/Button/Button'
import Add from '../../assests/images/add.svg'
import DragDropIcon from '../../assests/images/drag & drop.svg'
import Files from '../../assests/images/file.svg'
import DragAndDrop from '../../inputs/DragAndDrop';
import { PDFDocument } from "pdf-lib";
import {Snackbar} from "@mui/material";
import Alert from "@mui/material/Alert";
import { Paper } from '@mui/material';
import PdfFiles from '../../assests/images/PdfFiles.svg'
import OptionPaper from '../TooltipMenu/ToolTipMenu';
const useStyles = makeStyles((theme) => ({
  
  container1: {
    //marginTop: "16px !important",
    padding: "24px",
    borderRadius: "24px",
    "&::-webkit-scrollbar": {
      width: "5px",
      background: "transparent",
    },
    "&::-webkit-scrollbar-track ": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb ": {
      backgroundColor: "#CDCFD3",
    },
  },
  gridItem: {
    display: "flex",
    alignItems: "baseline",
    marginBottom: "2px",
  },
  paragraph1: {
    width: "50%",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    color: "#626776 !important",
    minHeight: "16px",

    padding: "4px 8px !important",
  },
  paragraph2: {
    width: "50%",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "16px !important",
    color: "#050E25 !important",
  },
  heading: {
    color: "var(--sentinel-v-2-grey-grey-900, #050E25) !important",
    fontSize: "16px !important",
    fontFamily: "Inter !important",
    fontWeight: "600 !important",
    lineHeight: "20px !important",
  },
  heading1: {
    color: "var(--sentinel-v-2-grey-grey-500, #626776) !important",
    marginTop: "8px !important",
    fontSize: "14px !important",
    fontFamily: "Inter !important",
    lineHeight: "18px !important",
  },
  
  errorImg: {
    height: "66.602054595947266px",
    width: "78.16188430786133px",
    marginBottom: "8px",
  },
  FileHeader:{
    paddingTop:"32px",
    display:"flex",
    alignItems:"baseline"
},
totalFiles:{
 position:"relative",
  fontFamily:"Inter",
    fontSize:"14px !important",
    fontStyle:"normal !important",
    fontWeight:"400 !important",
    color:"#000000",
    marginLeft:"8px !important"
},
AddButton:{
  position:"relative",
  left:"35rem"
  
},
FileTable:{
  position:"relative",
  top:"1rem",
  marginRight:"16px"
},
fileUpload:{
  position:"relative",
  top:"2px"
 },
 fileList:{
  height:"43px",
  width:"716.5px",
  marginBottom:"16px",
  flexGrow:1
 },
 checking:{
  marginLeft:"28.5px"
 },
 Headerdivider: {
  paddingTop: "6px"
},
fileTableBody:{
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
  snackBar:{
    borderRadius: "4px",
    '& .MuiAlert-message':{
      overflow:'unset !important',
      
    }
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
    //color : '#FFFFFF',
    }
   
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

 
}));







function  FileUploadDnD(props) {
  const {ImageFile }=props

  const classes = useStyles();
 
  const TableHeader= [{name:"Sr.No"},{name:"Filename"}]
  const [files, setFiles] = React.useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [open, setOpen] = useState(false);
  const [limitAlert, setFileLimitAlert] = useState(false)
  const [dragActive , setIsDragActive] = React.useState(false)
  const [uploadFiles , setUploadFiles] = React.useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const fileInputRef = useRef(null)
 const  handleDragChange = (value)=>{
    setIsDragActive(value)
  }

  const handleFileSelect = (event)=>{
    handleCount(event)
  }

  const handleCount = async (event, index) => {
    let fileArray = Array.from(event).map(file => ({ file }));
    fileArray.forEach(Newfile => {
      let reader = new FileReader();
      if (Newfile.file && Newfile.file.type === "application/pdf") {
        reader.readAsArrayBuffer(Newfile.file);
        reader.onloadend = async function () {
          console.log(reader.result);
          const pdf = await PDFDocument.load(reader.result);
          const pages = pdf.getPages()?.length
          Newfile["count"] = pages
          if (Newfile.count) {
            setUploadFiles(Newfile)
            handleFiles(Newfile, index)
          }
          else {
            Newfile["count"] = 0
            handleFiles(Newfile, index)
            
          }
        }
      }
      else {
        handleFiles(Newfile, index)
      }
    })
  }



  const handleFiles = (newfile , index) => { 
    let filesArray = [...files];
    console.log(filesArray, 'previous')
    console.log(newfile, 'newfile')
    let arrMatch = files.filter((f) => {
      return f.name === newfile.file.name
    })  

    if (arrMatch.length === 0) {
      if (index === undefined || index === null) {

        let jsonObj = {
          name: newfile.file.name,
          size: newfile.file.size,
        }
        filesArray.push(jsonObj);
       
      } else {
        filesArray = filesArray.map((obj, i) => {
          if (i === index) {
            obj.name = newfile.file.name
            obj.size = newfile.file.size
            obj.isBtnDigitizeDisabled = false
            obj.progressStart = 12

          }
          return obj
        })

      }

    }
    setFiles(prevState => 
        {
          const getUniqueObjectsFromArray = (array) => {
            const uniqueObjects = new Map();
          
            for (const obj of array) {
              const key = JSON.stringify(obj);
              if (uniqueObjects.has(key)) {
                setOpen(true)
              }
              uniqueObjects.set(key, obj);
            }
          
            return Array.from(uniqueObjects.values());
          }
          const combinedArray = [...prevState, ...filesArray]
          const finalFiles = getUniqueObjectsFromArray(combinedArray)
          return finalFiles
          
        } 
      
      );
  };


  const handleFileUpload = (event) =>{
    const selectedFile = event.target.files
    fileInputRef.current.click();
    if (selectedFile){
      handleCount(selectedFile)

    }
    
  }

  const handleClose = () => {
    setOpen(false)
    setFileLimitAlert(false)
  }

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
    setIsHovered(true)

  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const handleDeleteFile = (name) => {
    const updatesFiles = files.filter(eachFile => eachFile.name !== name)
    setFiles(updatesFiles)
  }
  if(files.length > 8){
    setFileLimitAlert(true)
    setFiles([])
  }

  return (
    <div>
      <Grid container className={classes.FileHeader}>
        <img src={Files} className={classes.fileUpload} alt='file upload'/>         
        <Typography className={classes.totalFiles} style={{fontFamily:"Inter"}}>Total Files : {files.length}</Typography>
        <Grid item className={classes.AddButton}>
          {
                <FormControl>  
                  <input
                    multiple
                    type="file"
                    id="myfile"
                    name="myfile"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileUpload} 
                  />
                  <CustomizedButton classProperties="tertiaryButtonNormal" text={"Add File"} startIcon={true} leftIcon={Add} onClick={handleFileUpload} />
                  </FormControl>
            }
        </Grid>  
        </Grid>
      <Grid  className={classes.FileTable}>      
      <div style={{height:'376px',backgroundColor:'#F6F9FF'}}>
        <div
            style={{
              backgroundColor: "#F6F9FF",
              display: "flex",
              padding: "24px",
              paddingTop: "24px",
            }}
          >
            <div style={{ flex: 1, display: "flex", justifyContent: "left" }}>
              <span
                style={{
                  display: "flex",
                  position:"relative",
                  left:'-16px'
                
                }}
              >
                {TableHeader.map((name)=>{
                  return(
                    <Typography
                    style={{
                      color: "#626776",
                      fontSize: "12px",
                      fontFamily: "Inter",
                      fontWeight: "400",
                      marginLeft: "8px",
                      paddingLeft:"8px",
                    }}
                  >
                    {name.name}
                  </Typography>
                  )
                })}
              
              </span>
            </div>
          </div>
          <DialogContent
            style={{
              backgroundColor: "#F6F9FF",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "0px",
              paddingBottom: "16px",
            }}
            className={classes.fileTableBody}
            
          >
          <DialogContentText >
            <DragAndDrop handleDrop = {handleCount} onDragChange={handleDragChange} uploadedFiles={files.length}>
            {files.length === 0 ? <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "24px",
                    height: "312px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }} 
                >
                  <img src={DragDropIcon} alt="404" className="errorImg" />
                  <Typography
                    style={{
                      color: "#050E25",
                      fontFamily: "Inter",
                      marginBottom: "8px",
                      marginTop: "8px",
                      fontWeight:"600"
                    }}
                  >
                  {dragActive ? "Drop Your Files":"Drag and Drop Files"} 
                  </Typography>
                  <Typography
                    style={{
                      color: "#626776)",
                      fontSize: "12px",
                      fontFamily: "Inter",
                      fontWeight: "600",
                      lineHeight: "16px",
                    }}
                  >
                  { dragActive?"":"Please click add button to add Files"}
                  </Typography>
                </div> :<div style={{height:"312px"}} >
                    {files.map((name , index)=>{
                      return(
                        <Paper className={classes.fileList}   onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}>
                          <Grid container style={{alignItems:"baseline",display:"flex",position:"relative" , top:"12px", paddingRight:'16px'}}>
                              <Typography
                                  style={{
                                  color: "#626776",
                                  fontSize: "12px",
                                  fontFamily: "Inter",
                                  fontWeight: "400",
                                  marginLeft: "8px",
                                  paddingLeft:"8px"
                                }}
                              >
                              {index+1}.
                              </Typography>
                              <img src={PdfFiles} alt="pdfIcon" className={classes.checking} />
                              <Typography
                                  style={{
                                  color: "#050E25",
                                  fontSize: "12px",
                                  fontFamily: "Inter",
                                  fontWeight: "400",
                                  paddingLeft:"4px",
                                  position:"relative",
                                  bottom:"2px"
                                }}
                              >
                              {name.name}
                              </Typography>
                            <Grid style ={{display:'flex', justifyContent:'flex-end',flexGrow:1,}}>
                              <Typography  style={{
                                color: "#9497A1",
                                fontSize: "12px",
                                fontFamily: "Inter",
                                fontWeight: "400",
                                position:"absolute",
                                bottom:"1px",
                                // marginLeft:"24rem"
                              }}>
                                Uploaded Successfully
                              </Typography>
                              {isHovered && (hoveredIndex === index)? (
                                  <span
                                    className={ classes.iconsboxOpened}
                                  >
                                    <OptionPaper
                
                                      OptionMenu = {[{
                                        name: "UnfoldMoreIcon",
                                        icon: true ? (
                                          <DeleteIcon   onClick = {() => handleDeleteFile(name.name)}
                                            style={{ height: "16px", width: "16px", color: "#CDCFD3" }}
                                          />
                                        ) : (
                                          <UnfoldMoreIcon
                                            style={{ height: "16px", width: "16px", color: "#CDCFD3" }}
                                          />
                                        ),
                                        onClick: () => {},
                                        showTooltip: true,
                                        toolTipName: "Collapse",
                                      },]}
                                    />
                                  </span>
                                ) : null}
                          
                            </Grid>
                        </Grid>
                    </Paper>
                      )
                    })}
                  </div>}
                </DragAndDrop>
                <Snackbar open={open} autoHideDuration={6000} className={classes.snackBar}onClose={handleClose} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
                  <Alert onClose={handleClose} severity="error" className={classes.alertBox} >
                    Duplicate Files,Try Again
                  </Alert>
                </Snackbar>
                <Snackbar open={limitAlert} autoHideDuration={6000} className={classes.snackBar} onClose={handleClose} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
                  <Alert onClose={handleClose} severity="warning" className={classes.alertBox} >
                    Uploaded More than 8 Files, Try Again
                  </Alert>
                </Snackbar>
            </DialogContentText>
          </DialogContent> 
        
      </div>
      </Grid>
    </div>
  )
}

export default FileUploadDnD