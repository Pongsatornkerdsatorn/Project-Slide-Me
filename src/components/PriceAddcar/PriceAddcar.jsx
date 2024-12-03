import React, { useState } from 'react';
import './PriceAddcar.css';
import { PricesAddcar } from '../../Data/Priceaddcar';

// สมมุติว่า fetchorders เป็นฟังก์ชันที่ดึงข้อมูลจากฐานข้อมูลหรือ API
import { fetchorders } from '../../Data/Data-orders';

function PriceAddcar() {
	const [prices, setPrices] = useState([...PricesAddcar()]);
	const [description, setDescription] = useState('');
	const [addPrice, setAddPrice] = useState('');
	const [id, setId] = useState(prices.length + 1);

	const [editId, setEditId] = useState(null);
	const [editPrice, setEditPrice] = useState('');

	// ฟังก์ชันเพิ่มราคา
	const handleAddPrice = () => {
		if (description && addPrice) {
			const newPrice = {
				id: id,
				description: description,
				addPrice: parseFloat(addPrice),
			};
			setPrices([...prices, newPrice]);
			setId(id + 1);
			setDescription('');
			setAddPrice('');
		} else {
			alert('กรุณากรอกข้อมูลให้ครบถ้วน');
		}
	};

	// ฟังก์ชันแก้ไขราคา
	const handleEditPrice = (priceId) => {
		const priceToEdit = prices.find((item) => item.id === priceId);
		setEditId(priceId);
		setEditPrice(priceToEdit.addPrice);
	};

	// ฟังก์ชันบันทึกการแก้ไขราคา
	const handleSaveEdit = () => {
		if (editPrice) {
			const updatedPrices = prices.map((item) =>
				item.id === editId
					? {
							...item,
							addPrice: parseFloat(editPrice),
					  }
					: item
			);
			setPrices(updatedPrices);
			setEditId(null);
			setEditPrice('');
		} else {
			alert('กรุณากรอกราคาที่ถูกต้อง');
		}
	};

	// ฟังก์ชันค้นหาจาก Service code
	const handleDescriptionChange = (e) => {
		const inputDescription = e.target.value;
		setDescription(inputDescription);

		// ค้นหาจาก Service code ใน orders
		const orders = fetchorders();
		const matchingOrder = orders.find(
			(order) => order['Service code'] === inputDescription
		);

		if (matchingOrder) {
			setAddPrice(matchingOrder.money); // ถ้ามีการจับคู่, กำหนดราคาที่ตรงกัน
		} else {
			setAddPrice(''); // ถ้าไม่เจอ, เคลียร์ราคาจากช่อง
		}
	};

	return (
		<div className='priceAddcar-container'>
			<h4>เพิ่มราคา</h4>
			<div className='priceAddcar-inputForm'>
				<input
					className='priceAddcar-inputField'
					type='text'
					placeholder='รายละเอียด (กรอก Service code)'
					value={description}
					onChange={handleDescriptionChange} // ใช้ฟังก์ชัน handleDescriptionChange
				/>
				<input
					className='priceAddcar-inputField'
					type='text'
					placeholder='ราคา'
					value={addPrice}
					onChange={(e) => setAddPrice(e.target.value)}
				/>
				<button className='priceAddcar-addButton' onClick={handleAddPrice}>
					เพิ่มข้อมูล
				</button>
			</div>

			<div className='priceAddcar-tableContainer'>
				<table className='priceAddcar-tables'>
					<thead>
						<tr>
							<th className='priceAddcar-tableHeader'>ลำดับ</th>
							<th className='priceAddcar-tableHeader'>รายการ</th>
							<th className='priceAddcar-tableHeader'>ราคา</th>
							<th className='priceAddcar-tableHeader'>แก้ไข</th>
						</tr>
					</thead>
					<tbody>
						{prices.map((item) => (
							<tr key={item.id} className='priceAddcar-rowHover'>
								<td className='priceAddcar-tableData'>{item.id}</td>
								<td className='priceAddcar-tableData'>{item.description}</td>
								<td className='priceAddcar-tableData'>
									{editId === item.id ? (
										<input
											type='text'
											value={editPrice}
											onChange={(e) => setEditPrice(e.target.value)}
											className='priceAddcar-inputEditing'
										/>
									) : (
										item.addPrice
									)}
								</td>
								<td className='priceAddcar-tableData'>
									{editId === item.id ? (
										<button
											className='priceAddcar-editButton'
											onClick={handleSaveEdit}
										>
											บันทึก
										</button>
									) : (
										<button
											className='priceAddcar-editButton'
											onClick={() => handleEditPrice(item.id)}
										>
											แก้ไข
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default PriceAddcar;
