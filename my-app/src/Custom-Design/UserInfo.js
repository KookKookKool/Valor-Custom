import React from "react";
import Back from "../Asset/icon/Back.png";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


const UserInfo = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      navigate(-1); // This will navigate back to the previous page
    }
  };

  const handleNext = () => {
    navigate("/Payment");
  };

  return (
    <div>
      <div>
        <div className="container">
          <img id="Logo" src={require("../logo.png")} alt="img" />
          <div className="Frame2">
            <div>
              <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
            </div>
            <div className="">
              <button id="" style={{ marginLeft: "5%" }}>
                <img src={Back} alt="Back" onClick={handleGoBack} />
              </button>
            </div>

            <h3 style={{ display: "flex", justifyContent: "center", marginTop: "-40px" }}>ข้อมูลสำหรับการจัดส่งสินค้า</h3>

            <div className="inputgroup" style={{ display: "flex", justifyContent: "center",alignItems: "center", flexDirection: "column" }}>
            <div className="inputUserinfo">
            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="ชื่อ" variant="outlined" />
            <TextField style={{ margin: "1rem" }} id="outlined-basic" label="นามสกุล" variant="outlined" />
            </div>
            <div className="inputUserinfo">
            <TextField style={{ margin: "1rem" }}  id="outlined-basic" label="ที่อยู่จัดส่ง" variant="outlined" />
            <TextField style={{ margin: "1rem" }}  id="outlined-basic" label="ตำบล / แขวง" variant="outlined" />
            </div>
            <div className="inputUserinfo">
            <TextField style={{ margin: "1rem" }}  id="outlined-basic" label="อำเภอ / เขต" variant="outlined" />
            <TextField style={{ margin: "1rem" }}  id="outlined-basic" label="จังหวัด" variant="outlined" />
            </div>
            <div className="inputUserinfo">
            <TextField style={{ margin: "1rem" }}  id="outlined-basic" label="รหัสไปรษณีย์" variant="outlined" />
            <TextField style={{ margin: "1rem" }}  id="outlined-basic" label="เบอร์ติดต่อ" variant="outlined" />
            </div>

            <TextField style={{ margin: "1rem", maxWidth: "430px" }}  id="outlined-basic" label="อีเมล" variant="outlined" />

            <button className="BtnNext" onClick={handleNext} >ถัดไป</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
