import React from 'react';

import './App.css';

import Layout from './layouts/Layout/Layout';
import Home from './pages/HomePage/Home';
import ManageUser from './pages/ManageUser/ManageUser';
import UserDetails from './components/ManageUser-components/UserDetails-section/UserDetails';
import DriverDetails from './components/ManageUser-components/DriverDetails-section/DriverDetails';
import Approve from './pages/Approve/Approve';
import ApproveDetails from './components/Approve-components/ApproveDetails-section/ApproveDetails';
import Banner from './components/Banner/Banner';
import Order from './components/Order/Order';
import Review from './components/Review/Review';
import Addcar from './components/Addcar/Addcar';
import PriceAddcar from './components/PriceAddcar/PriceAddcar';
import MapComponent from './components/Distance/MapComponent';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';

import Login from './pages/Login/Login';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route element={<Layout />}>
						<Route path='/home' element={<Home />} />
						{/* <Route path='/' element={<Home />} /> */}
						<Route path='/manage-user' element={<ManageUser />} />
						<Route path='/manage-user/:id' element={<UserDetails />} />
						<Route path='/manage-driver/:id' element={<DriverDetails />} />
						<Route path='/approve-driver/:id' element={<ApproveDetails />} />
						<Route path='/approve' element={<Approve />} />
						<Route path='/Banner' element={<Banner />}></Route>
						<Route path='/Order' element={<Order />}></Route>
						<Route path='/Review' element={<Review />}></Route>
						<Route path='/Addcar' element={<Addcar />}></Route>
						<Route path='/PriceAddcar' element={<PriceAddcar />}></Route>
						<Route path='/MapComponent' element={<MapComponent />}></Route>
						<Route path='/Dashboard' element={<Dashboard />}></Route>
						<Route path='/MapComponent/:id' element={<MapComponent />} />
						<Route path='/About' element={<About />}></Route>
					</Route>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
