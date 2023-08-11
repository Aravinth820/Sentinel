import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";


export default function Chips({label,icon, styles, handleChipDelete, key, id}) {

  const handleClick = () => {
    //console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    //console.info("You clicked the delete icon.");
    handleChipDelete(id)
  };

  return (
    <Stack direction="row" spacing={0} style={{margin:'0px 8px 0px 8px',}}>
      <Chip
        label={label}
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={React.cloneElement(icon, {
          style: { fontSize: "12px", color: "#626776" , width:'16px', height: '16px'},
        })}
        style={{display: 'flex', alignItems:'center',border: '1px solid #EFF0F1', color: '#626776',...styles }}
        
      />
    </Stack>
  );
}