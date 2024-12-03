import React from 'react';
import './Review.css';




function Reviews() {
    return (
        <div className='reviews-container'>
            <div className="reviews-section">
            <h2 className="reviews-title">What your customer <br /> say about us</h2>
            <h3 className="latest-reviews">Latest reviews</h3>
            <div className="review-cards">
                <div className="review-card">
                    <div className="review-rating">★★★★★</div>
                    <h4 className="review-title">บริการไวมาก</h4>
                    <p className="review-body">ใช้ดีครับแอปดีมีคุณภาพ</p>
                    <div className="review-footer">
                        
                    <span><i class="bi bi-person-circle" style={{marginRight: '10px' }}></i></span>
                        <div className="reviewer-info">
                            <span className="reviewer-name" style={{marginRight: '10px' }}>นาย สมมุติ ตุ๊ดตู่</span>
                            <span className="review-date">12/12/2022</span>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-rating">★★★★☆</div>
                    <h4 className="review-title">โดยรวมดีมาก</h4>
                    <p className="review-body">คนขับรถสุภาพ เฟรนลี่ มีคุณภาพ</p>
                    <div className="review-footer">
                    <span><i class="bi bi-person-circle" style={{marginRight: '10px' }}></i></span>
                        <div className="reviewer-info">
                            <span className="reviewer-name" style={{marginRight: '10px' }}>นาย สมมุติ ตุ๊ดตู่</span>
                            <span className="review-date">23/12/2022</span>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-rating">★★★☆☆</div>
                    <h4 className="review-title">คุณภาพพอใช้ได้</h4>
                    <p className="review-body">โดยรวมพอใช้ได้อยากให้ปรับเรื่อง...</p>
                    <div className="review-footer">
                    <span><i class="bi bi-person-circle" style={{marginRight: '10px' }}></i></span>
                        <div className="reviewer-info">
                            <span className="reviewer-name" style={{marginRight: '10px' }}>นาย สมมุติ ตุ๊ดตู่</span>
                            <span className="review-date">17/12/2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Reviews;
