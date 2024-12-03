import "./Service.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



  







function Service() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,  
        arrows: true, 
        nextArrow: (
            <div className="slick-arrow" >
                <i className="bi bi-chevron-right" style={{ fontSize: "24px", color: "black" }}></i>
            </div>
        ),
        prevArrow: (
            <div className="slick-arrow">
                <i className="bi bi-chevron-left" style={{ fontSize: "24px", color: "black" }}></i>
            </div>
        )

    };
    

  return (
    <div className="service-Container">
        <div className="service-Header">
            <h1 className="ours-service-Text">Ours Services</h1>
        </div>
      <Slider {...settings}>       
          <Card style={{ width: "18rem" }}>
          <div className="card-container">
            <Card.Img variant="top" src="/Home-img/4veh.jpg"  style={{ }} />
            <Card.Body>
              <Card.Title className="card-title-custom">รถสไลด์4ล้อ</Card.Title>
              <Card.Text className="card-text-custom">
                บริการรถสไลด์ 4 ล้อ เหมาะสำหรับการขนย้ายขนาดเล็กถึงปานกลาง รวดเร็ว ปลอดภัย และสะดวกสบายสำหรับการขนส่งระยะใกล้
              </Card.Text>
              <Button variant="primary">ติดต่อเรา</Button>
            </Card.Body>
            </div>
          </Card>

          <Card style={{ width: "18rem" }}>
          <div className="card-container">
            <Card.Img variant="top" src="/Home-img/card1.jpg" />
            <Card.Body>
              <Card.Title className="card-title-custom">รถสไลด์6ล้อ</Card.Title>
              <Card.Text className="card-text-custom">
                "บริการรถสไลด์ 6 ล้อ รองรับการขนย้ายขนาดกลาง มีความแข็งแรง ทนทาน เหมาะสำหรับการขนย้ายสินค้าหรือยานพาหนะที่ต้องการพื้นที่เพิ่ม"
              </Card.Text>
              <Button variant="primary">ติดต่อเรา</Button>
            </Card.Body>
            </div>
          </Card>

          <Card style={{ width: "18rem" }}>
          <div className="card-container">
            <Card.Img variant="top" src="/Home-img/8veh.jpg" />
            <Card.Body>
              <Card.Title className="card-title-custom">รถสไลด์8ล้อ</Card.Title>
              <Card.Text className="card-text-custom">
                บริการรถสไลด์ 8 ล้อ สำหรับการขนย้ายสินค้าขนาดใหญ่ รองรับน้ำหนักมาก เหมาะสำหรับการขนส่งในระยะไกลด้วยความปลอดภัยสูง
              </Card.Text>
              <Button variant="primary">ติดต่อเรา</Button>
            </Card.Body>
            </div>
          </Card>
      
      </Slider>
        
        <div className="space">

        </div>

    </div>
    
  );
}

export default Service;
