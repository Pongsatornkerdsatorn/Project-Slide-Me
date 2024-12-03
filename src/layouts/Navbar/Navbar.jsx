import React from "react";
import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function CustomNavbar() {
  return (
    <div className="Navbar-container">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src="./Nav-img/LogoSlideMe.png"
              alt="Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="การจัดการสิทธิ์" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/manage-user">
                  จัดการสิทธ์ user/driver
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="การจัดการบริการ" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  จัดการระยะทาง
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  จัดการประเภทรถ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  จัดการออเดอร์
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  จัดการรีวิว
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  การจัดการแบนเนอร์
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="การจัดการการชำระเงิน" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> ธุรกรรม</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  ปัญหาการชำระเงิน
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="การตรวจสอบเอกสาร " id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Approve">
                  เอกสารผู้สมัคร (คนขับ)
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Text>
                <span className="span-icon">
                  <i className="bi bi-person-circle"></i> Signed in as:{" "}
                  <a href="#login">Admin(1)</a>
                </span>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
