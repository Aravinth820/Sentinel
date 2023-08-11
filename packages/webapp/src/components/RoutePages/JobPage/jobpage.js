import React, { Component } from 'react'
import ListTable from '../../../../../uicomponents/components/jobpage/joblistTable'
import importColumns from '../../../../../uicomponents/sectionfields/jobPageImportSectionFields';
import { navigate } from '@reach/router'

import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ToolBarReusable from '../../../../../uicomponents/components/ToolBar/ToolBar';


const scrolledListData = [
  {
    id: 0,
    a: "14/09/2022 4:00pm",
    jobNo: "AICB/1438/2023-24",
    jobId:"111",
    jobType:"Import",
    jobCreationDate: "14/09/2022 4:00pm",
    beSbType: "14/09/2022",
    time: "14/09/2022 4:00pm",
    transactionRefNo: "FJIMAAMIMP-2213033 2",
    shipperName: "Harmo International Pvt Ltd.",
    consigneeName: "XYZ",
    f: "Tokyo",
    status: "Success",
    customsHouseCode: "12345678",
    customsHouseCode: "",
    createdBy: "XYZ",
    beSbNo: "INCCV4",
    update: "XYZ",
    email: "Invoice No M3/ 009 M3 Overseas yz@unifo.in",
    mot: "Land",
    FromAddress: "xyz@ccu@flyjacLogistics.comdice@unifo.in",
    ToAddress: "xyz@unifo.inyz@unifo.inyz@unifo.inyz@unifo.inyz@unifo.in",
  },

  {
    id: 0,
    a: "sxdgfvbnc fgbh",
    jobNo: "ECB/1438/2023-24",
    beSbType: "rfsdgelijmko,",
    jobId:"211",
    jobType:"Import",
    jobCreationDate: "22-05-2023",
    time: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    f: "sdefrgthiu",
    status: "Success",
    customsHouseCode: "12345678",
    customsHouseCode: "cxbgvvbh",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    update: "wsdetfgh",
    email: "wertyuioASDFGHJ",
    mot: "Air",
    FromAddress: "23456789012345",
    ToAddress: "23456789",
  },

  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    jobId:"311",
    jobType:"Import",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    email: "werfghjsdfgthygtfdesedfrgthy@mail",
    mot: "Sea",
    FromAddress: "2389012345678123456782345678234234567823456",
    ToAddress: "234567321123456789",
  },

  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    jobId:"411",
    jobType:"Import",
    transactionRefNo: "123",
    shipperName: "XSDFGHJKQW",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    mot: "Air",
  },

  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    email: "wertyuioASDFGHJKdfghjsdfgthygtfdesedfrgthy@mail",
    mot: "Land",
    FromAddress:
      "23456789012345678902345678901234567890123456781234567823456782345678234567823456",
    ToAddress: "23456789012345678123456789987654321123456789",
  },

  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    mot: "Sea",
  },

  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    mot: "Land",
  },

  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    mot: "Air",
  },

  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    mot: "Sea",
  },

  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    mot: "Land",
  },
  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
    mot: "Sea",
  },
  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
  },
  {
    id: 0,
    jobNo: "ECB/1438/2023-24",
    jobCreationDate: "22-05-2023",
    transactionRefNo: "123",
    shipperName: "XYZ",
    consigneeName: "XYZ",
    status: "Success",
    customsHouseCode: "12345678",
    createdBy: "XYZ",
    beSbNo: "sdfghj",
  },
];



export default class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullAccordianOpen: false,
    };
  }

  toggleAccordion = () => {
    this.setState((prevState) => ({
      fullAccordianOpen: !prevState.fullAccordianOpen,
    }));
    console.log('Clicked')
  };

    onClickJobLink = (data)=>{
        if(data.jobNo.includes("ECB")){
            navigate("/app/jobs/import?id=" + data.jobId + "&jobType=" + data.jobType);
        }

    }
  render() {
    return (
      <>
      <ToolBarReusable
       handleIconClick={this.toggleAccordion}
      data={ {
        icons: [
           this.state.fullAccordianOpen ? UnfoldMoreIcon: UnfoldLessOutlinedIcon,
         ],
         filter:true,
         isTextDisabled: false,
         isButtonGrp: false,
         disabledIcons: [],
         dividerIndices: [],
         group: false,
         scenario: 'totalJobs',
         dynamicNumber: 8,
       }}
       buttonComponent={ {
          disabled: false,
          classProperties: 'Create-Job-btn',
          text: 'Create Job',
          onClick: () => 'button clicked',
       }}
       auditIcons={ [
          { component: HighlightOffRoundedIcon, color: 'red' },
          { component: WarningOutlinedIcon, color: '#e86f79' },
          { component: InfoOutlinedIcon, color: '#f5dd2c' },
      ]}
       auditValues={ [26,33,76]}
       searchBox={ {
          width:"302px",
          dropDown: true,
          text:"Search",
          color: "#000000",
          backgroundColor:"#F6F9FF",
          border:"1px solid #EFF0F1",
       } }
      />
      <ListTable listData={scrolledListData} columns={importColumns} onClickJobLink={this.onClickJobLink} accordion={this.state.fullAccordianOpen}/>
      </>
    )
  }
}