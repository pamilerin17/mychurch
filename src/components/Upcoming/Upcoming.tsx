import { Link } from 'react-router-dom';
import Sermon from '../../assets/sermon.png'

export default function Upcoming() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wider mb-2">UPCOMING SERMONS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            JOIN US AND BECOME PART OF SOMETHING GREAT
          </h2>
        </div>

        {/* Sermon Event Card */}
        <div className="flex flex-col md:flex-row overflow-hidden bg-gray-50 rounded-lg">
          {/* Left side - Event details */}
          <div className="w-full md:w-1/3 bg-orange-50 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-6">
                <span className="uppercase text-xs font-semibold text-orange-600">UPCOMING EVENTS</span>
              </div>

              <h3 className="uppercase font-bold text-xl mb-4">
                WATCH AND LISTEN TO OUR SERMONS
              </h3>
              
              <p className="text-sm text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>

              <div className="flex items-start mb-4">
                <div className="mr-3 mt-1">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm">Tuesday: Bible Study by 6pm</p>
                  <p className="text-sm">Thursday: Prayer Meeting by 6pm</p>
                  <p className="text-sm">Every Third Friday of the Month: Night of Encounter by 11pm</p>
                  <p className="text-sm">Sunday: Youth Service by 7:15am</p>
                  <p className="text-sm">Sunday: Celebration Service by 9am</p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <div className="mr-3 mt-1">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm">No 51b, Olarenwaju Bustop, Off Isasi Road</p>
                  <p className="text-sm">Akute, Ogun State</p>
                </div>
              </div>
            </div>

           
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-2/3">
            <img 
              src={Sermon}
              alt="Angels on rooftop" 
              className="w-full h-full object-cover" style={{ height: '500px', width: '100%' }}
            />
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-8 text-right">
          <Link to="/Sermon" className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium">
            View all Sermons
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}