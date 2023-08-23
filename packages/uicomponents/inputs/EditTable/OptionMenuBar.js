import React from "react";
import OptionPaper from "./OptionMenuIcon";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import DeleteIcon from '@mui/icons-material/Delete';



export const MenuBar = (props) => {
  const { accordionOpen, index, handleDelete,clickedIcon} = props;
  



  

  const handleChange = (index) => {
    
    props.clickedIcon(index)
  };
  const deleteItem=((index)=>{
    props.handleDelete(index)
  })

  

  const JoblistMenu = [
    {
      name: "UnfoldMoreIcon",
      icon: accordionOpen ? <UnfoldLessIcon style={{height:"16px",width:"16px",color:'#CDCFD3'}}/> : <UnfoldMoreIcon style={{height:"16px",width:"16px",color:'#CDCFD3'}}/>,
      onClick: () => handleChange(index), 
      showTooltip: true,
      toolTipName: "Collapse",
    },
    {
      name: "Delete",
      icon: <DeleteIcon style={{height:"16px",width:"16px",color:'#CDCFD3'}}/>,
      showTooltip: true,
      toolTipName: "Delete",
      onClick: () => deleteItem(index), 
    },
  ];

  return (
    
      <OptionPaper OptionMenu={JoblistMenu} AccordionOpen={accordionOpen} />
    
  );
};
