import React, { useState, useRef } from "react";
import initiateWebSockets from "../../../apiIntegration/WebSocket/initiateWebSocket";
import LeftNavigation from "../LeftNavigation/leftNavigation";
import homeData from "../../sectionfields/ImportLeftNavigation";
import JobDetailsSectionFields from "../../sectionfields/jobDetailsSectionFields";
import JobDetails from "../JobDetailsPage/jobDetails";
import TextFields from "../../inputs/TextField";

const invoiceData = [
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
];
const data = {
  value: "importerDetails",
  label: "Importer",
  subFilter: true,
  level: "Job",
  width: "318px",
  subFilterValues: [
    {
      parentfield: "Importer",
      label: "Add Fields",
      width: 286,
      value: "customerName",
      level: "job",
    },
  ],
};
function checklist(props) {
  console.log("prop fieldss", props.jobDetailsSectionFields);
  console.log("props.selectedJobData", props.selectedJobData);

  const { jobId } = props;
  const [isWebSocketAlive, setIsWebSocketAlive] = React.useState(false);
  // const [leftNavigationFields, setLeftNavigationFields] = React.useState(homeData);

  const [isOpened, isSetOpened] = React.useState(true);
  const [serverId, setServerId] = React.useState("");
  const USER_ID = "User-1";

  let ws = useRef(null);
  React.useEffect(() => {
    if (!ws.current) {
      initiateWebSockets(ws, jobId, setIsWebSocketAlive, setServerId, USER_ID);
    }
    //!NOTE return a callback function that closes the websocket and also the event bus listeners
  }, []);
  const propData = {
    ws,
    jobId,
    isWebSocketAlive,
    userId: USER_ID,
  };
  return (
    <div>
      <LeftNavigation
        position={"top"}
        invoicesData={invoiceData}
        homeData={homeData}
        isSetOpened={isSetOpened}
        data={data}
        //setLeftNavigationFields={setLeftNavigationFields}
        //handleMenuClick={handleNavigateToPage}
      />
      <JobDetails
        name={"Job Details"}
        SectionFields={props.jobDetailsSectionFields}
        dataInfo={props.selectedJobData}
        data={data}
        isOpened={isOpened}
        propData={propData}
      />
    </div>
  );
}

export default checklist;
