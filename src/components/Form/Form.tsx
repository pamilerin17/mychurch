import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    message: ''
  });

const handleChange = (e: { target: { name: string; value: string; }; }) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }));
};

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission if needed
    // setFormData({ fullName: '', email: '', query: '', message: '' });
  };

  return (
    <div className="w-full bg-stone-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">CONTACT FORM:</h2>
            
            <div>
              <div className="space-y-4">
                {/* Full Name Input */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full Name"
                    className="w-full p-3 border border-gray-200 rounded bg-white"
                  />
                </div>
                
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-200 rounded bg-white"
                  />
                </div>
                
                {/* Address Input */}
                <div>
                  <input
                    type="text"
                    name="text"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full p-3 border border-gray-200 rounded bg-white"
                  />
                </div>
                
                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded bg-white"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 px-6 bg-orange-200 hover:bg-orange-300 transition-colors text-gray-800 rounded font-medium cursor-pointer"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Information */}
          <div className="pt-4 md:pt-12">
            {/* Address */}
            <div className="mb-8">
              <p className="text-gray-500 mb-2">Address</p>
              <p className="text-xl font-bold text-gray-800">No 51b, Olarenwaju Bustop, Off Isasi Road</p>
              <p className="text-xl font-bold text-gray-800">Akute, Ogun State</p>
            </div>
            
            {/* Contact Details */}
            <div className="mb-8">
              <p className="text-gray-500 mb-2">Contact Details</p>
              <p className="text-xl font-bold text-gray-800">+234 (0) 8134 555-0103</p>
              <p className="text-xl font-bold text-gray-800">info@nccakute.com</p>
            </div>
            
            {/* Social Media Links */}
            <div>
              <p className="text-gray-500 mb-3">Find us here</p>
             <div className="flex space-x-4">
                <Link to="https://www.facebook.com/share/16ZmnyuyNr/" className="text-orange-300 hover:text-orange-400 transition-colors">
                  <FaFacebookF className="h-5 w-5" />
                </Link>
                <Link to="https://www.instagram.com/ncchurchakutecentre?igsh=MTk4dW4wYjc0OTMzdw==" className="text-orange-300 hover:text-orange-400 transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link to="https://www.tiktok.com/@nccakute124?_t=ZM-8wSCFemz5ny&_r=1" className="text-orange-300 hover:text-orange-400 transition-colors">
                  <FaTiktok className="h-5 w-5" />
                </Link>
                <Link to="https://youtube.com/@nccakute?si=WLUPNwen1A7-A9u6" className="text-orange-300 hover:text-orange-400 transition-colors">
                  <FaYoutube className="h-5 w-5" />
                </Link>
                <Link to='/' className='text-orange-300 hover:text-orange-400 transition-colors'><FaWhatsapp className='h-5 w-5'/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;