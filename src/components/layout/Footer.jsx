import React from 'react'
import bloomtideLogo from '../../assets/images/bloomtide-logo.png'
import bloomtideIcon from '../../assets/icons/reasontowork/bloomtide.png'

const Footer = () => {
  return (
    <footer className="bg-white  overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column - Bloomtide Consulting Information */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-50 h-20 rounded-lg flex items-center justify-center">
                <img src={bloomtideLogo} alt="Bloomtide Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-600 leading-relaxed max-w-xs" style={{fontFamily: 'Manrope, sans-serif'}}>
              Empowering you to take charge of your financial future with intuitive tools and personalized insights.
            </p>
            
            {/* Copyright */}
            <p className="text-sm text-gray-500" style={{fontFamily: 'Manrope, sans-serif'}}>
              Copyright © 2024 Bloomtide. All Rights Reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm" style={{fontFamily: 'Manrope, sans-serif'}}>f</span>
              </div>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm" style={{fontFamily: 'Manrope, sans-serif'}}>in</span>
              </div>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm" style={{fontFamily: 'Manrope, sans-serif'}}>💬</span>
              </div>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm" style={{fontFamily: 'Manrope, sans-serif'}}>X</span>
              </div>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm" style={{fontFamily: 'Manrope, sans-serif'}}>📷</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-black" style={{fontFamily: 'Manrope, sans-serif'}}>QUICK LINK</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#3594DF] transition-colors" style={{fontFamily: 'Manrope, sans-serif'}}>Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3594DF] transition-colors" style={{fontFamily: 'Manrope, sans-serif'}}>Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3594DF] transition-colors" style={{fontFamily: 'Manrope, sans-serif'}}>Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3594DF] transition-colors" style={{fontFamily: 'Manrope, sans-serif'}}>About Us</a></li>
              <li className="flex items-center space-x-2">
                <a href="#" className="text-gray-600 hover:text-[#3594DF] transition-colors" style={{fontFamily: 'Manrope, sans-serif'}}>Career</a>
                <span className="text-xs bg-black text-white px-2 py-1 rounded" style={{fontFamily: 'Manrope, sans-serif'}}>New</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="#" className="text-gray-600 hover:text-[#3594DF] transition-colors" style={{fontFamily: 'Manrope, sans-serif'}}>Service</a>
                <span className="text-xs bg-black text-white px-2 py-1 rounded" style={{fontFamily: 'Manrope, sans-serif'}}>New</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-black" style={{fontFamily: 'Manrope, sans-serif'}}>CONTACT</h3>
            
            {/* Phone Numbers */}
            <div>
              <p className="text-gray-600 font-medium mb-2" style={{fontFamily: 'Manrope, sans-serif'}}>Prefer to call?</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a 
                    href="tel:+919508386750" 
                    className="text-gray-600 hover:text-[#3594DF] transition-colors cursor-pointer"
                    style={{fontFamily: 'Manrope, sans-serif'}}
                  >
                    +91 9508386750
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a 
                    href="tel:+918082791651" 
                    className="text-gray-600 hover:text-[#3594DF] transition-colors cursor-pointer"
                    style={{fontFamily: 'Manrope, sans-serif'}}
                  >
                    +91 8082791651
                  </a>
                </div>
              </div>
            </div>
            
            {/* Email */}
            <div>
              <p className="text-gray-600 font-medium mb-2" style={{fontFamily: 'Manrope, sans-serif'}}>E-mail</p>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a 
                  href="mailto:business@bloomtideconsulting.com" 
                  className="text-gray-600 hover:text-[#3594DF] transition-colors cursor-pointer"
                  style={{fontFamily: 'Manrope, sans-serif'}}
                >
                  business@bloomtideconsulting.com
                </a>
              </div>
            </div>
            
            {/* Address */}
            <div>
              <p className="text-gray-600 font-medium mb-2" style={{fontFamily: 'Manrope, sans-serif'}}>Got A Project? Talk to us</p>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <a 
                  href="https://maps.google.com/?q=Sanik+colony,+Jammu,+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#3594DF] transition-colors cursor-pointer"
                  style={{fontFamily: 'Manrope, sans-serif'}}
                >
                  Sanik colony, Jammu, India.
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bloomtide Icon */}
      </div>
        <div className="w-[100vw] pt-10  h-full">
          <img 
            src={bloomtideIcon} 
            alt="Bloomtide Icon" 
            className="  object-contain  transition-opacity duration-300"
          />
        </div>
    </footer>
  )
}

export default Footer 