import React from 'react'


import './App.css'

import Layout from './layouts/Layout/Layout'
import Home from './pages/HomePage/Home'
import ManageUser from './pages/ManageUser/ManageUser'
import UserDetails from './components/ManageUser-components/UserDetails-section/UserDetails'
import DriverDetails from './components/ManageUser-components/DriverDetails-section/DriverDetails'
import Approve from './pages/Approve/Approve'
import ApproveDetails from './components/Approve-components/ApproveDetails-section/ApproveDetails'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



import { HashRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <div>
     <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/manage-user" element={<ManageUser />} />
          <Route path="/manage-user/:id" element={<UserDetails />} />
          <Route path="/manage-driver/:id" element={<DriverDetails />} />
          <Route path="/approve-driver/:id" element={<ApproveDetails />} />
          <Route path="/approve" element={<Approve />} />

        </Route>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App;
