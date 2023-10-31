import React from "react";
import Code3 from "./FrontCustom";

function Code4() {
  // สร้างข้อมูลที่จะส่งไป Code3
  const dataToSendToCode3 = "ข้อมูลจาก Code4";

  return (
    <div>
      <h1>ด้านหน้า</h1>
      <Code3 receivedData={dataToSendToCode3} />
    </div>
  );
}

export default Code4;
