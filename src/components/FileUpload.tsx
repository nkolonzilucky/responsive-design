"use client";
import uploadFile from "@/lib/actions";
import { useState } from "react";

export default function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setMessage((await uploadFile(formData)).message);
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Error uploading file.");
    }
  };

  return (
    <div className="border p-4">
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        className=""
      />
      <button className="btn btn-secondary" onClick={handleUpload}>
        Save file
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
