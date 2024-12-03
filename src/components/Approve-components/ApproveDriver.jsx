import React, { useState, useEffect } from "react";
import "./ApproveDriver.css";
import { fetchApproveDriver } from "../../Data/ApproveData";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function ApproveDriver() {
  const navigate = useNavigate();

  const handleClick = (driverId) => {
    navigate(`/approve-driver/${driverId}`); // ไปที่หน้า ApproveDetails ตาม driverId
  };

  const [drivers, setDrivers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [searchUsername, setSearchUsername] = useState("");
  const [showPendingOnly, setShowPendingOnly] = useState(false); // State สำหรับ switch

  // Fetch and sort data
  useEffect(() => {
    const sortedDrivers = fetchApproveDriver().sort(
      (a, b) => new Date(b.registrationDate) - new Date(a.registrationDate)
    );
    setDrivers(sortedDrivers);
  }, []);

  // Filtered drivers
  const filteredDrivers = drivers
    .filter((driver) =>
      driver.username.toLowerCase().startsWith(searchUsername.toLowerCase())
    )
    .filter((driver) => (showPendingOnly ? !driver.isActive : true)); // Filter by pending status

  // Paginate drivers
  const firstIndex = (currentPage - 1) * driversPerPage;
  const lastIndex = firstIndex + driversPerPage;
  const displayedDrivers = filteredDrivers.slice(firstIndex, lastIndex);

  // Pagination handlers
  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredDrivers.length / driversPerPage));
  }, [filteredDrivers]);

  const handleSearchChange = (e) => {
    setSearchUsername(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleSwitchChange = (e) => {
    setShowPendingOnly(e.target.checked); // Toggle the switch value
    setCurrentPage(1); // Reset to first page when changing the filter
  };

  return (
    <div className="ApproveDriver-container">
      <div className="filters-container">
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="โชว์เฉพาะรอดำเนินการ"
            onChange={handleSwitchChange} // Handle switch change
          />
        </Form>

        <input
          className="form-control"
          placeholder="Search Username"
          style={{ width: "200px" }}
          onChange={handleSearchChange}
        />
        <span>
          <i className="bi bi-search" style={{ cursor: "pointer" }}></i>
        </span>
      </div>

      <div className="Table-container">
        <table className="table table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Status</th>
              <th>Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {displayedDrivers.map((driver, index) => (
              <tr
                key={index}
                onClick={() => driver.id && handleClick(driver.id)}
              >
                <td>{firstIndex + index + 1}</td>
                <td>{driver.username}</td>
                <td className={driver.isActive ? "text-success" : "text-warning"}>
                  {driver.isActive ? "ดำเนินการเสร็จสิ้น" : "รอดำเนินการ"}
                </td>
                <td>{new Date(driver.registrationDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <button
            className="btn btn-outline-secondary page-space"
            onClick={goToFirstPage}
          >
            First
          </button>
          <button
            className="btn btn-outline-secondary page-space"
            onClick={goToPreviousPage}
          >
            Previous
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            className="btn btn-outline-secondary page-space"
            onClick={goToNextPage}
          >
            Next
          </button>
          <button
            className="btn btn-outline-secondary page-space"
            onClick={goToLastPage}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApproveDriver;
