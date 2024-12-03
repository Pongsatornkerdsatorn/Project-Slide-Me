import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { fetchDriverById } from "../../../Data/UserData";
import "./DriverDetails.css";
import Spinner from 'react-bootstrap/Spinner';

function DriverDetails() {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);  // ติดตามสถานะการแก้ไข
  const [updatedDriver, setUpdatedDriver] = useState({});  // ข้อมูลที่อัปเดต

  useEffect(() => {
    const driverData = fetchDriverById(id); 
    setDriver(driverData); 
    setUpdatedDriver(driverData); // กำหนดข้อมูลเริ่มต้นใน updatedDriver

    // ถ้ามีข้อมูลใน localStorage ให้โหลด
    const storedData = localStorage.getItem(`driver_${id}`);
    if (storedData) {
      setUpdatedDriver(JSON.parse(storedData)); // ถ้ามีข้อมูลเก่าใน localStorage ให้โหลดมาใช้
    }
  }, [id]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ฟังก์ชันที่ใช้ในการแก้ไขข้อมูล
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDriver({ ...updatedDriver, [name]: value });
  };

  const handleSaveChanges = () => {
    setDriver(updatedDriver); // อัปเดตข้อมูล driver
    setIsEditing(false); // ออกจากโหมดแก้ไข
    localStorage.setItem(`driver_${id}`, JSON.stringify(updatedDriver)); // เก็บข้อมูลลง localStorage
    handleShow(); // เปิด modal แจ้งเตือนการบันทึก
  };

  if (!driver) {
    return <Spinner animation="border" />;
  }

  // คำนวณการเดินทาง
  const totalTrips = driver.serviceHistory.reduce((total, entry) => total + entry.usageCount, 0);
  
  // คำนวณคะแนนเฉลี่ย
  const averageRating = driver.serviceHistory.length > 0
    ? driver.serviceHistory.reduce((total, entry) => total + entry.rating, 0) / driver.serviceHistory.length
    : 'No ratings';

  return (
    <div className="DriverDetails-container">
      {/* Sidebar */}
      <div className="driver-sidebar">
        <div className="driver-avatar">
          <img
            src={driver.avatar || "https://via.placeholder.com/120"}
            alt="Driver Avatar"
            className="avatar-img"
          />
        </div>
        <h5 className="driver-title">แก้ไขโปรไฟล์</h5>
        <p className="driver-details">Username: {driver.username}</p>
        <p className="driver-details">สถานะ: {driver.role}</p>
        <p className="driver-details">
          สถานะการทำงาน:{" "}
          <span
            className={driver.isActive ? "status-active" : "status-inactive"}
          >
            {driver.isActive ? "Active" : "Inactive"}
          </span>
        </p>
        <button className="delete-account-btn">ลบบัญชี</button>
      </div>

      <div className="driver-info-content">
        <h1 className="content-title">ข้อมูลพื้นฐานของผู้ขับ</h1>
        <div className="driver-info-list">
          <div className="info-item">
            <span>ชื่อ (First Name, Last Name)</span>
            <div className="input-container">
              <input 
                type="text" 
                name="firstName"
                value={updatedDriver.firstName} 
                disabled={!isEditing} 
                onChange={handleInputChange}
              />
              <input 
                type="text" 
                name="lastName"
                value={updatedDriver.lastName} 
                disabled={!isEditing} 
                onChange={handleInputChange}
                style={{ marginLeft: '30px' }}
              />
              <button className="edit-btn" onClick={handleEditClick}>
                <i className="bi bi-pencil-fill"></i>
              </button>
            </div>
          </div>
          <div className="info-item">
            <span>อีเมล (Email)</span>
            <div className="input-container">
              <input 
                type="email" 
                name="email"
                value={updatedDriver.email} 
                disabled={!isEditing} 
                onChange={handleInputChange}
              />
              <button className="edit-btn" onClick={handleEditClick}>
                <i className="bi bi-pencil-fill"></i>
              </button>
            </div>
          </div>
          <div className="info-item">
            <span>เบอร์โทรศัพท์ (Phone Number)</span>
            <div className="input-container">
              <input 
                type="text" 
                name="phone"
                value={updatedDriver.phone} 
                disabled={!isEditing} 
                onChange={handleInputChange}
              />
              <button className="edit-btn" onClick={handleEditClick}>
                <i className="bi bi-pencil-fill"></i>
              </button>
            </div>
          </div>
          <div className="info-item">
            <span>วันที่สมัคร (Registration Date)</span>
            <div className="input-container">
              <input
                type="text"
                value={new Date(updatedDriver.registrationDate).toLocaleDateString()}
                disabled
              />
              <button className="edit-btn">
                <i className="bi bi-pencil-fill"></i>
              </button>
            </div>
          </div>
        </div>

        <h2 className="content-title" style={{ marginTop: "100px" }}>ข้อมูลเกี่ยวกับการขับรถ</h2>
        <div className="info-item">
          <span>หมายเลขรถ (Vehicle Number)</span>
          <div className="input-container">
            <input 
              type="text" 
              name="licensePlate" 
              value={updatedDriver.licensePlate} 
              disabled={!isEditing} 
              onChange={handleInputChange}
            />
            <button className="edit-btn" onClick={handleEditClick}>
              <i className="bi bi-pencil-fill"></i>
            </button>
          </div>
        </div>
        <div className="info-item">
          <span>ประเภท (Vehicle Type)</span>
          <div className="input-container">
            <input 
              type="text" 
              name="vehicleType" 
              value={updatedDriver.vehicleType} 
              disabled={!isEditing} 
              onChange={handleInputChange}
            />
            <button className="edit-btn" onClick={handleEditClick}>
              <i className="bi bi-pencil-fill"></i>
            </button>
          </div>
        </div>
        <div className="info-item">
          <span>เอกสารที่จำเป็น (License, Registration, Insurance)</span>
          <div className="input-container">
            <input 
              type="text" 
              name="documents" 
              value={updatedDriver.documents.join(", ")} 
              disabled={!isEditing} 
              onChange={handleInputChange}
            />
            <button className="edit-btn" onClick={handleEditClick}>
              <i className="bi bi-pencil-fill"></i>
            </button>
          </div>
        </div>

        <h2 className="content-title" style={{ marginTop: "100px" }}>ประวัติการใช้งาน</h2>
        <div className="info-item">
          <span>จำนวนการเดินทางทั้งหมด</span>
          <div className="input-container">
            <input type="text" value={totalTrips} disabled />
            <button className="edit-btn">
              <i className="bi bi-pencil-fill"></i>
            </button>
          </div>
        </div>
        <div className="info-item">
          <span>คะแนนรีวิวจากผู้ใช้ (Rating)</span>
          <div className="input-container">
            <input type="text" value={averageRating.toFixed(2)} disabled />
          </div>
        </div>

        {isEditing && (
          <Button
            variant="btn btn-success"
            onClick={handleSaveChanges}
            style={{ borderRadius: "50px", width: "5rem", marginTop: "2rem", marginRight: "15rem" }}
          >
            บันทึก
          </Button>
        )}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>การบันทึกสำเร็จ</Modal.Title>
          </Modal.Header>
          <Modal.Body>ข้อมูลของคุณได้รับการบันทึกเรียบร้อยแล้ว</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="btn btn-success" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default DriverDetails;
