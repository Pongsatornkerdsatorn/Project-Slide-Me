import React, { useEffect, useState } from 'react';
import './Review.css';
import { fetchreviews } from '../../Data/Data-reviews';
import GraphReview from './GraphReview';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Review() {
	const [reviewRaw, setReviewRaw] = useState([]);
	const [filteredReviews, setFilteredReviews] = useState([]);
	const [averageStar, setAverageStar] = useState(0);
	const [selectedStar, setSelectedStar] = useState('');

	useEffect(() => {
		const reviews = fetchreviews();
		setReviewRaw(reviews);
		setFilteredReviews(reviews);

		// คำนวณค่าเฉลี่ย
		const totalStars = reviews.reduce(
			(sum, review) => sum + parseInt(review.Star),
			0
		);
		const average = (totalStars / reviews.length).toFixed(2); // หาค่าเฉลี่ย
		setAverageStar(average);
	}, []);

	const handleFilterChange = (event) => {
		const value = event.target.value;
		setSelectedStar(value);

		if (value === '') {
			setFilteredReviews(reviewRaw);
		} else {
			const filtered = reviewRaw.filter((review) => review.Star === value); // กรองข้อมูล
			setFilteredReviews(filtered);
		}
	};

	const renderStars = (starCount) => {
		let stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < starCount) {
				stars.push(<i key={i} className='bi bi-star-fill star-icon'></i>);
			} else {
				stars.push(<i key={i} className='bi bi-star star-icon'></i>);
			}
		}
		return stars;
	};

	// คำนวณการกระจายของดาว
	const calculateStarDistribution = () => {
		const starCount = [0, 0, 0, 0, 0]; // [1ดาว, 2ดาว, 3ดาว, 4ดาว, 5ดาว]
		filteredReviews.forEach((review) => {
			const star = parseInt(review.Star);
			starCount[star - 1]++; // เพิ่มจำนวนที่เหมาะสมตามจำนวนดาว
		});
		return starCount;
	};

	// คำนวณการกระจายดาวจากรีวิวที่กรองแล้ว
	const starDistribution = calculateStarDistribution();

	// ฟังก์ชันการแสดง ProgressBar สำหรับแต่ละดาว
	const renderProgressBar = (starCount, label) => {
		const percentage = (starCount / filteredReviews.length) * 100;
		const variant =
			starCount === 5
				? 'success'
				: starCount === 4
				? 'info'
				: starCount === 3
				? 'warning'
				: starCount === 2
				? 'danger'
				: 'secondary'; // เลือก variant ตามจำนวนดาว
		return (
			<ProgressBar
				variant={variant}
				now={percentage}
				label={`${label} (${starCount})`}
			/>
		);
	};

	return (
		<div className='Review-container'>
			<div className='Review-Graph'>
				<div>
					<h3 className='Review-Average'>
						<span className='Average'>ค่าเฉลี่ย: {averageStar}</span>
					</h3>
					<div>
						<span className='box1'>
							<b className='star-box'>5ดาว</b>
						</span>
						<span className='box2'>
							<b className='star-box'>4ดาว</b>
						</span>
						<span className='box3'>
							<b className='star-box'>3ดาว</b>
						</span>
						<span className='box4'>
							<b className='star-box'>2ดาว</b>
						</span>
						<span className='box5'>
							<b className='star-box'>1ดาว</b>
						</span>
						<span className='position-graph'>
							<GraphReview />
						</span>
					</div>
				</div>

				<div className='Review-Box'>
					<div className='select-review-container'>
						<select
							className='select-review'
							aria-label='Default select example'
							value={selectedStar}
							onChange={handleFilterChange}
						>
							<option value=''>ความคิดเห็นทั้งหมด</option>
							<option value='1'>ความคิดเห็น 1 ดาว</option>
							<option value='2'>ความคิดเห็น 2 ดาว</option>
							<option value='3'>ความคิดเห็น 3 ดาว</option>
							<option value='4'>ความคิดเห็น 4 ดาว</option>
							<option value='5'>ความคิดเห็น 5 ดาว</option>
						</select>
					</div>

					<table className='table'>
						<thead>
							<tr>
								<th>จำนวนดาว</th>
								<th>ชื่อ</th>
								<th>ความคิดเห็น</th>
							</tr>
						</thead>
						<tbody>
							{filteredReviews.map((review) => (
								<tr key={review.id}>
									<td>{renderStars(parseInt(review.Star))}</td>
									<td>{review.name}</td>
									<td>{review.comment}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			{/* แสดงผลการกระจายดาว */}
			{/* <div className="star-distribution">
                <h3>การกระจายคะแนนดาว</h3>
                {starDistribution.map((count, index) => (
                    <div key={index} className="progress-bar-container">
                        {renderProgressBar(count, `${index + 1} ดาว`)}
                    </div>
                ))}
            </div> */}
		</div>
	);
}

export default Review;
