import React from 'react'
import { Helmet } from 'react-helmet-async'
import contactIcon from '../assets/icons/contactus.png'
import vectorBg from '../assets/images/testimonial/Vector.png'
import Group429 from '../assets/images/cta/semicricle.png'

function Contact() {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Bloomtide Consulting</title>
        <meta
          name="description"
          content="Get in touch with Bloomtide Consulting for comprehensive data security solutions and IT support."
        />
      </Helmet>

      <div className=" -translate-y-20 min-h-screen">
        {/* Contact Hero Section */}
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
                CONTACT US
              </h3>
              
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                <div>Get in Touch Contact</div>
                <div>Information and Support.</div>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover cutting-edge solutions for comprehensive data security,
                ensuring your digital world remains safe and protected.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Panel - Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-black mb-4">Contact US</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Connect with our dedicated Sales Team at Clarity and unlock a tailored experience designed to meet your business needs
                </p>
                
                {/* Email Entries */}
                <div className="space-y-6">
                  {/* First Email Entry */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#3594DF] rounded-full flex items-center justify-center">
                      <img 
                        src={contactIcon} 
                        alt="Contact Icon" 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-black">Our E-mail</p>
                      <p className="text-gray-600">bloomtide@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Second Email Entry */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#3594DF] rounded-full flex items-center justify-center">
                      <img 
                        src={contactIcon} 
                        alt="Contact Icon" 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-black">Our E-mail</p>
                      <p className="text-gray-600">bloomtide@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Third Email Entry */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#3594DF] rounded-full flex items-center justify-center">
                      <img 
                        src={contactIcon} 
                        alt="Contact Icon" 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-black">Our E-mail</p>
                      <p className="text-gray-600">bloomtide@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Panel - Contact Form */}
              <div className="bg-[#CCE4F7] rounded-2xl p-8 shadow-lg">
                <form className="space-y-6">
                  {/* Full Name Field */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3594DF] focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  
                  {/* Email Address Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Jane@gmail.com"
                      className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3594DF] focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  
                  {/* Message Field */}
    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us more about inquire
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Type here..."
                      className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3594DF] focus:border-transparent outline-none transition-all duration-200 resize-none"
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="text-sm bg-black text-white py-3 px-8 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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

export default Contact
