import './Home.css';


import Hero from "../../components/Home-components/Hero-section/Hero";
import Service from '../../components/Home-components/Ours-service-section/Service';
import Reviews from '../../components/Home-components/Review-section/Review';
import Footer from '../../components/Home-components/Footer-section/Footer';



function Home() {
    return ( 
        <div className="Home-container">
        <Hero />
        <Service />
        <Reviews />
        <Footer />
        </div>
     );
}

export default Home;