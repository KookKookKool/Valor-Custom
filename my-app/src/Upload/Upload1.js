import React, { useState } from "react";
import "./Upload1.css"

function Upload({ onUpload, allowedTypes, maxSize }) {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);

  function handleChange(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (allowedTypes && allowedTypes.length > 0) {
        const fileExtension = selectedFile.type.split('/')[1];
        if (!allowedTypes.includes(fileExtension)) {
          setError("ประเภทของไฟล์ไม่ถูกต้อง");
          return;
        }
      }

      if (maxSize && selectedFile.size > maxSize) {
        setError("ขนาดของไฟล์ใหญ่เกินไป");
        return;
      }

      setError(null);
      setFile(URL.createObjectURL(selectedFile));
      onUpload(selectedFile);
    }
  }

  return (
    <div className="Upload">
      <input
        type="file"
        id="fileInput"
        accept={allowedTypes && allowedTypes.length > 0 ? allowedTypes.map(type => `.${type}`).join(',') : "image/*"}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <label htmlFor="fileInput" className="upload-button center-text">
        อัพโหลดรูปภาพ
      </label>
      {error && <p className="error-message">{error}</p>}

    </div>
  );
}

export default Upload;
