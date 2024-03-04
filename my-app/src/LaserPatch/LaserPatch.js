// LaserPatch.js
import { useState, useEffect } from "react";
import "./Index.css";
import Back from "../Asset/icon/Back.png";
import LaserPatchMockup from "../LaserPatch/LaserPatchHover.png";
import { setUploadedImagePatch, setImageStyleOptionPatch } from '../Actions/actionsPatch'; // แก้ชื่อ action creator ที่นี่
import Zone from "../LaserPatch/Zone.png";
import Upload from "../Upload/Upload1";
import { useDispatch, connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import ImageSaveButton from "../Custom-Design/ImageSaveButton";

import "../Components/Products.css";

function LaserPatch({ uploadedImageFront, setUploadedImageFront, setImageStyleOptionFront, onImageUpload }) {
  //const dispatch = useDispatch();
  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1");
  const [imageStyle, setImageStyle] = useState({
    width: "44%",
    paddingLeft: "4px",
    objectPosition: "left 0px top 220px",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageUpload = (uploadedImageFront) => {
    console.log("Uploaded Image Front:", uploadedImageFront);
    setUploadedImageFront(uploadedImageFront, 0); // index 0 สำหรับ WhiteFront
  };

  const handleSaveImage = () => {
    // ทำการ dispatch action เพื่อบันทึกรูป
    setUploadedImageFront(uploadedImageFront);
    setImageStyleOptionFront(imageStyleOption);
    dispatch(setImageStyleOptionFront(imageStyleOption));
    navigate('/');
  };

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
    setImageStyleOptionFront(selectedOption);
    
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "1, default":
          setImageStyle({
            width: "100%",
            objectPosition: "left 0px top 105px",
          });
          break;
        case "2":
          setImageStyle({
            width: "100%",
            objectPosition: "left 0px top 105px",
          });
          break;
        case "3":
          setImageStyle({
            width: "100%",
            objectPosition: "left 0px top 105px",
          });
          break;
        case "4":
          setImageStyle({
            width: "100%",
            objectPosition: "left 0px top 105px",
          });
          break;
        case "5":
          setImageStyle({
            width: "100%",
            objectPosition: "left 0px top 105px",
          });
          break;
        case "6":
          setImageStyle({
            width: "100%",
            objectPosition: "left 0px top 105px",
          });
          break;
        default:
          // กระทำเมื่อไม่มี case ไหนตรงกับ imageStyleOption
          break;
      }
    }
  }, [showDropdown, imageStyleOption]);

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      navigate("/Main");
    }
  };

  return (
    <>
      <div className="container">
        <img id="Logo" src={require("../logo.png")} alt="img" />
        <div className="Frame1">
          <div className="HeaderText1">
            <h3 className="CenteredHeader1">CUSTOM DESIGN</h3>
          </div>
          <div className="Box7">
              <button id="BntBack1" onClick={handleGoBack}>
                <img src={Back} alt="Back" />
              </button>
            </div>
          <div className="Box">
            <div className="FieldCustom">
              <div className="CustomFront">
                <img id="MockupLaserPatch" src={Zone} alt="Mockup" />
                {uploadedImageFront ? (
                  <img
                    id="FieldUploadPatch"
                    src={uploadedImageFront}
                    alt="FieldUpload"
                    style={imageStyle}
                  />
                ) : (
                  <img
                    id="FieldDesignPatch"
                    src={LaserPatchMockup}
                    alt="FieldDesign"
                  />
                )}
              </div>

              <div className="Box5">
                {showDropdown && (
                  <div className="dropdown">
                    <label>ขนาด:</label>
                    <select
                      value={imageStyleOption}
                      onChange={(e) => handleImageStyleChange(e.target.value)}
                    >
                      <option value="1, default">A3</option>
                      <option value="2">A4</option>
                      <option value="3">A5</option>
                      <option value="4">A6</option>
                      <option value="5">A7</option>
                      <option value="6">A8</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="Box4">
                {showDropdown && (
                  <div className="dropdown">
                    <label>ขนาด:</label>
                    <select
                      value={imageStyleOption}
                      onChange={(e) => handleImageStyleChange(e.target.value)}
                    >
                      <option value="1, default">A3</option>
                      <option value="2">A4</option>
                      <option value="3">A5</option>
                      <option value="4">A6</option>
                      <option value="5">A7</option>
                      <option value="6">A8</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="Box6">
              <Upload onUpload={handleImageUpload} index={5} />
                <button className='Btnsave' onClick={handleSaveImage}>บันทึกและถัดไป</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToPropsPatch = (state) => ({
  uploadedImagePatch: (state.Patch && state.Patch.images && state.Patch.images[0]) || null,
  imageStyleOption: state.Patch ? state.Patch.imageStyleOption : null,
});

const mapDispatchToPropsPatch = (dispatch) => ({
  setUploadedImagePatch: (image) => dispatch(setUploadedImagePatch(image, 0)),
  setImageStyleOptionPatch: (imageStyleOption) => dispatch(setImageStyleOptionPatch(imageStyleOption)), 
  getImageStyleOptionPatch: () => dispatch({ type: "GET_IMAGE_STYLE_OPTION_FRONT" }),
});


export default connect(mapStateToPropsPatch, mapDispatchToPropsPatch)(LaserPatch);
