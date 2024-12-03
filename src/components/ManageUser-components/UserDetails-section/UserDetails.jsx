import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../../Data/UserData";
import "./UserDetails.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});
  const [isEditing, setIsEditing] = useState({}); 
  const [show, setShow] = useState(false);

  useEffect(() => {
    const userData = fetchUserById(id); 
    setUser(userData);
    setUpdatedUser(userData);

    
    const storedData = localStorage.getItem(`user_${id}`);
    if (storedData) {
      setUpdatedUser(JSON.parse(storedData));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleSaveChanges = () => {
    setUser(updatedUser); 
    setIsEditing({});
    localStorage.setItem(`user_${id}`, JSON.stringify(updatedUser)); 
    setShow(false); // ปิด Modal
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-info-container">
     
      <div className="user-sidebar">
        <div className="user-avatar">
          <img
            src="https://via.placeholder.com/120"
            alt="User Avatar"
            className="avatar-img"
          />
        </div>
        <h5 className="user-title">แก้ไขโปรไฟล์</h5>
        <p className="user-details">Username: {user.username}</p>
        <p className="user-details">
          สถานะ: {user.role === "user" ? "Customer User" : "Other Role"}
        </p>
        <p className="user-details">
          สถานะการใช้งาน:{" "}
          <span className={user.isActive ? "status-active" : "status-inactive"}>
            {user.isActive ? "Active" : "Inactive"}
          </span>
        </p>
        <button className="delete-account-btn">ลบบัญชี</button>
      </div>

     
      <div className="user-info-content">
        <h1 className="content-title">ข้อมูลพื้นฐานของผู้ใช้</h1>
        <div className="user-info-list">
          
          <div className="info-item">
            <span>ชื่อ (First Name, Last Name)</span>
            <div className="input-container">
              <input
                type="text"
                name="firstName"
                value={updatedUser.firstName}
                disabled={!isEditing.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                value={updatedUser.lastName}
                disabled={!isEditing.lastName}
                onChange={handleInputChange}
                style={{ marginLeft: '30px' }}
              />
              {!isEditing.firstName && (
                <button
                  className="edit-btn"
                  onClick={() => handleEditClick("firstName")}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
              )}
            </div>
          </div>

         
          <div className="info-item">
            <span>อีเมล (Email)</span>
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                disabled={!isEditing.email}
                onChange={handleInputChange}
              />
              {!isEditing.email && (
                <button
                  className="edit-btn"
                  onClick={() => handleEditClick("email")}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
              )}
            </div>
          </div>

          
          <div className="info-item">
            <span>เบอร์โทรศัพท์ (Phone Number)</span>
            <div className="input-container">
              <input
                type="text"
                name="phone"
                value={updatedUser.phone}
                disabled={!isEditing.phone}
                onChange={handleInputChange}
              />
              {!isEditing.phone && (
                <button
                  className="edit-btn"
                  onClick={() => handleEditClick("phone")}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
              )}
            </div>
          </div>

          
          <div className="info-item">
            <span>วันที่สมัคร (Registration Date)</span>
            <div className="input-container">
              <input
                type="text"
                value={updatedUser.registrationDate}
                disabled
              />
            </div>
          </div>

          
          <Button
            variant="btn btn-success"
            onClick={handleShow}
            style={{ borderRadius: "50px", width: "5rem", marginTop: "20px" }}
          >
            บันทึก
          </Button>

          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>คุณมั่นใจที่จะแก้ไขใช่ไหม</Modal.Title>
            </Modal.Header>
            <Modal.Body>โปรดยืนยันให้แน่ใจ</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="btn btn-success" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
