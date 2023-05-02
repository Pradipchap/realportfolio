import React from "react";
import esume from "../Resume-2.docx";
import FileViewer from "react-file-viewer";
import { saveAs } from "file-saver";
import { Download } from "@mui/icons-material";
export default function Resume() {
  const style = {
    // color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    margin:'auto',
    backgroundColor:localStorage.getItem('mode')==='dark'?'black':'white'
  };
  const onDownload1 = () => {
    saveAs(esume, "Resume.docx");
  };

  const file = esume;
  const type = "docx";

  return (
    <div style={style}>
      <div
        onClick={onDownload1}
        style={{
          color: "white",
          backgroundColor: "red",
          width: "7rem",
          paddingBlock: "5px",
          paddingInline: "5px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem",

        }}
      >
        <Download /> <p>Download</p>
      </div>
      <FileViewer fileType={type} filePath={file}/>
    </div>
  );
}
