import React, {
  useState,
  useRef,
  Suspense,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import InfiniteScroll from "react-infinite-scroller";

import initiateWebSockets from "../../../apiIntegration/WebSocket/initiateWebSocket";
import LeftNavigation from "../LeftNavigation/leftNavigation";
import homeData from "../../sectionfields/ImportLeftNavigation";
import JobDetailsSectionFields from "../../sectionfields/jobDetailsSectionFields";
import JobDetails from "../JobDetailsPage/jobDetails";
import TableVirtuoso from "../../../uicomponents/inputs/EditTable/TableVirtuoso";

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
  label: "Job Details",
  subFilter: true,
  id:"JobDetails",
  ArrowPosition:"16px",
  subFilterValues: [
    {
      parentfield: "Job Details",
      label: "Search",
      width: 286,
    },
  ],
};
const leftNavigationFilterDesign = {
  subFilter: true,
  id:"leftNavigation",
  ArrowPosition:"16px",
  subFilterValues: [
    {
      parentfield: "LeftNavigation",
      label: "Search",
      width: 286,
    },
  ],
};
const CommercialTaxDetails = [
  {
    row: [
      {
        id: "srNo",
        numeric: true,
        minWidth: 80,
        isSortable: true,
        default: true,
        label: "S.No",
      }, //flexGrow:1
      {
        id: "statusCode",
        numeric: false,
        minWidth: 160,
        isSortable: false,
        default: true,
        display: false,
        label: "Status Code",
        sticky: true,
        flexGrow: 1,
      },
      {
        id: "commercialTaxType",
        numeric: false,
        minWidth: 480,
        isSortable: true,
        default: true,
        display: false,
        label: "Commercial Tax Type",
        flexGrow: 1,
      },
      {
        id: "commercialTaxReg",
        numeric: false,
        minWidth: 320,
        isSortable: false,
        default: true,
        display: true,
        label: "Commercial Tax Reg. No.",
        flexGrow: 1,
      },
    ],
  },
];
const CommercialTaxDetailsData = [
  { statusCode: "100", commercialTaxType: "ABC", commercialTaxReg: "FVFV" },
  { statusCode: "200", commercialTaxType: "DEF", commercialTaxReg: "VRFVCFVF" },
  { statusCode: "300", commercialTaxType: "HGBVF", commercialTaxReg: "FVFGVG" },
  {
    statusCode: "400",
    commercialTaxType: "GVFCDX",
    commercialTaxReg: "GVFGFVGF",
  },
  {
    statusCode: "500",
    commercialTaxType: "AVGFCFVFG",
    commercialTaxReg: "GVFVGV",
  },
];

function checklist(props) {
  const { jobId } = props;
  const [isWebSocketAlive, setIsWebSocketAlive] = React.useState(false);
  const [leftNavigationFields, setLeftNavigationFields] =React.useState(homeData);
 

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
    <div style={{ backgroundColor: "#F6F9FF" }}>
      <LeftNavigation
        position={"top"}
        invoicesData={invoiceData}
        homeData={homeData}
        isSetOpened={isSetOpened}
        data={leftNavigationFilterDesign}
        setLeftNavigationFields={setLeftNavigationFields}
       
        //handleMenuClick={handleNavigateToPage}
      />
      <JobDetails
        name={"Job Details"}
        SectionFields={props.jobDetailsSectionFields}
       // SectionFields={JobDetailsSectionFields}
        dataInfo={props.selectedJobData}
        data={data}
        isOpened={isOpened}
        propData={propData}
      />
       {leftNavigationFields.map(item => (
                item.name!=='Job Details' && item.checked === true ?  <TableVirtuoso itemName={item.fieldName} icon={item.icon} columns={item.columns} listData={item.data} checkbox={true} hover={item.hover}  isOpened={isOpened}/>  : null ))}
        
    </div>
  );
}

export default checklist;
