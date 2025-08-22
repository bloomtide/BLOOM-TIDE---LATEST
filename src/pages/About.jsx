import React from 'react'
import { Helmet } from 'react-helmet-async'
import aboutLeft from '../assets/images/about/aboutleft.png'
import aboutCenter from '../assets/images/about/aboutcenter.png'
import aboutRight from '../assets/images/about/aboutright.png'
import ananya from '../assets/images/testimonial/ananya.png'
import ourMission from '../assets/images/about/ourmission.png'
import ourJourney from '../assets/images/about/ourjourney.png'
import bgImage from '../assets/images/about/bg.png'

const About = () => {
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

        {/* Mission Section */}
        <section className="py-20 relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={bgImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column - Our Mission */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Bloomtide was founded with a simple mission: to make high-quality design accessible, affordable, and efficient for businesses around the world. We saw a gap in the market—companies needing constant design support without the overhead of hiring an in-house team or dealing with the unpredictability of freelance designers. That's when we created Bloomtide, a subscription-based design service offering unlimited design requests and revisions, all at a flat monthly rate.
                </p>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={ourMission}
                    alt="Business team around table with laptops"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Column - Our Journey */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Journey
                </h2>
                <div className="rounded-lg overflow-hidden mb-6">
                  <img
                    src={ourJourney}
                    alt="Diverse team outdoors"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <p className="text-lg text-gray-600">
                  Bloomtide was founded with a simple mission: to make high-quality design accessible, affordable, and efficient for businesses around the world. We saw a gap in the market—companies needing constant design support without the overhead of hiring an in-house team or dealing with the unpredictability of freelance designers. That's when we created Bloomtide, a subscription-based design service offering unlimited design requests and revisions, all at a flat monthly rate.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About 