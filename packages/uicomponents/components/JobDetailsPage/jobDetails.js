import React from "react";
import ReusableBody from "./jobDetailsBody";
import eventBus from '../../../apiIntegration/WebSocket/eventBus'
//import webSocketSendData from "../../apiIntegration/WebSocket/webSocketSendData";
const partyMasterResults = [
  { importerIec: "AABCF2133MCH001", importerName: "xyz", importerId: "456" },
  { importerIec: "NFl2133MCH001", importerName: "xxx", importerId: "123" },
  { importerIec: "NFl2133MCH001", importerName: "xxx", importerId: "678" },
  { importerIec: "xyz", importerName: "xxx", importerId: "986" },
  { importerIec: "SDFRGH2133MCH001", importerName: "xxx", importerId: "456" },
  { importerIec: "rpq2133MCH001", importerName: "xxx", importerId: "456" },
  { importerIec: "NFl2133MCH001", importerName: "xxx", importerId: "456" },
  { importerIec: "Wert2133MCH001", importerName: "xxx", importerId: "456" },
  { importerIec: "Pqr2133MCH001", importerName: "xxx", importerId: "456" },
  { importerIec: "Xyz2133MCH001", importerName: "xxx", importerId: "456" },
  { importerIec: "NWERTYU2133MCH001", importerName: "xxx", importerId: "456" },
  { importerIec: "WERTYU2133MCH001", importerName: "xxx", importerId: "456" },
];

function JobDetails(props) {
  const [fields, setFields] = React.useState(props.SectionFields);
  console.log('fileds in jobDetails',fields)
  const [bulkData, setBulkData] = React.useState(props.dataInfo);
  //const [fieldsCount, setFieldsCount] = React.useState(fields && fields.length > 0? fields?.filter((item) => item.checked).length: 0);
  const [opened, setOpened] = React.useState(props.isOpened);
  const [partyMasterData, setPartyMasterData] = React.useState("");
  React.useEffect(() => {
    setOpened(props.isOpened);
  }, [props.isOpened]);

  React.useEffect(() => {
    setFields(props.SectionFields);
  }, [props.SectionFields]);

  React.useEffect(() => {
    setBulkData(props.dataInfo);
  }, [props.dataInfo]);
  const handleSelectedRow = (selectedRowData) => {
    let data = [selectedRowData];
    if (Array.isArray(data)) {
      data.map((item) => {
        let fieldKey = Object.keys(item);
        // console.log('fieldkey',fieldKey)
        // console.log(item, "hello");
        //let filterValue = fieldKey.map((field) => field.id === item.id);
        fieldKey.map((key) => {
          let wssData = {
            initialValue:bulkData[key],
            changedValue: selectedRowData[key],
           
            
          };
          let updatedData={eventData:wssData, eventName: key,}
          eventBus.publishMessage(updatedData);


        });
        return null;
      });
    }
   
    setBulkData((prevData) => ({
      ...prevData,
      ...selectedRowData,
    }));
  };

  const handleDataUpdate = (id, value) => {
    const filteredResults = partyMasterResults.filter((result) =>
      result.importerIec.toLowerCase().includes(value.toLowerCase())
    );

    setPartyMasterData(filteredResults);
    setBulkData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleData = (clickedFields) => {
    let count = 0;
    const filteredFields = fields.map((field) => {
      const checked = clickedFields.includes(field.id) ? true : false;
      if (checked === true) {
        count += 1;
      }
      return { ...field, checked };
    });

    setFields(filteredFields);
    console.log('bulkData',bulkData)
    
    let updatedValues = {};

    filteredFields.forEach((field) => {
      const checked = clickedFields.includes(field.id);
      if (checked) {
        field.input.forEach((input) => {
          updatedValues[input.id] = bulkData[input.id];
        });
      } else {
        field.input.forEach((input) => {
          updatedValues[input.id] = '';
        });
      }
    });
    
    setBulkData(updatedValues)
    
    
    
    

    
  };
 

  return (
    <div
       style={{ height: "100%",marginLeft:'55px',display:'flex', justifyContent:'center'}}  //marginLeft: props.isOpened ? "231px" : "55px"
    >
      <ReusableBody
        data={props.data}
        propData={props.propData}
        handleData={handleData}
        //fieldsCount={fieldsCount}
        height={'78vh'}
        values={bulkData}
        fields={fields}
        setFields={setFields}
        handleDataUpdate={handleDataUpdate}
        name={props.name}
       partyMasterData={partyMasterData}
        handleSelectedRow={handleSelectedRow}
      />
    </div>
  );
}

export default JobDetails;
