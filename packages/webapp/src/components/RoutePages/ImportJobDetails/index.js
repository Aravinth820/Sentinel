import React, { Component } from "react"
import Checklist from "../../../../../uicomponents/components/importchecklist/checklist"
import JobDetailSectionFields from "../../../../../uicomponents/sectionfields/jobDetailsSectionFields"

export default class ImportJobDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobId: this.props.jobId,
      jobDetailsSectionFields: {},
     selectedJobData:{}   

    }
  }

  async componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    let jobId = urlParams.get("jobId")

    const apiUrl = `https://api.allegro.sentinel.unifo.in/api/job/v2/import/getJobDetail?jobId=${jobId}`

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const updatedData = await response.text() 
      const data = await JSON.parse(updatedData)
     
      

     

      let updatedSectionFields = JobDetailSectionFields.map(item => {
        
        
        let inputWithId = item.input.find(input => data?.document[input.id]);
       

        
        let checked = inputWithId ? true : false
        return {
          ...item,
          checked: checked,
        };
      
      })
     // console.log('updated          SectionFields',updatedSectionFields)

      this.setState(prevState => ({
        selectedJobData: data?.document,
        jobDetailsSectionFields: updatedSectionFields,
      }))
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error)
    }
  }
  render() {
    return (
      <div>
        {this.props.tabName === "Checklist" ? (
          <Checklist
            jobId={this.state.jobId}
            selectedJobData={this.state.selectedJobData}
            jobDetailsSectionFields={this.state.jobDetailsSectionFields}
            //jobDetailsSectionFields={JobDetailSectionFields} // hardCoded

          />
        ) : this.props.tabName === "Files" ? (
          <p style={{ marginTop: "60px" }}>Files</p>
        ) : (
          <p style={{ marginTop: "60px" }}>Status</p>
        )}
      </div>
    )
  }
}
