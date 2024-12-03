

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MapComponent() {
	const { id } = useParams();
	const [order, setOrder] = useState(null);

	useEffect(() => {
		// จำลองการดึงข้อมูลคำสั่งซื้อ
		const fetchOrderDetails = (orderId) => {
			const orders = [
				{
					id: 1,
					name: 'นาย สมมุติ หนึง',
					startLat: 360.1699,
					startLon: 111.1398,
					endLat: 13.889,
					endLon: 100.5055,
				},
				{
					id: 2,
					name: 'นาย สมมุติ สอง',
					startLat: 13.75,
					startLon: 100.4916,
					endLat: 13.762,
					endLon: 100.505,
				},
				{
					id: 3,
					name: 'นาย สมมุติ สาม',
					startLat: 14.7437,
					startLon: 101.4885,
					endLat: 13.816837,
					endLon: 100.560744,
				},
				{
					id: 4,
					name: 'นาย สมมุติ สาม',
					startLat: 13.7437,
					startLon: 100.4885,
					endLat: 13.759,
					endLon: 100.5055,
				},
				{
					id: 5,
					name: 'นาย สมมุติ ห้า',
					startLat: 13.726,
					startLon: 100.5109,
					endLat: 13.7305,
					endLon: 100.528,
				},
				{
					id: 6,
					name: 'นาย สมมุติ หก',
					startLat: 13.7461,
					startLon: 100.5399,
					endLat: 13.752,
					endLon: 100.55,
				},
				{
					id: 7,
					name: 'นาย สมมุติ เจ็ด',
					startLat: 13.7996,
					startLon: 100.5519,
					endLat: 13.805,
					endLon: 100.57,
				},
				{
					id: 8,
					name: 'นาย สมมุติ แปด',
					startLat: 13.7541,
					startLon: 100.4913,
					endLat: 13.7585,
					endLon: 100.503,
				},
				{
					id: 9,
					name: 'นาย สมมุติ เก้า',
					startLat: 13.7467,
					startLon: 100.5327,
					endLat: 13.75,
					endLon: 100.54,
				},
				{
					id: 10,
					name: 'นาย สมมุติ สิบ',
					startLat: 13.7232,
					startLon: 100.5604,
					endLat: 13.735,
					endLon: 100.575,
				},
				// เพิ่มข้อมูลคำสั่งซื้ออื่น ๆ
			];
			const selectedOrder = orders.find(
				(order) => order.id === parseInt(orderId)
			);
			setOrder(selectedOrder);
		};

		fetchOrderDetails(id);

		// ใช้ longdo.Map สำหรับการคำนวณเส้นทาง
		if (window.longdo) {
			const map = new window.longdo.Map({
				placeholder: document.getElementById('map-container'),
			});

			// จุดเริ่มต้น
			const startLocation = { lon: 100.577862, lat: 13.878293 }; // มหาวิทยาลัยศรีปทุม
			map.Route.add(
				new window.longdo.Marker(startLocation, {
					title: 'มหาวิทยาลัยศรีปทุม บางเขน',
					detail: 'ตำแหน่งเริ่มต้น',
				})
			);

			// จุดปลายทาง
			const endLocation = { lon: order?.endLon, lat: order?.endLat };
			map.Route.add(endLocation);
			map.Route.search();
		}
	}, [id, order?.endLat, order?.endLon]);

	if (!order) {
		return <div>กำลังโหลดข้อมูล...</div>;
	}

	return <div id='map-container' style={{ width: '100%', height: '100vh' }} />;
}

export default MapComponent;
