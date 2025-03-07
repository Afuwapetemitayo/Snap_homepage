import { Link } from 'react-router-dom';
import Img1 from '../assets/images/image-hero-desktop.png'
function Index() {
    return (
      <>
       <div className="index">
            <div className="hero">
                <div className="hero1">
                    <h2>Make</h2>
                        <h2> Remote Work</h2>
                </div>
                    <p>Get your team in sync, no matter your location.
                        Streamline processes, create team rituals,
                        and watch productivity soar.</p>
                       
            <Link to='/About'><button>Learn More</button></Link>

            </div>
            <img src={Img1} alt="hero" />
            
        </div>
      
     </>
       
    )
}
export default Index;