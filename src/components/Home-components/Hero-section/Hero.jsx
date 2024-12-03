import './Hero.css'


function Hero() {
    return ( 
        <div className="Hero-container">
           <div className="Hero-content">
               <div className="Hero-text">
               <h1>Slide Me</h1>
               <p>No matter the job, <br />
               we have the right vehicle for you. </p>
               </div>
               <div className="btn-Hero">
                   <button className='btn btn-success  btn-xl ' style={{borderRadius: '50px' }} >Contact Me</button>
               </div>
              
           </div>
        </div>
     );
}

export default Hero;