import React, { useState } from "react";
import { Link } from "react-router-dom";

function Code2({ onDataReceived }) {
  const [data, setData] = useState(""); // State เพื่อเก็บข้อมูล

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const sendDataToCode3 = () => {
    // เรียกฟังก์ชันที่รับค่าใน Code1 ผ่าน props
    onDataReceived(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ป้อนข้อมูลที่จะส่งไป Code3"
        value={data}
        onChange={handleChange}
      />
      <Link to="/Custom-Design/ShowUploadFront">
      <button onClick={sendDataToCode3}>ถัดไป</button>
      </Link>
    </div>
  );
}

export default Code2;
