import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="Footer-container">
        <div className="row">
          
          <div className="col-md-4 d-flex justify-content-start align-items-center">
            <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
          </div>

          
          <div className="col-md-2">
            <h5>หน้า</h5>
            <ul className="list-unstyled">
              <li><a href="#">หน้าหลัก</a></li>
              <li><a href="#">ติดต่อฝ่ายบริการ</a></li>
              <li><a href="#">ติดต่อการชำระเงิน</a></li>
              <li><a href="#">แผนที่ที่ตั้ง</a></li>
            </ul>
          </div>

          
          <div className="col-md-3">
            <h5>ผลงานการบริการ</h5>
            <ul className="list-unstyled">
              <li><a href="#">รถ6ล้อ</a></li>
              <li><a href="#">รถ10ล้อ</a></li>
              <li><a href="#">รถ4ล้อ</a></li>
              <li><a href="#">รีวิวและความคิดเห็นรวม</a></li>
            </ul>
          </div>

          
          <div className="col-md-3">
            <h5>ติดต่อเรา</h5>
            <ul className="list-unstyled">
              <li>โทร: 123123123123</li>
              <li>Facebook: 154654651</li>
              <li>Line: 15421151</li>
              <li>Email: 51513515165135135131</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
