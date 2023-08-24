import React, { Component } from "react"
import ListTable from "../../../../../uicomponents/components/jobpage/joblistTable"
import importColumns from "../../../../../uicomponents/sectionfields/jobPageImportSectionFields"
import { navigate } from "@reach/router"
import { getIndexedMasterData }from './getIndexedDB'
import UnfoldLessOutlinedIcon from "@mui/icons-material/UnfoldLessOutlined"
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded"
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import ToolBarReusable from "../../../../../uicomponents/components/ToolBar/ToolBar"
import { AuthContext } from "../SignIn/AuthContext"



export default class MyJobs extends Component {
  static contextType = AuthContext
  constructor(props) {
    super(props)
    this.state = {
      fullAccordianOpen: false,
      scrolledListData: [],
      loading: true,
      openDrawer:false,
      masterData:null
    }
  }

  async componentDidMount() {
    const apiUrl =
      "https://api.allegro.sentinel.unifo.in/api/job/v2/import/getAllJobs?jobType=IMPORT"

    try {
      let options =  await getIndexedMasterData()
      this.setState({masterData:options})
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json() // or response.text() depending on your response format
      this.setState(prevState => ({
        scrolledListData: data.documents,
        loading: false,
      }))
      console.log('data',data?.documents)
   
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error)
    }
    
  }

  toggleAccordion = () => {
    this.setState(prevState => ({
      fullAccordianOpen: !prevState.fullAccordianOpen,
    }))
    console.log("Clicked")
  }

  onClickJobLink = data => {
    console.log('data coming in navigation',data)
    if (data.jobNo.includes("ICB")) {
      navigate("/app/jobs/import?id=" + data.jobNo + "&jobType=" + "import"+ "&jobId=" + data._id)
    }
  }


  handleOpenDrawerClose = () => {
    this.setState({openDrawer: !this.state.openDrawer})
  }
  
  render() {
    return (
      <>
        <ToolBarReusable
          handleIconClick={this.toggleAccordion}
          data={{
            icons: [
              this.state.fullAccordianOpen
                ? UnfoldMoreIcon
                : UnfoldLessOutlinedIcon,
            ],
            name: "jobListPage",
            filter: true,
            isTextDisabled: false,
            isButtonGrp: false,
            disabledIcons: [],
            dividerIndices: [],
            group: false,
            scenario: "totalJobs",
            dynamicNumber: this.state.scrolledListData?.length,
          }}
          buttonComponent={{
            disabled: false,
            classProperties: "Create-Job-btn",
            text: "Create Job",
            onClick: () => this.handleOpenDrawerClose(),
          }}
          auditIcons={[
            { component: HighlightOffRoundedIcon, color: "red" },
            { component: WarningOutlinedIcon, color: "#e86f79" },
            { component: InfoOutlinedIcon, color: "#f5dd2c" },
          ]}
          auditValues={[26, 33, 76]}
          searchBox={{
            width: "302px",
            dropDown: true,
            text: "Search",
            color: "#000000",
            backgroundColor: "#F6F9FF",
            border: "1px solid #EFF0F1",
          }}
          openDrawer = {this.state.openDrawer}
          handleOpenDrawerClose = {this.handleOpenDrawerClose}
          masterData = {this.state.masterData}
        />
        <ListTable
          listData={this.state.scrolledListData}
          columns={importColumns}
          onClickJobLink={this.onClickJobLink}
          accordion={this.state.fullAccordianOpen}
          loading={this.state.loading}
        />
      </>
    )
  }
}
