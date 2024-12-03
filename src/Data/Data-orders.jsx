const orders = [
	{
		id: 1,
		'Service code': 'SLM2024-001',
		name: 'นาย สมมุติ หนึง',
		Date: '2023/02/02',
		money: '1000.00',
		paymentMethod: 'บัตรเครดิต',
		startLon: 150.577862,
		startLat: 130.878293,
		endLon: 100.595,
		endLat: 13.889,
		status: 'รอการยืนยัน',
	},
	{
		id: 2,
		'Service code': 'SLM2024-002',
		name: 'นาย สมมุติ สอง',
		Date: '2023/02/02',
		money: '1200.00',
		paymentMethod: 'การโอนเงิน',
		startLon: 100.4916,
		startLat: 13.75,
		endLon: 100.505,
		endLat: 13.762,
		status: 'กำลังดำเนินการ',
	},
	{
		id: 3,
		'Service code': 'SLM2024-003',
		name: 'นาย สมมุติ สาม',
		Date: '2023/02/02',
		money: '1900.00',
		paymentMethod: 'พร้อมเพย์',
		startLon: 100.4885,
		startLat: 13.7437,
		endLon: 100.5055,
		endLat: 13.759,
		status: 'เสร็จสิ้น',
	},
	{
		id: 4,
		'Service code': 'SLM2024-004',
		name: 'นาย สมมุติ สี่',
		Date: '2023/02/02',
		money: '1800.00',
		paymentMethod: 'การโอนเงิน',
		startLon: 100.497,
		startLat: 14.7594,
		endLon: 100.51,
		endLat: 13.765,
		status: 'รอการยืนยัน',
	},
	{
		id: 5,
		'Service code': 'SLM2024-005',
		name: 'นาย สมมุติ ห้า',
		Date: '2023/02/02',
		money: '1700.00',
		paymentMethod: 'บัตรเครดิต',
		startLon: 100.5109,
		startLat: 17.726,
		endLon: 100.528,
		endLat: 13.7305,
		status: 'กำลังดำเนินการ',
	},
	{
		id: 6,
		'Service code': 'SLM2024-006',
		name: 'นาย สมมุติ หก',
		Date: '2023/02/02',
		money: '1300.00',
		paymentMethod: 'การโอนเงิน',
		startLon: 100.5399,
		startLat: 16.7461,
		endLon: 100.55,
		endLat: 13.752,
		status: 'เสร็จสิ้น',
	},
	{
		id: 7,
		'Service code': 'SLM2024-007',
		name: 'นาย สมมุติ เจ็ด',
		Date: '2023/02/02',
		money: '2200.00',
		paymentMethod: 'พร้อมเพย์',
		startLon: 100.5519,
		startLat: 120.7996,
		endLon: 100.57,
		endLat: 13.805,
		status: 'รอการยืนยัน',
	},
	{
		id: 8,
		'Service code': 'SLM2024-008',
		name: 'นาย สมมุติ แปด',
		Date: '2023/02/02',
		money: '1500.00',
		paymentMethod: 'บัตรเครดิต',
		startLon: 100.4913,
		startLat: 130.7541,
		endLon: 100.503,
		endLat: 13.7585,
		status: 'กำลังดำเนินการ',
	},
	{
		id: 9,
		'Service code': 'SLM2024-009',
		name: 'นาย สมมุติ เก้า',
		Date: '2023/02/02',
		money: '2300.00',
		paymentMethod: 'การโอนเงิน',
		startLon: 100.5327,
		startLat: 35.7467,
		endLon: 100.54,
		endLat: 13.75,
		status: 'เสร็จสิ้น',
	},
	{
		id: 10,
		'Service code': 'SLM2024-010',
		name: 'นาย สมมุติ สิบ',
		Date: '2023/02/02',
		money: '1700.00',
		paymentMethod: 'พร้อมเพย์',
		startLon: 100.5604,
		startLat: 45.7232,
		endLon: 100.575,
		endLat: 13.735,
		status: 'รอการยืนยัน',
	},
];

export function fetchorders() {
	return orders;
}
