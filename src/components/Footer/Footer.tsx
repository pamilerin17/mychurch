import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/react.svg'
// import { CiHeart } from "react-icons/ci";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
    // You would typically send this to an API
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Contact */}
          <div>
            <img src={Logo} alt="" className='mb-5' />
            <p className="text-sm mb-4"> Copyright ©{new Date().getFullYear()} All rights reserved</p>
            <p className="text-sm mb-2">+234 (0) 8134 555-0103</p>
            <p className="text-sm mb-2">No 51b, Olarenwaju Bustop, Off Isasi Road, Akute, Ogun State.</p>
            <p className="text-sm mb-2">info@nccakute.com</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:mx-auto">
            <h3 className="text-sm font-medium mb-6">Quicklinks</h3>
            <nav className="flex flex-col space-y-3">
               <Link to="/" className=" text-sm font-medium hover:text-orange-300">HOME</Link>
            <Link to="About" className=" text-sm font-medium hover:text-orange-300">ABOUT US</Link>
            <Link to="Sermon" className=" text-sm font-medium hover:text-orange-300">SERMON</Link>
            <Link to="Blog" className=" text-sm font-medium hover:text-orange-300">BLOG</Link>
            <Link to='/Contact' className="bg-orange-200 text-black px-5 py-2 rounded-md  w-max">
              CONTACT US
            </Link>
            </nav>
          </div>

          {/* Column 3: Connect and Subscribe */}
          <div>
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link to="https://www.facebook.com/share/16ZmnyuyNr/" className="text-white hover:text-orange-300 transition-colors">
                  <FaFacebookF className="h-5 w-5" />
                </Link>
                <Link to="https://www.instagram.com/ncchurchakutecentre?igsh=MTk4dW4wYjc0OTMzdw==" className="text-white hover:text-orange-300 transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link to="https://www.tiktok.com/@nccakute124?_t=ZM-8wSCFemz5ny&_r=1" className="text-white hover:text-orange-300 transition-colors">
                  <FaTiktok className="h-5 w-5" />
                </Link>
                <Link to="https://youtube.com/@nccakute?si=WLUPNwen1A7-A9u6" className="text-white hover:text-orange-300 transition-colors">
                  <FaYoutube className="h-5 w-5" />
                </Link>
                <Link to="/" className="text-white hover:text-orange-300 transition-colors">
                  <FaWhatsapp className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">SUBSCRIBE TO GET LATEST UPDATES AND NEWS</h3>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Youremail@gmail.com" 
                  className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 flex-grow"
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-orange-200 hover:bg-orange-300 text-gray-900 font-medium px-6 py-3 rounded-md transition-colors uppercase text-sm cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
       <div className="w-full flex justify-center mt-8 mb-4">
      <p className="text-xs text-gray-500 font-light">
        Made with love  by the media team
      </p>
    </div>
      </div>
    </footer>
  );
}