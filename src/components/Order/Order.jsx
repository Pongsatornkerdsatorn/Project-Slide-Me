import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchorders } from '../../Data/Data-orders';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Order.css';

function Order() {
	const [OrderRaw, setOrderRaw] = useState([]);
	const [OrderShowModal, setOrderShowModal] = useState(false);
	const [OrderCurrent, setOrderCurrent] = useState(null);
	const [OrderEditValues, setOrderEditValues] = useState({
		OrderDate: '',
		OrderServiceCode: '',
		OrderName: '',
		OrderMoney: '',
	});
	const [OrderShowConfirmDelete, setOrderShowConfirmDelete] = useState(false);
	const [OrderShowDetailModal, setOrderShowDetailModal] = useState(false);
	const [OrderSelected, setOrderSelected] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		setOrderRaw(fetchorders());
	}, []);

	const handleEditClick = (order) => {
		setOrderCurrent(order);
		setOrderEditValues(order);
		setOrderShowModal(true);
	};

	const handleSave = () => {
		setOrderRaw((prevOrders) =>
			prevOrders.map((order) =>
				order.id === OrderCurrent.id
					? { ...OrderCurrent, ...OrderEditValues }
					: order
			)
		);
		setOrderShowModal(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setOrderEditValues((prevValues) => ({ ...prevValues, [name]: value }));
	};

	const handleDeleteConfirm = (id) => {
		setOrderShowConfirmDelete(true);
		setOrderCurrent(id);
	};

	const handleDelete = () => {
		setOrderRaw((prevOrders) =>
			prevOrders.filter((order) => order.id !== OrderCurrent)
		);
		setOrderShowConfirmDelete(false);
	};

	const handleCancelDelete = () => {
		setOrderShowConfirmDelete(false);
	};

	const handleClickToMap = (id) => {
		navigate(`/MapComponent/${id}`);
	};

	const handleViewDetails = (order) => {
		setOrderSelected(order);
		setOrderShowDetailModal(true);
	};

	return (
		<div className='Order-table'>
			<table className='Order-table'>
				<thead>
					<tr className='Order-table-text'>
						<th>วันที่รับบริการ</th>
						<th>เลขรหัสบริการ</th>
						<th>ลูกค้า</th>
						<th>จำนวนเงิน</th>
						<th>รูปแบบารชำระเงิน</th>
						<th>สถานะ</th>
						<th>การจัดการ</th>
					</tr>
				</thead>
				<tbody>
					{OrderRaw.map((order) => (
						<tr key={order.id}>
							<td>{order.Date}</td>
							<td>{order['Service code']}</td>
							<td>{order.name}</td>
							<td>{order.money}</td>
							<td>{order.paymentMethod}</td>
							<td>{order.status}</td>
							<td>
								<button
									className='btn btn-info'
									onClick={() => handleClickToMap(order.id)}
								>
									<span className='bi bi-eye'></span> Map
								</button>
								&nbsp;
								<button
									className='btn btn-success'
									onClick={() => handleEditClick(order)}
								>
									<span className='bi bi-pencil-square'></span> แก้ไข
								</button>
								&nbsp;
								<button
									className='btn btn-danger'
									onClick={() => handleDeleteConfirm(order.id)}
								>
									<span className='bi bi-trash'></span> ลบ
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Modal ยืนยันการลบ */}
			<Modal show={OrderShowConfirmDelete} onHide={handleCancelDelete}>
				<Modal.Header closeButton>
					<Modal.Title>ยืนยันการลบ</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleCancelDelete}>
						ยกเลิก
					</Button>
					<Button variant='danger' onClick={handleDelete}>
						ยืนยัน
					</Button>
				</Modal.Footer>
			</Modal>

			{/* Modal ดูรายละเอียด */}
			<Modal
				show={OrderShowDetailModal}
				onHide={() => setOrderShowDetailModal(false)}
			>
				<Modal.Header closeButton>
					<Modal.Title>รายละเอียดคำสั่งซื้อ</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{OrderSelected && (
						<>
							<p>
								<strong>วันที่รับบริการ:</strong> {OrderSelected.Date}
							</p>
							<p>
								<strong>เลขรหัสบริการ:</strong> {OrderSelected['Service code']}
							</p>
							<p>
								<strong>ลูกค้า:</strong> {OrderSelected.name}
							</p>
							<p>
								<strong>จำนวนเงิน:</strong> {OrderSelected.money}
							</p>
							<p>
								<strong>วิธีชำระเงิน:</strong> {OrderSelected.paymentMethod}
							</p>
						</>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={() => setOrderShowDetailModal(false)}
					>
						ปิด
					</Button>
				</Modal.Footer>
			</Modal>

			{/* Modal แก้ไข */}
			<Modal show={OrderShowModal} onHide={() => setOrderShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>แก้ไขข้อมูล</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId='editDate'>
							<Form.Label>วันที่รับบริการ</Form.Label>
							<Form.Control
								type='text'
								name='Date'
								value={OrderEditValues.Date}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group controlId='editServiceCode' className='mt-3'>
							<Form.Label>เลขรหัสบริการ</Form.Label>
							<Form.Control
								type='text'
								name='Service code'
								value={OrderEditValues['Service code']}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group controlId='editName' className='mt-3'>
							<Form.Label>ลูกค้า</Form.Label>
							<Form.Control
								type='text'
								name='name'
								value={OrderEditValues.name}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group controlId='editMoney' className='mt-3'>
							<Form.Label>จำนวนเงิน</Form.Label>
							<Form.Control
								type='text'
								name='money'
								value={OrderEditValues.money}
								onChange={handleChange}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						className='btn btn-danger'
						onClick={() => setOrderShowModal(false)}
					>
						ยกเลิก
					</Button>
					<Button
						variant='primary'
						className='btn btn-success'
						onClick={handleSave}
					>
						บันทึก
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Order;
