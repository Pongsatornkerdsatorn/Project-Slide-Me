import React from 'react';
import './About.css';

const members = [
  { name: 'พบพร จิตโสภา', id: '6601651', image: 'public/Admin-img/poh.jpg' },
  { name: 'วีรวุฒิ ชีอยู่', id: '66037290', image: 'public/Admin-img/va.jpg' },
  { name: 'พงศธร เกิดแสง', id: '66023481', image: 'public/Admin-img/guy.jpg' },
  { name: 'กิ๊ฟมัยรี หนุมาน', id: '66037423', image: 'public/Admin-img/gif.jpg' },
];

const About = () => {
  return (
    <div className="introduction-container">
      <h1 className="introduction-title">แนะนำตัวสมาชิก</h1>
      <div className="introduction-grid">
        {members.map((member, index) => (
          <div className="introduction-card" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="introduction-image"
            />
            <div className="introduction-details">
              <h2 className="introduction-name">{member.name}</h2>
              <p className="introduction-id">รหัส: {member.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
