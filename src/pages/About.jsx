import React from 'react'
import { Helmet } from 'react-helmet-async'
import aboutLeft from '../assets/images/about/aboutleft.png'
import aboutCenter from '../assets/images/about/aboutcenter.png'
import aboutRight from '../assets/images/about/aboutright.png'
import ananya from '../assets/images/testimonial/ananya.png'
import ourMission from '../assets/images/about/ourmission.png'
import ourJourney from '../assets/images/about/ourjourney.png'
import aboutBg from '../assets/images/about/bg.png'
import whatWeStandFor from '../assets/images/about/whatwestandfor.png'
import vectorImage from '../assets/images/about/Vector.png'
import team1 from '../assets/images/about/Frame 927.png'
import team2 from '../assets/images/about/Frame 928.png'
import team3 from '../assets/images/about/Frame 929.png'
import team4 from '../assets/images/about/Frame 930.png'
import vectorBg from '../assets/images/testimonial/Vector.png'
import Group429 from '../assets/images/cta/semicricle.png'

const About = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>About Us - Bloomtide Consulting</title>
        <meta name="description" content="About Bloomtide Consulting - Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected." />
        <meta name="keywords" content="about bloomtide, data security, digital solutions, consulting services" />
        <meta property="og:title" content="About Us - Bloomtide Consulting" />
        <meta property="og:description" content="About Bloomtide Consulting - Discover cutting-edge solutions for comprehensive data security." />
        <link rel="canonical" href="https://bloomtide.com/about" />
      </Helmet>

      <div className="py-0 -translate-y-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white pt-50 relative overflow-hidden">
          {/* Background shapes */}
          <div className="absolute inset-0">
            {/* Left side abstract shapes */}
            <div className="absolute left-0 top-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/2"></div>
            <div className="absolute left-10 bottom-40 w-32 h-32 bg-blue-50 rounded-full opacity-30 blur-2xl"></div>
            
            {/* Right side abstract shapes */}
            <div className="absolute right-0 top-40 w-48 h-48 bg-blue-100 rounded-full opacity-20 blur-3xl transform translate-x-1/2"></div>
            <div className="absolute right-20 bottom-20 w-24 h-24 bg-blue-50 rounded-full opacity-25 blur-xl"></div>
            
            {/* Large faint white starburst on right */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl transform translate-x-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              {/* Sub-heading */}
              <h3 
                className="text-sm font-semibold text-[#3594DF] uppercase tracking-wide mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                ABOUT US
              </h3>
              
              {/* Main heading */}
              <h1 
                className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                <div>About Bloomtide,</div>
                <div>Lets craft brilliance together!</div>
              </h1>
              
              {/* Description */}
              <p 
                className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected.
              </p>
            </div>
          </div>
        </section>
        
        

      

        {/* Three Column Layout Section */}
        <section className="py-0 bg-white">
          <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              
              {/* Left Column */}
              <div className="space-y-3 w-[270px] justify-self-start">
                {/* Top Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={aboutLeft}
                    alt="Business team around table"
                    className="w-[270px] h-[400px] object-cover rounded-lg"
                  />
                </div>
                
                {/* Bottom Text Box - Our Goal */}
                <div className="bg-[#2f91a0] w-[270px] h-[150px] rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Our Goal</h3>
                  <p className="text-sm leading-relaxed">
                    Harness the power of AI-driven insights. Transform raw data into marketing success.
                  </p>
                </div>
              </div>

              {/* Center Column */}
              <div className="flex items-center justify-center">
                {/* Main Large Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={aboutCenter}
                    alt="Woman in yellow blazer at computer"
                    className="w-[500px] h-[560px] object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3 w-[270px] justify-self-end">
                {/* Top Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={aboutRight}
                    alt="Business team collaboration"
                    className="w-[270px] h-[150px] object-cover rounded-lg"
                  />
                </div>
                
                {/* Bottom Text Box - User Story */}
                <div className="bg-[#2f6fa0] w-[270px] h-[400px] rounded-lg p-6 flex flex-col gap-10 text-white">
                  <h3 className="text-sm font-semibold mb-3">User story</h3>
                  <blockquote className="text-lg leading-relaxed italic font-medium mb-4">
                    "The product's flexibility and customization options are outstanding. It adapts perfectly to our unique needs."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                      <img src={ananya} alt="Ananya" className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Victoria Parrish</p>
                      <p className="text-xs opacity-90">Co-founder, Generix</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Our Mission and Our Journey Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutBg}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Section: Our Mission */}
              <div className="space-y-6 border-2 border-gray-100 p-10 rounded-xl shadow-lg bg-white">
                <h2 className="text-4xl font-semibold text-black mb-6" style={{ fontFamily: "Geist, sans-serif" }}>Our Mission</h2>
                
                <ul className="space-y-4 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span style={{ fontFamily: "Manrope, sans-serif" }}>Bloomtide makes digital strategy, data intelligence, and secure engineering accessible and affordable.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span style={{ fontFamily: "Manrope, sans-serif" }}>We bridge the gap for teams needing continuous innovation without extra vendors or early scaling.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span style={{ fontFamily: "Manrope, sans-serif" }}>Our subscription model delivers roadmaps, iterative solutions, and transparent results.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span style={{ fontFamily: "Manrope, sans-serif" }}>One predictable monthly partnership with unlimited strategic requests and refinements.</span>
                  </li>
                </ul>
                
                {/* Mission Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={ourMission}
                    alt="Team collaborating around table with laptops"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Section: Our Journey */}
              <div className="space-y-6 border-2 border-gray-100 p-10 rounded-xl shadow-lg bg-white">
                {/* Journey Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={ourJourney}
                    alt="Diverse team sitting together outdoors"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <h2 className="text-4xl font-semibold text-black mb-6" style={{ fontFamily: "Geist, sans-serif" }}>Our Journey</h2>
                
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span style={{ fontFamily: "Manrope, sans-serif" }}>Bloomtide was founded after seeing midsize companies struggle with stalled digital initiatives.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span style={{ fontFamily: "Manrope, sans-serif" }}>We started as a lean team replacing bloated retainers with measurable momentum.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span style={{ fontFamily: "Manrope, sans-serif" }}>Early pilots showed demand for rapid sprints, secure architectures, and actionable analytics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span style={{ fontFamily: "Manrope, sans-serif" }}>Growing through referrals, we built a scalable framework that delivers compounding value.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
        {/* What We Stand For Section */}
        <section className="py-20 bg-white relative">
          {/* Left side path image */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side: Image */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={whatWeStandFor}
                    alt="Woman with smartphone and callout statistics"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="space-y-8">
                {/* Sub-heading */}
                <h3 
                  className="text-sm font-semibold text-[#3594DF] uppercase tracking-wide"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  SERVICES
                </h3>
                
                {/* Main heading */}
                <h2 
                  className="text-4xl font-semibold text-black leading-tight"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  What we stand for
                </h2>
                
                {/* Three numbered points */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-[#3594DF] flex-shrink-0">1.</span>
                    <div>
                      <h4 
                        className="text-lg font-semibold text-black mb-2"
                        style={{ fontFamily: "Geist, sans-serif" }}
                      >
                        Creativity
                      </h4>
                      <p 
                        className="text-gray-700 leading-relaxed"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        We blend strategic insight and imaginative engineering to craft digital experiences reflecting your brand's distinct voice authentically.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-[#3594DF] flex-shrink-0">2.</span>
                    <div>
                      <h4 
                        className="text-lg font-semibold text-black mb-2"
                        style={{ fontFamily: "Geist, sans-serif" }}
                      >
                        Efficiency
                      </h4>
                      <p 
                        className="text-gray-700 leading-relaxed"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        Lean delivery frameworks, automation, and reusable components accelerate launches while reducing risk across your evolving platforms portfolio.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-[#3594DF] flex-shrink-0">3.</span>
                    <div>
                      <h4 
                        className="text-lg font-semibold text-black mb-2"
                        style={{ fontFamily: "Geist, sans-serif" }}
                      >
                        Collaboration
                      </h4>
                      <p 
                        className="text-gray-700 leading-relaxed"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        Transparent roadmaps, embedded teams, and continuous feedback loops ensure every initiative aligns, adapts, and compounds measurable value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Vector Image */}
          <div className="absolute bottom-0 left-0 w-full">
            <img
              src={vectorImage}
              alt="Decorative vector element"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
          {/* Impact Metrics Section */}
          <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-start  gap-10">
              {/* Left: Heading and description */}
              <div className="lg:col-span-2   space-y-6">
                <h2 className="text-4xl  text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
                  Our Impact in Numbers and Proven
                  <br />
                  Success Through Innovation
                </h2>
                <p className="text-gray-600 max-w-2xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  We push the boundaries of innovation to deliver fresh, innovative concepts that capture your brand’s unique personality
                </p>
              </div>

              {/* Right: Two stats with divider */}
              <div className="flex items-start lg:justify-end  translate-x-20 gap-10">
                <div className="text-center pr-10 lg:pr-12 relative">
                  <div className="text-5xl md:text-6xl font-semibold text-[#3594DF]" style={{ fontFamily: 'Geist, sans-serif' }}>290+</div>
                  <div className="text-gray-600 mt-2" style={{ fontFamily: 'Manrope, sans-serif' }}>Satisfied Customers</div>
                  <div className="hidden lg:block absolute top-2 right-0 h-16 w-px bg-gray-300"></div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-semibold text-[#3594DF]" style={{ fontFamily: 'Geist, sans-serif' }}>3600+</div>
                  <div className="text-gray-600 mt-2" style={{ fontFamily: 'Manrope, sans-serif' }}>Solutions Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </section>


              
        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h4 className="text-sm font-semibold text-[#3594DF] uppercase tracking-wide mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>TEAM</h4>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>Meet the team</h2>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Our team is made up of passionate designers, strategists, and creatives from around the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="rounded-2xl overflow-hidden bg-white">
                <img src={team1} alt="Victoria Parrish" className="w-full h-auto object-cover" />
                <div className="text-center pt-4">
                  <p className="text-base font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>Victoria parrish</p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>Co-founder, Generix</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white">
                <img src={team2} alt="Victoria Parrish" className="w-full h-auto object-cover" />
                <div className="text-center pt-4">
                  <p className="text-base font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>Victoria parrish</p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>Co-founder, Generix</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white">
                <img src={team3} alt="Victoria Parrish" className="w-full h-auto object-cover" />
                <div className="text-center pt-4">
                  <p className="text-base font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>Victoria parrish</p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>Co-founder, Generix</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white">
                <img src={team4} alt="Victoria Parrish" className="w-full h-auto object-cover" />
                <div className="text-center pt-4">
                  <p className="text-base font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>Victoria parrish</p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>Co-founder, Generix</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#fef8ff] py-20">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-md font-semibold text-[#3594DF] uppercase tracking-wide mb-4">
                FAQ
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're here to help every question answered brings us closer to
                your success and satisfaction.
              </p>
            </div>

            <div className="space-y-6 flex justify-center flex-col items-center">
              {/* FAQ Item 1 */}
              <div className="bg-white w-[70%] rounded-2xl p-6 border-2 px-8 border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium font-geist text-black">
                      What services does Bloomtide Consulting offer?
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFAQ === 0
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-lg leading-relaxed">
                        We offer comprehensive IT solutions including web
                        development, mobile apps, custom software, branding,
                        e-commerce platforms, and SEO optimization. Our services
                        are designed to drive business growth and digital
                        transformation.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFAQ(0)}
                    className="ml-4 transition-all duration-300 hover:scale-110"
                  >
                    {openFAQ === 0 ? (
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#3594DF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white w-[70%] rounded-2xl p-6 border-2 px-8 border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium font-geist text-black">
                      How does Bloomtide ensure project success?
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFAQ === 1
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Our proven methodology combines expert teams, agile
                        processes, and transparent communication for every
                        engagement.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFAQ(1)}
                    className="ml-4 transition-all duration-300 hover:scale-110"
                  >
                    {openFAQ === 1 ? (
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#3594DF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white w-[70%] rounded-2xl p-6 border-2 px-8 border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium font-geist text-black">
                      Can Bloomtide integrate with my current systems?
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFAQ === 2
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Yes, our solutions are built for seamless integration
                        with your existing infrastructure and tools.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFAQ(2)}
                    className="ml-4 transition-all duration-300 hover:scale-110"
                  >
                    {openFAQ === 2 ? (
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#3594DF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white w-[70%] rounded-2xl p-6 border-2 px-8 border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium font-geist text-black">
                      How long does a typical project take?
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFAQ === 3
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Project timelines vary based on complexity and scope.
                        Simple websites take 2-4 weeks, while complex
                        applications may take 3-6 months. We provide detailed
                        timelines during the planning phase and keep you updated
                        on progress.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFAQ(3)}
                    className="ml-4 transition-all duration-300 hover:scale-110"
                  >
                    {openFAQ === 3 ? (
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#3594DF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white w-[70%] rounded-2xl p-6 border-2 px-8 border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium font-geist text-black">
                      Do you provide post-launch support and maintenance?
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFAQ === 4
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Absolutely. We offer ongoing support, updates, and
                        performance monitoring to ensure your digital solutions
                        continue to deliver value and adapt to changing needs.
                        Our support team is available 24/7 for critical issues.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFAQ(4)}
                    className="ml-4 transition-all duration-300 hover:scale-110"
                  >
                    {openFAQ === 4 ? (
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#3594DF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
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

export default About 