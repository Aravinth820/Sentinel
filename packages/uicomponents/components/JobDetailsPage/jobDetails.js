import React from "react";
import ReusableBody from "./jobDetailsBody";

function JobDetails(props) {
  const [fields, setFields] = React.useState(props.SectionFields);
  const [bulkData, setBulkData] = React.useState(props.dataInfo);
  //const [fieldsCount, setFieldsCount] = React.useState(fields && fields.length > 0? fields?.filter((item) => item.checked).length: 0);
  const [opened, setOpened] = React.useState(props.isOpened);
  React.useEffect(() => {
    setOpened(props.isOpened);
  }, [props.isOpened]);
  React.useEffect(() => {
    setFields(props.SectionFields);


  }, [props.SectionFields]);

  React.useEffect(() => {
    setBulkData(props.dataInfo);
    

  }, [props.dataInfo]);



  const handleDataUpdate = (id, name, value) => {
    setBulkData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        fieldValues: {
          ...prevData[id]?.fieldValues,
          [name]: value,
        },
      },
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

    

    //setFieldsCount(count);
  };

  return (
    <div
      style={{ height: "100%", marginLeft: props.isOpened ? "231px" : "55px" }}
    >
      <ReusableBody
        data={props.data}
        propData={props.propData}
        handleData={handleData}
       // fieldsCount={fieldsCount}
        values={bulkData}
        fields={fields}
        setFields={setFields}
        handleDataUpdate={handleDataUpdate}
        name={props.name}
        height={"80vh"}
      />
    </div>
  );
}

export default JobDetails;
