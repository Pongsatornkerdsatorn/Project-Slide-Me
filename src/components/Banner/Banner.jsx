import React, { useState } from 'react';
import './Banner.css';

function App() {
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		startDate: '',
		endDate: '',
		image: '',
		status: 'เปิดใช้งาน',
	});
	const [tableData, setTableData] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editIndex, setEditIndex] = useState(null);
	const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null); // เก็บ index สำหรับการยืนยันการลบ

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		const imageUrl = URL.createObjectURL(file);
		setFormData({ ...formData, image: imageUrl });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEditing) {
			const updatedData = [...tableData];
			updatedData[editIndex] = formData;
			setTableData(updatedData);
			setIsEditing(false);
			setEditIndex(null);
		} else {
			setTableData([...tableData, formData]);
		}
		setShowForm(false);
		resetForm();
	};

	const handleEdit = (index) => {
		setFormData(tableData[index]);
		setIsEditing(true);
		setEditIndex(index);
		setShowForm(true);
	};

	const handleDelete = (index) => {
		setConfirmDeleteIndex(index); // ตั้งค่า index ที่ต้องการลบ
	};

	const confirmDelete = () => {
		const updatedData = tableData.filter((_, i) => i !== confirmDeleteIndex);
		setTableData(updatedData);
		setConfirmDeleteIndex(null); // รีเซ็ต state หลังการลบ
	};

	const cancelDelete = () => {
		setConfirmDeleteIndex(null); // ปิด modal ยืนยันการลบ
	};

	const resetForm = () => {
		setFormData({
			startDate: '',
			endDate: '',
			image: '',
			status: 'เปิดใช้งาน',
		});
	};

	return (
		<div className='Banner-container'>
			<button className='Banner-button' onClick={() => setShowForm(!showForm)}>
				{isEditing ? 'แก้ไขข้อมูล' : 'เพิ่มข้อมูล'}
			</button>

			{showForm && (
				<div className='Banner-modal'>
					<form onSubmit={handleSubmit} className='Banner-form'>
						<label className='Banner-label'>
							เริ่มต้น:
							<input
								type='date'
								name='startDate'
								value={formData.startDate}
								onChange={handleChange}
								required
								className='Banner-input'
							/>
						</label>
						<label className='Banner-label'>
							สิ้นสุด:
							<input
								type='date'
								name='endDate'
								value={formData.endDate}
								onChange={handleChange}
								required
								className='Banner-input'
							/>
						</label>
						<label className='Banner-label'>
							รูปภาพ:
							<input
								type='file'
								accept='image/*'
								onChange={handleImageUpload}
								required={!isEditing} /* ไม่บังคับถ้าแก้ไข */
								className='Banner-input'
							/>
						</label>
						<label className='Banner-label'>
							สถานะ:
							<select
								name='status'
								value={formData.status}
								onChange={handleChange}
								className='Banner-select'
							>
								<option value='เปิดใช้งาน'>เปิดใช้งาน</option>
								<option value='ปิดใช้งาน'>ปิดใช้งาน</option>
							</select>
						</label>
						<div className='Banner-buttons'>
							<button type='submit' className='Banner-submit'>
								{isEditing ? 'บันทึกการแก้ไข' : 'ยืนยัน'}
							</button>
							<button
								type='button'
								className='Banner-cancel'
								onClick={() => {
									setShowForm(false);
									setIsEditing(false);
									resetForm();
								}}
							>
								ยกเลิก
							</button>
						</div>
					</form>
				</div>
			)}

			{confirmDeleteIndex !== null && (
				<div className='Banner-modal'>
					<div className='Banner-confirm-delete'>
						<p>คุณแน่ใจว่าต้องการลบข้อมูลนี้?</p>
						<div className='Banner-buttons'>
							<button className='Banner-submit' onClick={confirmDelete}>
								ยืนยัน
							</button>
							&nbsp;
							<button className='Banner-cancel' onClick={cancelDelete}>
								ยกเลิก
							</button>
						</div>
					</div>
				</div>
			)}

			<div className='Banner-table-container'>
				<table className='Banner-table'>
					<thead>
						<tr>
							<th>รูปภาพ</th>
							<th>เริ่มต้น</th>
							<th>สิ้นสุด</th>
							<th>สถานะ</th>
							<th>การจัดการ</th>
						</tr>
					</thead>
					<tbody>
						{tableData.length > 0 ? (
							tableData.map((data, index) => (
								<tr key={index}>
									<td>
										<img
											src={data.image}
											alt='Uploaded'
											className='Banner-image'
										/>
									</td>
									<td>{data.startDate}</td>
									<td>{data.endDate}</td>
									<td>{data.status}</td>
									<td>
										<button
											className='Banner-submit'
											onClick={() => handleEdit(index)}
										>
											แก้ไข
										</button>
										&nbsp;
										<button
											className='Banner-cancel'
											onClick={() => handleDelete(index)}
										>
											ลบ
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan='5' className='Banner-empty'>
									ไม่มีข้อมูล
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
