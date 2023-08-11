import React, { Component } from "react"
import Checklist from "../../../../../uicomponents/components/importchecklist/checklist"

export default class ImportJobDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            jobId:this.props.jobId
        }
    }

  async componentDidMount(){
                
  }
  render() {
    return <div>{this.props.tabName === "Checklist" ? <Checklist jobId = {this.state.jobId} /> : <p>files</p>}</div>
  }
}
