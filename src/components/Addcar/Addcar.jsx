import './Addcar.css';
import React, { useState } from 'react';
import { DataAddcar } from '../../Data/Data-Addcar';

function Addcar() {
	const [car, setCar] = useState(DataAddcar());
	const [id, setId] = useState(car.length + 1);
	const [addname, setAddname] = useState('');
	const [add, setAdd] = useState('');
	const [addimage, setAddimage] = useState(null); // เก็บไฟล์ภาพที่เลือก
	const [editingCarId, setEditingCarId] = useState(null); // รหัสของรถที่กำลังแก้ไข

	// ฟังก์ชันเพิ่มข้อมูลหรือแก้ไขข้อมูล
	const addclick = (event) => {
		event.preventDefault(); // ป้องกันการรีเฟรชหน้า
		if (addname && add && addimage) {
			if (editingCarId !== null) {
				// ถ้าอยู่ในโหมดแก้ไข
				setCar(
					car.map((item) =>
						item.id === editingCarId
							? {
									...item,
									namecars: addname,
									datacar: add,
									Url: URL.createObjectURL(addimage),
							  }
							: item
					)
				);
				setEditingCarId(null); // รีเซ็ตโหมดการแก้ไข
			} else {
				// ถ้าอยู่ในโหมดเพิ่ม
				setCar([
					...car,
					{
						id: id,
						namecars: addname,
						datacar: add,
						Url: URL.createObjectURL(addimage),
					},
				]);
				setId(id + 1); // อัปเดต id ใหม่
			}
			// รีเซ็ตค่าต่างๆ
			setAddname('');
			setAdd('');
			setAddimage(null);
		} else {
			alert('กรุณากรอกข้อมูลให้ครบถ้วน');
		}
	};

	// ฟังก์ชันจัดการการกรอกข้อมูลต่าง ๆ
	const addcar = (event) => setAdd(event.target.value);
	const addnamecar = (event) => setAddname(event.target.value);
	const addimagecar = (event) => setAddimage(event.target.files[0]); // จัดการไฟล์รูปภาพ

	// ฟังก์ชันตั้งค่าแก้ไขรถ
	const editCar = (carId) => {
		const carToEdit = car.find((item) => item.id === carId);
		setEditingCarId(carId);
		setAddname(carToEdit.namecars);
		setAdd(carToEdit.datacar);
		setAddimage(null); // รีเซ็ตไฟล์ภาพเมื่อต้องการแก้ไข
	};

	// ฟังก์ชันลบรถ
	const deleteCar = (carId) => {
		setCar(car.filter((item) => item.id !== carId));
	};

	return (
		<div className='addcar-container'>
			{/* เพิ่มฟอร์ม */}

			<div className='addcar-form'>
				<form className='addcar-form-input' onSubmit={addclick}>
					<div>
						<p style={{ marginBottom: 0 }}>ประเภทรถ</p>
						<input
							type='text'
							placeholder='ประเภทรถ'
							className='inputs'
							value={addname}
							onChange={addnamecar}
							required
						/>
					</div>

					<div>
						<p style={{ marginBottom: 0 }}>รายละเอียด</p>
						<input
							type='text'
							placeholder='รายละเอียด'
							className='inputs'
							value={add}
							onChange={addcar}
							required
						/>
					</div>

					<div>
						<p style={{ marginBottom: 0 }}>รูปภาพ</p>
						<input
							type='file'
							className='inputs'
							onChange={addimagecar}
							required
						/>
					</div>

					<div className='button-container'>
						<button className='btn btn-success btn-sm' type='submit'>
							{editingCarId ? 'บันทึก' : 'ยืนยัน'}
						</button>
						&nbsp;
						<button
							type='button'
							className='btn btn-danger btn-sm'
							onClick={() => {
								setAddname('');
								setAdd('');
								setAddimage(null); // รีเซ็ตข้อมูลเมื่อกดยกเลิก
								setEditingCarId(null); // รีเซ็ตการแก้ไข
							}}
						>
							ยกเลิก
						</button>
					</div>
				</form>
			</div>

			{/* แสดงข้อมูลรถที่เพิ่ม */}
			<div className='addcar-img'>
				<div className='row'>
					{car.map((item, index) => (
						<div key={index} className='Addcar-card-container'>
							<img src={item.Url} className='Addcar-card-img-top' alt='Car' />
							<div className='Addcar-card-body'>
								<p className='Addcar-card-title'>{item.id}</p>
								<p className='Addcar-card-title'>ประเภทรถ : {item.namecars}</p>
								<p>รายละเอียด : {item.datacar}</p>
							</div>
							<div className='button-container'>
								<button
									className='btn btn-success btn-sm'
									onClick={() => editCar(item.id)}
								>
									แก้ไข
								</button>
								&nbsp;
								<button
									className='btn btn-danger btn-sm'
									onClick={() => deleteCar(item.id)}
								>
									ลบ
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Addcar;
