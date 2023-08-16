import React from "react";
import FilterAndSort from "../FilterAndSort/FilterandSort";
import ItemDetails from "../../assests/images/ItemDetails.svg";
import { Typography, Grid } from "@mui/material";
import AutoComplete from "../../inputs/AutoComplete.js";
import TextField from "../../inputs/TextField.js";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NotFound from "../../assests/images/NotFound.svg";
import AddIcon from "@mui/icons-material/Add";
import MultiChipText from "../../inputs/MultiChip";
import ToggleSwitch from "../../inputs/ToggleSwitch";

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    color: "#3874FF",
    width: "16px",
    height: "16px",
    marginRight: "4px",
  },
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
    width: "45%",
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
}));

function ReusableBody(props) {
  const { fields, values, handleDataUpdate, setFields, propData } = props;
  let fieldsCount =
    fields && fields.length > 0
      ? fields?.filter((item) => item.checked).length
      : 0;

  const classes = useStyles();
  return (
    <div
      style={{ height: "90vh", backgroundColor: "#F6F9FF", marginTop: "48px" }}
    >
      <div
        style={{
          backgroundColor: "#F6F9FF",
          display: "flex",
          borderTop: "2px solid #EFF0F1",
          padding: "24px",
          paddingTop: "24px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ alignSelf: "flex-start" }}>
          <FilterAndSort
            data={props.data}
            icon={<AddIcon className={classes.iconStyle} />}
            listData={fields}
            setFilterFields={setFields}
            handleData={props.handleData}
            filterName="Add Details"
          />
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: "-65px",
            }}
          >
            <img src={ItemDetails} alt="404" />
            <Typography
              style={{
                color: "var(--sentinel-v-2-grey-grey-900, #050E25)",
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: "600",
                marginLeft: "8px",
              }}
            >
              {props.name}
            </Typography>
          </span>
        </div>
      </div>
      <DialogContent
        style={{
          backgroundColor: "#F6F9FF",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "0px",
          paddingBottom: "24px",
        }}
      >
        <DialogContentText>
          {fieldsCount === 0 ? (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                height: props.height,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={NotFound} alt="404" className="errorImg" />
              <Typography
                style={{
                  color: "#050E25",
                  fontFamily: "Inter",
                  marginBottom: "8px",
                  marginTop: "8px",
                }}
              >
                No Fields Added
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
                Please click on Add Details to add Fields
              </Typography>
            </div>
          ) : (
            <Grid
              container
              spacing={2}
              className={classes.container1}
              style={{
                backgroundColor: "#ffffff",
                height: "auto",
                maxHeight: props.height,
                overflowY: "auto",
                width: "100%",
                marginLeft: "0px",
                justifyContent: "space-between",
                marginTop: "0px",
              }}
            >
              {fields?.map((sectionField, index) => {
               
                if (sectionField.checked) {
                  return (
                    <Grid
                      key={index}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={5.7}
                      xl={5.7}
                      className={classes.gridItem}
                    >
                       <div
                        style={{
                          width: "100%",
                        
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                      
                      {sectionField.fieldHeaders.map(
                        (inputField, inputIndex) => {
                          if (inputField.type !== "separator") {
                            return (
                              <Typography className={classes.paragraph1}>
                                {inputField.name}
                              </Typography>
                            );
                          } else {
                            return <div
                            style={{
                              width: "20px",
                              height: "24px",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              style={{
                                color: " #EFF0F1",
                                fontFamily: "Inter",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: 800,
                                lineHeight: "16px",
                              }}
                            >
                              |
                            </Typography>
                          </div>
                          }
                        }
                      )}
                      </div>
                      <div
                        style={{
                          width: "100%",
                      
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {sectionField.input.map((inputField, inputIndex) => {
                            
                             let propData2 = { ...props.propData,fieldKey:inputField.id}
                             

                          let inputValue = values[inputField.id];
                         
                          if (inputField.type === "textField") {
                            return (
                              <TextField
                              keyName={inputField.id}
                                variant="standard"
                                disableLine={true}
                                name={inputField.name}
                                value={inputValue || ""}
                                propData={propData2}
                                handledata={handleDataUpdate}
                                placeholder={inputField.placeholder}
                                id={sectionField.id}
                                error={
                                  inputValue !== "" && inputField.cndSatisfied
                                    ? false
                                    : inputField.error
                                }
                                mandatory={
                                  inputValue !== "" && inputField.cndSatisfied
                                    ? false
                                    : inputField.mandatory
                                }
                                style={{
                                  width: inputField.width,
                                  marginBottom: "12px",
                                }}
                              />
                            );
                          } else if (inputField.type === "dropDown") {
                            return (
                              <AutoComplete
                              keyName={inputField.id}
                                propData={propData2}
                                value={inputValue || ""}
                                popUpHover={true}
                                variant="standard"
                                handledata={handleDataUpdate}
                                id={sectionField.id}
                                option={inputField.option}
                                error={
                                  inputValue !== "" && inputField.cndSatisfied
                                    ? false
                                    : inputField.error
                                }
                                mandatory={
                                  inputValue !== "" && inputField.cndSatisfied
                                    ? false
                                    : inputField.mandatory
                                }
                                name={inputField.name}
                                add={inputField.add}
                                placeholder={inputField.placeholder}
                                style={{
                                  position: "relative",
                                  width: inputField.width,
                                  marginBottom: "12px",
                                }}
                              />
                            );
                          } else if (inputField.type === "multiChipText") {
                            return <MultiChipText style={{ width: "100%" }} propData={propData2}    keyName={inputField.id}/>;
                          } else if (inputField.type === "toggle") {
                            return <ToggleSwitch toggle={true} propData={propData2}    keyName={inputField.id}/>;
                          } else if (inputField.type === "separator") {
                            return (
                              <div
                                style={{
                                  width: "20px",
                                  height: "24px",
                                  paddingLeft: "8px",
                                  paddingRight: "8px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  style={{
                                    color: " #EFF0F1",
                                    fontFamily: "Inter",
                                    fontSize: "12px",
                                    fontStyle: "normal",
                                    fontWeight: 800,
                                    lineHeight: "16px",
                                  }}
                                >
                                  |
                                </Typography>
                              </div>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </div>
                    </Grid>
                  );
                } else {
                  return null;
                }
              })}
            </Grid>
          )}
        </DialogContentText>
      </DialogContent>
    </div>
  );
}

export default ReusableBody;
