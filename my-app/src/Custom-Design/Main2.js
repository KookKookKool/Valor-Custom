// Main2.js
import React from "react";

const Main2 = ({ savedImage }) => {
  return (
    <div className="Main2">
      <h1>หน้า Main2</h1>
      {savedImage && <img src={savedImage} alt="SavedImage" />}
      {/* แสดงรูปภาพที่บันทึกไว้ */}
      {/* สามารถแสดงรูปภาพที่บันทึกไว้ที่นี่ */}
    </div>
  );
};

export default Main2;
