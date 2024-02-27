import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, CircularProgress } from "@mui/material";
import { ReportService } from "../services/ReportService";
import { toast } from "react-toastify";
import UploadFileIcon from "@mui/icons-material/UploadFile";

interface UploadFlag {
  setIsopen: Function;
}

export const Upload: React.FC<UploadFlag> = ({ setIsopen }): JSX.Element => {
  const fileTypes = ["CSV"];
  const [file, setFile] = useState<any>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleChange = (file: React.ChangeEvent<HTMLInputElement>) => {
    console.log(file);
    setFile(file);

  };

  const upload = () => {
    setIsloading(true)
    
    let formData = new FormData();
    formData.append("file", file);
    
    new ReportService()
      .upload(formData)
      .then((res) => {
        toast.success("File was uploaded Succesfully");
        setIsopen(false);
      })
      .catch(() => toast.error("Some error occured"))
      .finally(()=> setIsloading(false))
  };

  return (
    <div className="pl-7 pr-7 pb-7">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        disabled={isLoading}
      >
        <div className="h-96 flex flex-col rounded-md bg-slate-300 items-center justify-center border-dashed border-2 border-sky-500 ">
          <CloudUploadIcon color="action" sx={{ fontSize: 40 }} />
          <span>{
            file == null?'Drag files here to upload' : file.name
            }</span>
        </div>
      </FileUploader>
      {isLoading ? (
        <div className="text-center my-2">
          <CircularProgress color="success" />
          Uploading files...
        </div>
      ) : (
        ""
      )}
      <div className="mt-1">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          onClick={() => {
            if(file == null){
                toast.warn('please select a file')
            }else{
                upload();
            }
          }}
          startIcon={<UploadFileIcon />}
        >
          Upload
        </Button>
      </div>
    </div>
  );
};
