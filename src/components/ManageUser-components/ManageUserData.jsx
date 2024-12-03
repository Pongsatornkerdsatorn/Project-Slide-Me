import React, { useState, useEffect } from "react";
import "./ManageUserData.css";
import { fetchUsers } from "../../Data/UserData";
import { useNavigate } from "react-router-dom";

function ManageUserData() {
  const navigate = useNavigate();

  const ClickToUsers = (userId, role) => {
    if (role === "driver") {
        navigate(`/manage-driver/${userId}`);
    } else {
        navigate(`/manage-user/${userId}`);
    }
};

 

  const [users, setUsers] = useState([]);
  const [filterRole, setFilterRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; 
  const [totalPages, setTotalPages] = useState(1);
  const [searchUsername, setSearchUsername] = useState("");

  // เรียง a-z 
  useEffect(() => {
    const sortedUsers = fetchUsers().sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    setUsers(sortedUsers);
   
  }, []);

  // เก็บค่า
  const handleFilterChange = (e) => {
    setFilterRole(e.target.value);
    setCurrentPage(1);
  };

  // กรองผู้ใช้
  const filteredUsers = users.filter((user) => {
    const matchesRole = filterRole ? user.role === filterRole : true;
    const matchesSearch = user.username.toLowerCase().startsWith(searchUsername.toLowerCase());
    return matchesRole && matchesSearch;
  });

  // คำนวณ
  const firstIndex = (currentPage - 1) * usersPerPage;
  const lastIndex = firstIndex + usersPerPage;
  const displayedUsers = filteredUsers.slice(firstIndex, lastIndex); 

  
  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);


  useEffect(() => {
    setTotalPages(Math.ceil(filteredUsers.length / usersPerPage)); 
  }, [filteredUsers]);

  const handleSearchChange = (e) => {
    setSearchUsername(e.target.value.toLowerCase());
    setCurrentPage(1); 
  };

  const handleSearchClick = () => {
    
    setSearchUsername(searchUsername); 
    setCurrentPage(1); 
  };

  return (
    <div className="ManageUserData-container">
      <div className="filters-container">
        <select
          className="form-select"
          aria-label="Default select example"
          style={{ width: "200px" }}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="user">User</option>
          <option value="driver">Driver</option>
        </select>

        <input
          className="form-control"
          placeholder=" Username"
          style={{ width: "200px" }}
          onChange={handleSearchChange}
        ></input>
        <span  >
        <span>
        <i className="bi bi-search" onClick={handleSearchClick} style={{ cursor: "pointer" }}></i>
      </span>

        </span>
      </div>

      <div className="Table-container">
        <table className="table table-hover table-striped">
          <thead className="table table-dark">
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>ประเภทผู้ใช้</th>
              <th>สถานะผู้ใช้งาน</th>
              <th>วันที่สมัคร</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user, index) => (
              <tr key={index}  onClick={() => user.id && ClickToUsers(user.id, user.role)} >
                <td>{firstIndex + index + 1}</td>
                <td>{user.username}</td>
                <td>{user.role === "user" ? "User" : "Driver"}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>{new Date(user.registrationDate).toLocaleDateString()}</td>
                <td>
                  
                    
                    
                        <i class="bi bi-pencil" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                    
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <button className="btn btn-outline-secondary page-space" onClick={goToFirstPage}>
            First
          </button>
          <button className="btn btn-outline-secondary page-space" onClick={goToPreviousPage}>
            Previous
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button className="btn btn-outline-secondary page-space" onClick={goToNextPage}>
            Next
          </button>
          <button className="btn btn-outline-secondary page-space" onClick={goToLastPage}>
            Last
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManageUserData;
