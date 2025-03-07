
// import { useEffect } from "react";
// import { Link, NavLink, useLocation } from "react-router";

// function Header() {
//     const hamburgerToggle = () => {
//         const hamburger = document.getElementById("hamburger");
//         const mobileMenu = document.getElementById("mobileMenu");
//         if (!!hamburger && !!mobileMenu){
//             hamburger.classList.toggle("active");
//             mobileMenu.classList.toggle("open");
//         }
//         document.addEventListener('click', (e) => {
//             if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
//                 hamburger.classList.remove('active');
//                 mobileMenu.classList.remove('open');
//                 }
//             }
//         );
//     }

//     useEffect(()=>{
//         window.addEventListener("scroll", () => {
//             const header = document.querySelector("header");
//             header?.classList.toggle("scrolled", window.scrollY > 50);
//         });
//     })

//     function HamburgerResize() {
//         useEffect(() => {
//           const handleResize = () => {
//             const hamburger = document.getElementById("hamburger");
//             const mobileMenu = document.getElementById("mobileMenu");
      
//             if (!!hamburger && !!mobileMenu) {
//               hamburger.classList.remove("active");
//               mobileMenu.classList.remove("open");
//             }
//           };
      
//           window.addEventListener("resize", handleResize);
//         }
//     )}

//     function PageChange() {
//         const location = useLocation();
//         useEffect(() => {
//             const handleRouteChange = () => {
//               const hamburger = document.querySelector(".hamburger");
//               const mobileMenu = document.querySelector(".mobile-menu");
        
//               if (hamburger && mobileMenu) {
//                 hamburger.classList.remove("active");
//                 mobileMenu.classList.remove("open");
//               }
//             };
        
//             handleRouteChange();
//           }, [location]);
//     }
//     PageChange();
//     HamburgerResize();

//     useEffect(() => {
//         document.addEventListener("DOMContentLoaded", function () {
//             let links = document.querySelectorAll(".header-links > *");
//             let currentUrl = window.location.pathname;
        
//             links.forEach(link => {
//                 if (link.href.includes(currentUrl)) {
//                     link.classList.add("active");
//                 }
//             });
//         });
//     })

//     return (
//         <>
        
//         <header>
//             <div className="logo-div">
//                 <Link to="/" className="logo">snap</Link>
//             </div>
//             <div className="nav-div">
//                 <div className="nav-holding">
//                     <nav className="nav-links">
//                         <NavLink to='/'>Index</NavLink>
//                         <NavLink to='/Carer'>Career</NavLink>
//                         <NavLink to='/about'>About</NavLink>
//                         <NavLink to='/company'>Company</NavLink>
//                         <NavLink to='/Features'>Features</NavLink>
//                     </nav>

//                     <div className="header-links">
//                             <button className="login-btn">Login</button>
//                             <button className="register-btn">Register</button>
//                         </div>
                      
//                 </div>
//                 <div onClick={hamburgerToggle} className="hamburger" id="hamburger">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//                 <div className="mobile-menu" id="mobileMenu">
//                     <nav className="mobile-nav-links">
//                         <NavLink to='/'>Index</NavLink>
//                         <NavLink to='/Carer'>Career</NavLink>
//                         <NavLink to='/about'>About</NavLink>
//                         <NavLink to='/company'>Company</NavLink>
//                         <NavLink to='/Features'>Features</NavLink>
        
//                     </nav>
//                     <div className="header-links">
//                             <button className="login-btn">Login</button>
//                             <button className="register-btn">Register</button>
//                         </div>
                    
//                 </div>
//             </div>
//         </header>
//         </>
//     );
// }

// export default Header;


import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">snap</div>
      
      <div className="menu">
      <nav className="nav">
    
        <div className="nav-item" onMouseEnter={() => setFeaturesOpen(true)} onMouseLeave={() => setFeaturesOpen(false)}>
          Features ▼
          {featuresOpen && (
            <div className="dropdown">
              <Link href="">Todo list</Link>
              <Link href="#">Calendar</Link>
              <Link href="#">Reminders</Link>
              <Link href="#">Planners</Link>
            </div>
          )}
        </div>
        <div className="nav-item" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
          Company ▼
          {companyOpen && (
            <div className="dropdown">
              <Link href="#">History</Link>
              <Link href="#">Our Teams</Link>
              <Link href="#">Blog</Link>
            </div>
          )}
        </div>
        <Link href="#" className="nav-item">Careers</Link>
        <Link href="#" className="nav-item">About</Link>
      </nav>
      <div className="auth">
        <Link href="#" className="login">Login</Link>
        <Link href="#" className="register">Register</Link>
      </div>
      </div>
    </header>

  );
};

export default Header;
