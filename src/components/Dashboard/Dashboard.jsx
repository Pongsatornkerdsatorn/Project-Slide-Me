import './Dashboard.css';
import { useState, useEffect } from 'react';
import {
	BarChart,
	XAxis,
	YAxis,
	Legend,
	Tooltip,
	CartesianGrid,
	Bar,
} from 'recharts';
const Userdata = [
	{ name: 'Page A', uv: 3500 },
	{ name: 'Page B', uv: 3000 },
	{ name: 'Page C', uv: 2000 },
	{ name: 'Page D', uv: 2780 },
	{ name: 'Page E', uv: 1890 },
	{ name: 'Page F', uv: 2390 },
	{ name: 'Page G', uv: 650 },
];
const Orderdata = [
	{ name: 'จันทร์', Ordernow: 4000, Booking: 1400 },
	{ name: 'อังคาร', Ordernow: 3700, Booking: 400 },
	{ name: 'พุธ', Ordernow: 5550, Booking: 2400 },
	{ name: 'พฤหัสบดี', Ordernow: 2356, Booking: 1540 },
	{ name: 'ศุกร์', Ordernow: 4000, Booking: 2400 },
	{ name: 'เสาร์', Ordernow: 515, Booking: 3214 },
	{ name: 'อาทิตย์', Ordernow: 4000, Booking: 2400 },
];

function Dashboard() {
	// ใช้ useState เพื่อเก็บค่าผู้เข้าใช้, คนขับ, จำนวนออเดอร์, รายได้
	const [userCount, setUserCount] = useState(99);
	const [driverCount, setDriverCount] = useState(450);
	const [orderCount, setOrderCount] = useState(33);
	const [revenueCount, setRevenueCount] = useState(9999);

	const [filter, setFilter] = useState('today');

	// ฟังก์ชันเปลี่ยนฟิลเตอร์ (วันนี้, สัปดาห์, เดือน, ปี)
	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};

	// ฟังก์ชันในการคำนวณข้อมูลตามฟิลเตอร์
	const applyFilter = (value) => {
		switch (value) {
			case 'week':
				return {
					Orderdata: Orderdata.map((entry) => ({
						...entry,
						Ordernow: entry.Ordernow * 7,
						Booking: entry.Booking * 9,
					})),
				};
			case 'month':
				return {
					Orderdata: Orderdata.map((entry) => ({
						...entry,
						Ordernow: entry.Ordernow * 60,
						Booking: entry.Booking * 30,
					})),
				};
			case 'year':
				return {
					Orderdata: Orderdata.map((entry) => ({
						...entry,
						Ordernow: entry.Ordernow * 365,
						Booking: entry.Booking * 605,
					})),
				};
			default:
				return {
					Orderdata: Orderdata,
				};
		}
	};

	// ฟังก์ชันสุ่มเพิ่มข้อมูล
	useEffect(() => {
		const interval = setInterval(() => {
			setUserCount((prev) => prev + Math.floor(Math.random() * 10) + 1); // เพิ่มผู้เข้าใช้ 1-10
			setDriverCount((prev) => prev + Math.floor(Math.random() * 5) + 1); // เพิ่มคนขับ 1-5
			setOrderCount((prev) => prev + Math.floor(Math.random() * 3) + 1); // เพิ่มจำนวนออเดอร์ 1-3
			setRevenueCount((prev) => prev + Math.floor(Math.random() * 50) + 10); // เพิ่มรายได้ 10-50
		}, 3000); // ทุกๆ 1 วินาที

		return () => clearInterval(interval); // ลบ interval เมื่อ component ถูกทำลาย
	}, []);

	const filteredData = applyFilter(filter);

	return (
		<div>
			{/* กล่องสามกล่องด้านล่าง */}
			<div className='box-container'>
				<div className='box'>
					<p className='Usernow'>ผู้เข้าใช้</p>
					<p className='count'>{userCount}</p>
					<p className='Day'>วันนี้</p>
					<div className='Barchart-container'>
						<BarChart width={160} height={80} data={Userdata}>
							<Tooltip />
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</div>
				</div>

				{/* กล่องคนขับ */}
				<div className='box'>
					<p className='Usernow'>คนขับ</p>
					<p className='count'>{driverCount}</p>
					<p className='Day'>วันนี้</p>
					<div className='Barchart-container'>
						<BarChart width={160} height={80} data={Userdata}>
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</div>
				</div>

				{/* กล่องจำนวนออเดอร์ */}
				<div className='box'>
					<p className='Usernow'>จำนวนออเดอร์</p>
					<p className='count'>{orderCount}</p>
					<p className='Day'>วันนี้</p>
					<div className='Barchart-container'>
						<BarChart width={160} height={80} data={Userdata}>
							<Tooltip />
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</div>
				</div>

				{/* กล่องรายได้ */}
				<div className='box'>
					<p className='Usernow'>รายได้</p>
					<p className='count'>{revenueCount}</p>
					<p className='Day'>วันนี้</p>
					<div className='Barchart-container'>
						<BarChart width={160} height={80} data={Userdata}>
							<Tooltip />
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</div>
				</div>
			</div>

			{/* กราฟใหญ่ */}
			<div className='large-box'>
				<div className='Graph-container'>
					{/* ฟิลเตอร์เลือกช่วงเวลา */}
					<select
						value={filter}
						onChange={handleFilterChange}
						style={{
							position: 'absolute',
							right: 300,
							top: 400,
							padding: '8px',
							fontSize: '14px',
							zIndex: 10,
						}}
					>
						<option value='today'>วันนี้</option>
						<option value='week'>สัปดาห์</option>
						<option value='month'>เดือน</option>
						<option value='year'>ปี</option>
					</select>

					{/* กราฟแสดงข้อมูล */}
					<BarChart width={1300} height={450} data={filteredData.Orderdata}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='Ordernow' fill='#82ca9d' />
						<Bar dataKey='Booking' fill='black' />
					</BarChart>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
