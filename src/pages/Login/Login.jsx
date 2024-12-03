import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		// กรณีที่เข้าสู่ระบบสำเร็จ
		if (username === 'Admin' && password === '1234') {
			// ไปที่หน้า Dashboard หรือหน้า Home
			navigate('/Home'); // หรือเปลี่ยนเป็น '/home' ถ้าคุณต้องการไปที่หน้า Home
		} else if (username === 'U' && password === '1') {
			navigate('/Home'); // เปลี่ยนเส้นทางไปหน้า Home
		} else {
			alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
		}
	};

	return (
		<div className='login-page'>
			<div className='login-container'>
				<div className='login-left'>
					<img
						src='public/Nav-img/LogoSlideMe.png'
						alt='Logo'
						className='logo-img'
					/>
				</div>
				<div className='login-right'>
					<h1>SLIDE ME</h1>
					<div>
						<input
							className='login-form'
							type='text'
							placeholder='Username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className='login-form'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button className='login-button' onClick={handleLogin}>
						LOGIN
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
