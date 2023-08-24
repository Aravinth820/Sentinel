import React, { Component } from "react";
//import { PDFDocument } from "pdf-lib";
import { Typography } from "@mui/material";
import DragDropIcon from '../assests/images/drag & drop.svg'
class DragAndDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drag: false
        };
    }
    dropRef = React.createRef();
    dragCounter = 0;

    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({ drag: true });
            this.props.onDragChange(true)
        }
    };
    // handleConvert = async (event, index) => {
    //     let fileArray = Array.from(event).map(file => ({ file }));
    //     fileArray.forEach(Newfile => {
    //       let reader = new FileReader();
    //       if (Newfile.file && Newfile.file.type === "application/pdf") {
    //         reader.readAsArrayBuffer(Newfile.file);
    //         reader.onloadend = async () => {
    //           console.log(reader.result);
    //           const pdf = await PDFDocument.load(reader.result);
    //           const pages = pdf.getPages()?.length;
    //           Newfile["count"] = pages || 0;
    //           if (Newfile.count) {
    //             this.props.handleDrop(Newfile, index)
    //           }
    //           else {
    //             Newfile["count"] = 0
    //             this.props.handleDrop(Newfile, index)
    //           }
    //         };
    //       } else {
    //         this.props.handleDrop(Newfile, index);
    //       }
    //     });
    // }
    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter === 0) {
            this.setState({ drag: false });
            this.props.onDragChange(false)
        }
    };
    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ drag: false });
        this.props.onDragChange(false)
        console.log(e, "items");

        // let fileList = this.state.files;
        // for (var i = 0; i < files.length; i++ ){
        // if(!files[i].name)
        // return fileList.push(files[i].name)
        // }
        // this.setState({files:fileList})

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files)
           // this.props.handleDrop(e.dataTransfer.files);
            console.log(e.dataTransfer.file, "file drag and drop");
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
        
    };
    componentDidMount() {
        let div = this.dropRef.current;
        div.addEventListener("dragenter", this.handleDragIn);
        div.addEventListener("dragleave", this.handleDragOut);
        div.addEventListener("dragover", this.handleDrag);
        div.addEventListener("drop", this.handleDrop);
    }
    componentWillUnmount() {
        let div = this.dropRef.current;
        div.removeEventListener("dragenter", this.handleDragIn);
        div.removeEventListener("dragleave", this.handleDragOut);
        div.removeEventListener("dragover", this.handleDrag);
        div.removeEventListener("drop", this.handleDrop);
    }
    render() {
        return (
            <div
               // style={{ display: "inline-block", position: "relative" }}
                ref={this.dropRef}
            >
                {this.state.drag && (
                    <div
                        style={{
                          //  border: "dashed rgba(192, 191, 177, 0.33) 4px",
                            backgroundColor: "rgba(192, 191, 177, 0.08)",
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 9999,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#050E25",
                            fontWeight:"600",
                            fontFamily: "Inter",
                        }}
                    >
                     <img src={DragDropIcon} />
                     <Typography
                  style={{
                    color: "#050E25",
                    fontFamily: "Inter",
                    marginBottom: "8px",
                    marginTop: "8px",
                    fontWeight:"600"
                  }}
                >
                      {this.props.uploadedFiles>0?"Drop Your Files": ""}
                      </Typography>
                </div>
                )}
                {this.props.children}
            </div>
        );
    }
}
export default DragAndDrop;