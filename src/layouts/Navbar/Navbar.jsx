import React from 'react';
import './Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function CustomNavbar() {
	return (
		<div className='Navbar-container'>
			<Navbar expand='lg'>
				<Container>
					<Navbar.Brand>
						<img
							src='./Nav-img/LogoSlideMe.png'
							alt='Logo'
							className='navbar-logo'
						/>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavDropdown title='การจัดการสิทธิ์' id='basic-nav-dropdown'>
								<NavDropdown.Item as={Link} to='/manage-user'>
									จัดการสิทธ์ user/driver
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title='การจัดการบริการ' id='basic-nav-dropdown'>
								<NavDropdown.Item as={Link} to='/Dashboard'>
									แดชบอร์ด
								</NavDropdown.Item>

								<NavDropdown.Item as={Link} to='/Addcar'>
									จัดการประเภทรถ
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to='/Order'>
									จัดการออเดอร์
								</NavDropdown.Item>

								<NavDropdown.Item as={Link} to='/Review'>
									รีวิว
								</NavDropdown.Item>

								<NavDropdown.Item as={Link} to='/Banner'>
									การจัดการแบนเนอร์
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title='การจัดการการชำระเงิน' id='basic-nav-dropdown'>
								<NavDropdown.Item as={Link} to='/PriceAddcar'>
									ธุรกรรม
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title='การตรวจสอบเอกสาร ' id='basic-nav-dropdown'>
								<NavDropdown.Item as={Link} to='/Approve'>
									เอกสารผู้สมัคร (คนขับ)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to='/About'>
									About (Admin)
								</NavDropdown.Item>
							</NavDropdown>
							
							<Navbar.Text>
								<span className='span-icon'>
									<i className='bi bi-person-circle'></i> Admin:{' '}
									<a
										href='Login'
										className='btn btn-danger'
										style={{ width: '100px' }}
									>
										Logout
									</a>
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
