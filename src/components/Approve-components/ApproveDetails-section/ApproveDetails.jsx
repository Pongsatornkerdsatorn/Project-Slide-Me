import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { fetchApproveDriverById } from "../../../Data/ApproveData";
import Form from 'react-bootstrap/Form';
import "./ApproveDetails.css";
function ApproveDetails() {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const driverData = fetchApproveDriverById(id);
    setDriver(driverData);
  }, [id]);

  const [showFirst, setShowFirst] = useState(false); // สำหรับ Modal แรก
  const [showSecond, setShowSecond] = useState(false); // สำหรับ Modal ที่สอง

  
  const handleFirstShow = () => setShowFirst(true);
  const handleFirstClose = () => setShowFirst(false);

 
  const handleSecondShow = () => setShowSecond(true);
  const handleSecondClose = () => setShowSecond(false);

  if (!driver) {
    return (
      <div className="loading-container">
        <Spinner animation="border" />
      </div>
    );
  }


  const handleViewFile = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="ApproveDetails-container">
      {/* Sidebar */}
      <div className="approve-sidebar">
        <div className="approve-avatar">
          <img
            src={driver.avatar || "https://via.placeholder.com/120"}
            alt="Driver Avatar"
            className="avatar-img"
          />
        </div>
        <h5 className="approve-title">โปรไฟล์ผู้ขับ</h5>
        <p className="approve-details">Username: {driver.username}</p>
        <p className="approve-details">สถานะ: {driver.documentStatus}</p>
        <p className="approve-details">
          สถานะการทำงาน:{" "}
          <span className={driver.isActive ? "status-active" : "status-inactive"}>
            {driver.isActive ? "Active" : "Inactive"}
          </span>
        </p>
        <button className="reject-account-btn">ลบบัญชี</button>
      </div>

      <div className="approve-info-content">
        <h1 className="content-title">ข้อมูลพื้นฐานของผู้ขับ</h1>
        <div className="approve-info-list">
          <div className="info-item">
            <span>ชื่อ (First Name, Last Name)</span>
            <input
              type="text"
              value={`${driver.firstName} ${driver.lastName}`}
              disabled
              style={{ width: "25rem" }}
            />
          </div>
          <div className="info-item">
            <span>อีเมล (Email)</span>
            <input
              type="email"
              value={driver.email}
              disabled
              style={{ width: "25rem" }}
            />
          </div>
          <div className="info-item">
            <span>เบอร์โทรศัพท์ (Phone Number)</span>
            <input
              type="text"
              value={driver.phone}
              disabled
              style={{ width: "25rem" }}
            />
          </div>
          <div className="info-item">
            <span>วันที่สมัคร (Registration Date)</span>
            <input type="text" value={new Date(driver.registrationDate).toLocaleDateString()} disabled  style={{ width: "25rem" }}/>
          </div>
        </div>

        <h2 className="content-title" style={{ marginTop: "100px" }}>
          ข้อมูลเกี่ยวกับการขับรถ
        </h2>
        <div className="info-item">
          <span>หมายเลขรถ (Vehicle Number)</span>
          <input
            type="text"
            value={driver.licensePlate}
            disabled
            style={{ width: "25rem" }}
          />
        </div>
        <div className="info-item">
          <span>ประเภท (Vehicle Type)</span>
          <input
            type="text"
            value={driver.vehicleType}
            disabled
            style={{ width: "25rem" }}
          />
        </div>
        <div className="info-item">
          <span>เอกสารที่จำเป็น (License, Registration, Insurance)</span>
          <ul>
            {driver.documents.map((doc, index) => (
              <li key={index}>
                <button
                  className="view-file-btn btn btn-danger"
                  onClick={() => handleViewFile(doc)}
                    style={{
                        marginBottom: "1rem",
                    }}
                >
                 <i class="bi bi-filetype-pdf"></i>{index + 1}
                </button>
              </li>
            ))}
          </ul>
          </div>
          <>
  
          <div>
      
      <Button variant="danger" onClick={handleFirstShow} style={{ marginRight: "1rem", borderRadius: "50px", marginTop: "2rem" }} >
       ไม่ผ่าน
      </Button>

     
      <Modal show={showFirst} onHide={handleFirstClose}>
        <Modal.Header closeButton>
          <Modal.Title>กรอกข้อความให้ผู้สมัคร</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label></Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFirstClose}>
            ปิด
          </Button>
          <Button variant="danger" onClick={handleFirstClose}>
          ส่ง
          </Button>
        </Modal.Footer>
      </Modal>

    
      <Button
        variant="btn btn-success"
        onClick={handleSecondShow}
        style={{
          borderRadius: "50px",
          width: "10rem",
          marginTop: "2rem",
          marginRight: "40rem",
        }}
      >
        อนุมัติผู้ขับ
      </Button>

      
      <Modal show={showSecond} onHide={handleSecondClose}>
        <Modal.Header closeButton>
          <Modal.Title>การอนุมัติสำเร็จ</Modal.Title>
        </Modal.Header>
        <Modal.Body>ผู้ขับได้รับการอนุมัติเรียบร้อยแล้ว</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSecondClose}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
      </div>
    </div>
  );
}

export default ApproveDetails;
