import React from 'react'
import { Helmet } from 'react-helmet-async'
import careerRight from '../assets/images/career/careerright.png'
import careerDown from '../assets/images/career/careerdown.png'
import careerLeft from '../assets/images/career/careerleft.png'
import careerUp from '../assets/images/career/careerup.png'
import whyJoin from '../assets/images/career/whyjoin.png'
import bloomtideLogo from '../assets/images/bloomtide-logo.png'
import vectorBg from '../assets/images/testimonial/Vector.png'
import Group429 from '../assets/images/cta/semicricle.png'

const Career = () => {
  const jobListings = [
    {
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "We are seeking a highly skilled Senior Frontend Developer to join our dynamic team. You will be responsible for building and maintaining our web application's frontend, ensuring a seamless user experience and optimal performance."
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      description: "We are looking for a creative UX/UI Designer to join our team. You will be responsible for designing intuitive and visually appealing user interfaces, conducting user research, and iterating on design concepts."
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      description: "We are seeking a skilled Backend Developer to join our team. You will be responsible for designing, developing, and maintaining our backend infrastructure, ensuring high availability, scalability, and performance."
    },
    {
      title: "Product Designer",
      location: "Kashmir",
      type: "Full-time",
      description: "Discover an extensive selection of job openings that offer interesting chances for professional growth and development."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Career Opportunities - Bloomtide Consulting</title>
        <meta name="description" content="Join our team at Bloomtide Consulting. Explore exciting career opportunities in IT consulting, digital transformation, and technology solutions." />
        <meta name="keywords" content="career opportunities, jobs, IT consulting careers, bloomtide consulting jobs" />
        <meta property="og:title" content="Career Opportunities - Bloomtide Consulting" />
        <meta property="og:description" content="Join our team and explore exciting career opportunities in technology consulting." />
        <link rel="canonical" href="https://bloomtide.com/career" />
      </Helmet>

      <div className="py-0 -translate-y-20 min-h-screen">
        {/* Career Hero Section */}
        <section className="relative pt-10 overflow-hidden">
          {/* Background gradient and shapes */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
          
          {/* Decorative background shapes */}
          <div className="absolute inset-0">
            {/* Soft cloud-like shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-blue-100 rounded-full opacity-25 blur-lg"></div>
            
            {/* Large star-like graphic on the right */}
            <div className="absolute top-10 right-0 w-96 h-96 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  d="M100 0 L123.5 76.5 L200 100 L123.5 123.5 L100 200 L76.5 123.5 L0 100 L76.5 76.5 Z"
                  fill="currentColor"
                  className="text-blue-300"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="text-center">
              {/* Small blue heading */}
              <h3 className="text-sm font-semibold text-[#3594DF] uppercase tracking-wide mb-4">
                CAREER OPPORTUNITY
              </h3>
              
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                <div>We are looking for creative and fun</div>
                <div>individuals</div>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore a wide array of employment opportunities and discover fascinating career paths at our innovative Software as a Service (SaaS) firm.
              </p>
            </div>
          </div>
        </section>

        {/* Career Images Collage Section */}
        <section className=" bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Images Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Left Column - Large Vertical Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <img 
                    src={careerLeft} 
                    alt="Professional woman in white blazer" 
                    className="w-full h-[400px] translate-y-1/4 object-cover rounded-2xl"
                  />
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 max-w-[280px] shadow-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <img 
                        src={bloomtideLogo} 
                        alt="Bloomtide Logo" 
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-sm font-semibold text-gray-800">Bloomtide</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-tight">
                      Empowering Brands Through Creative Design Solutions for business.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Middle Column - Two Images Stacked */}
              <div className="lg:col-span-1 space-y-6">
                {/* Top Image */}
                <div className="relative">
                  <img 
                    src={careerUp} 
                    alt="Woman working at desk with laptop" 
                    className="w-full h-[280px] object-cover rounded-2xl"
                  />
                </div>
                
                {/* Bottom Image */}
                <div className="relative">
                  <img 
                    src={careerDown} 
                    alt="Team working at computer monitors" 
                    className="w-full h-[280px] object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Right Column - Single Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <img 
                    src={careerRight} 
                    alt="Team collaboration around table" 
                    className="w-full h-[400px]  translate-y-1/4 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why should you join? Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Why Join Image */}
            <div className="relative">
              <img 
                src={whyJoin} 
                alt="Why you should join Bloomtide" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right Column: Why Join Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-sm  font-semibold text-[#3594DF] uppercase tracking-wide mb-10">
                SERVICES
              </h3>
              <h2 className="text-5xl font-bold text-black mb-30">Why should you join?</h2>
              
              {/* Benefits List */}
              <div className="space-y-10">
                <div>
                  <h4 className="text-3xl font-bold text-black mb-2">1. Fast Growing Team</h4>
                  <p className="text-gray-600 text-xl">We push the boundaries of design to deliver fresh, innovative concepts that capture your brand's unique personality</p>
                </div>
                
                <div>
                  <h4 className="text-3xl font-bold text-black mb-2">2. Remote Friendly</h4>
                  <p className="text-gray-600 text-xl">We push the boundaries of design to deliver fresh, innovative concepts that capture your brand's unique personality</p>
                </div>
                
                <div>
                  <h4 className="text-3xl font-bold text-black mb-2">3. Easy Policy</h4>
                  <p className="text-gray-600 text-xl">We push the boundaries of design to deliver fresh, innovative concepts that capture your brand's unique personality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Top Label */}
            <h3 className="text-sm font-semibold text-[#3594DF] uppercase tracking-wide mb-4">
              JOB
            </h3>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Job Listings
            </h2>
            
            {/* Description Text */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
              Discover an extensive selection of job openings that offer interesting chances for professional growth and development.
            </p>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {jobListings.map((job, index) => (
                <div key={index} className="bg-white rounded-2xl p-7 border border-gray-500">
                  {/* Job Title */}
                  <h3 className="text-3xl text-left font-bold text-black mb-4" style={{ fontFamily: "Geist, sans-serif" }}>
                    {job.title}
                  </h3>
                  
                  {/* Location and Type */}
                  <div className="flex  mb-6">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>{job.location}</span>
                    </div>
                    <span className="bg-[#dcf0ff] text-[#3594DF] px-4 py-2 rounded-full text-sm font-medium ml-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {job.type}
                    </span>
                  </div>
                  
                  {/* Job Description */}
                  <p className="text-gray-600 text-left text-xl leading-relaxed mb-6">
                    {job.description}
                  </p>
                  
                  {/* Call to Action Button */}
                  <button className=" bg-black flex  text-white py-3 px-10 rounded-2xl text-xl   hover:bg-gray-800 transition-colors duration-200">
                    Book A Free Call
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-white py-40 relative">
          {/* Background Image */}

          <div className="w-[80%] bg-[linear-gradient(to_top,_#f3f0fa_0%,_#f3f0fa_20%,_white_40%,_white_70%)] rounded-4xl  h-[450px]  mx-auto text-center px-4 overflow-hidden relative z-10">
            <div className="absolute -bottom-90  inset-0 z-0">
              <img
                src={vectorBg}
                alt="Background"
                className="w-full h-full object-cover "
              />
            </div>
            <h2
              className="text-5xl relative z-10 md:text-6xl font-bold text-black mb-6"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Ready to get started?
            </h2>
            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              <div className="text-gray-600 relative z-10">
                With lots of unique blocks, you can easily build a page
              </div>
              <div className="text-gray-600 relative z-10">
                without coding. Build your next landing page.
              </div>
            </p>
            <a
              href="#"
              className=" relative z-10 inline-block bg-[#3594DF] hover:bg-[#3594DF]/80 text-white font-semibold py-4 px-10 mt-10 rounded-3xl shadow-md hover:shadow-lg transition duration-300 text-2xl"
            >
              Book A Free Call
            </a>

            {/* Centered Group 429 (1) Image */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center z-0">
              <img
                src={Group429}
                alt="Decorative Background Element"
                className="h-[400px] object-contain"
              />
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}

export default Career 