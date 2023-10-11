import React from "react";


function Cup({ setProductsitemOpen }) {
  const handleGoBack = () => {
    const confirmed = window.confirm("คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?");
    if (confirmed) {
      setProductsitemOpen(true); // ตั้งค่าเพื่อให้ ul แสดงผล
      window.history.back();
    }
  };

  return (
    <div>
      <h2>Cup</h2>
      {/* เนื้อหาของหน้า White ที่คุณต้องการ */}
      <button onClick={handleGoBack}>ย้อนกลับ</button>
    </div>
  );
}

export default Cup;
