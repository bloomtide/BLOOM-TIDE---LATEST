import React from 'react'
import { useParams } from 'react-router-dom'

// Images for scrolling section
import image1 from '../assets/images/Herocarousal/image1.png'
import image2 from '../assets/images/Herocarousal/image2.png'
import image3 from '../assets/images/Herocarousal/image3.png'
import image4 from '../assets/images/Herocarousal/image4.png'

// Service-specific images
import webDev from '../assets/images/superservices/webdev.png'
import mobDev from '../assets/images/superservices/mobdev.png'
import softwareSol from '../assets/images/superservices/softwaresoltion.png'
import branding from '../assets/images/superservices/branding.png'
import ecommerce from '../assets/images/superservices/ecommerce.png'
import seo from '../assets/images/superservices/seo.png'

// Benefit images
import benefit1 from '../assets/images/benefit/benefitimg1.png'
import benefit2 from '../assets/images/benefit/benefitimg2.png'
import benefit3 from '../assets/images/benefit/benefitimg3.png'

// Feature images for "Why You'll Love Working With Us" section
import partnership from '../assets/icons/reasontowork/partnership.png'
import track from '../assets/icons/reasontowork/track.png'
import agile from '../assets/icons/reasontowork/agile.png'
import support from '../assets/icons/reasontowork/support.png'
import quality from '../assets/icons/reasontowork/quality.png'
import results from '../assets/icons/reasontowork/results.png'

// CTA section images
import vectorBg from '../assets/images/testimonial/Vector.png'
import Group429 from '../assets/images/cta/semicricle.png'

// Testimonial image
import serviceFlower from '../assets/images/SERVICEFLOWER.png'

// Software logo images
import AfterEffects from '../assets/icons/softwarelogo/AfterEffects.png'
import AlpineJS from '../assets/icons/softwarelogo/AlpineJS.png'
import AndroidStudio from '../assets/icons/softwarelogo/AndroidStudio.png'
import Angular from '../assets/icons/softwarelogo/Angular.png'
import AWS from '../assets/icons/softwarelogo/AWS.png'
import Azure from '../assets/icons/softwarelogo/Azure.png'
import Bash from '../assets/icons/softwarelogo/Bash.png'
import Bootstrap from '../assets/icons/softwarelogo/Bootstrap.png'
import BSD from '../assets/icons/softwarelogo/BSD.png'
import C from '../assets/icons/softwarelogo/C.png'
import CPlusPlus from '../assets/icons/softwarelogo/C++.png'
import CSharp from '../assets/icons/softwarelogo/CSharp.png'
import CSS from '../assets/icons/softwarelogo/CSS.png'
import Django from '../assets/icons/softwarelogo/Django.png'
import DotNET from '../assets/icons/softwarelogo/DotNET.png'
import DynamoDB from '../assets/icons/softwarelogo/DynamoDB.png'
import Express from '../assets/icons/softwarelogo/Express.png'
import Figma from '../assets/icons/softwarelogo/Figma.png'
import Flutter from '../assets/icons/softwarelogo/Flutter.png'
import Framer from '../assets/icons/softwarelogo/Framer.png'
import Git from '../assets/icons/softwarelogo/Git.png'
import GitHub from '../assets/icons/softwarelogo/GitHub.png'
import GitLab from '../assets/icons/softwarelogo/GitLab.png'
import HTML from '../assets/icons/softwarelogo/HTML.png'
import Illustrator from '../assets/icons/softwarelogo/Illustrator.png'
import Java from '../assets/icons/softwarelogo/Java.png'
import JavaScript from '../assets/icons/softwarelogo/JavaScript.png'
import JQuery from '../assets/icons/softwarelogo/JQuery.png'
import Linux from '../assets/icons/softwarelogo/Linux.png'
import MongoDB from '../assets/icons/softwarelogo/MongoDB.png'
import MySQL from '../assets/icons/softwarelogo/MySQL.png'
import NestJS from '../assets/icons/softwarelogo/NestJS.png'
import Netlify from '../assets/icons/softwarelogo/Netlify.png'
import NextJS from '../assets/icons/softwarelogo/NextJS.png'
import NodeJS from '../assets/icons/softwarelogo/NodeJS.png'
import NuxtJS from '../assets/icons/softwarelogo/NuxtJS.png'
import Photoman from '../assets/icons/softwarelogo/Photoman.png'
import Photoshop from '../assets/icons/softwarelogo/Photoshop.png'
import PHP from '../assets/icons/softwarelogo/PHP.png'
import Premiere from '../assets/icons/softwarelogo/Premiere.png'
import Python from '../assets/icons/softwarelogo/Python.png'
import PyTorch from '../assets/icons/softwarelogo/PyTorch.png'
import R from '../assets/icons/softwarelogo/R.png'
import ReactLogo from '../assets/icons/softwarelogo/React.png'
import Redux from '../assets/icons/softwarelogo/Redux.png'
import Ruby from '../assets/icons/softwarelogo/Ruby.png'
import SASS from '../assets/icons/softwarelogo/SASS.png'
import SolidJS from '../assets/icons/softwarelogo/SolidJS.png'
import Spring from '../assets/icons/softwarelogo/Spring.png'
import SQLite from '../assets/icons/softwarelogo/SQLite.png'
import StackOverFlow from '../assets/icons/softwarelogo/StackOverFlow.png'
import Swift from '../assets/icons/softwarelogo/Swift.png'
import TailwindCSS from '../assets/icons/softwarelogo/TailwindCSS.png'
import TypeScript from '../assets/icons/softwarelogo/TypeScript.png'
import VueJS from '../assets/icons/softwarelogo/VueJS.png'
import Webflow from '../assets/icons/softwarelogo/Webflow.png'
import WindiCSS from '../assets/icons/softwarelogo/WindiCSS.png'
import Wordpress from '../assets/icons/softwarelogo/Wordpress.png'
import XD from '../assets/icons/softwarelogo/XD.png'

const SERVICES = {
  'web-app-development': {
    title: 'Web App Development',
    image: webDev,
    description: 'Empowering you to take charge of your financial future with intuitive tools and personalized insights.',
    features: [
      'Fully Responsive Websites',
      'Custom WordPress and CMS Solutions', 
      'SEO-Optimized Design',
      'User-Centered Layouts and Navigation'
    ]
  },
  'mobile-development': {
    title: 'Mob App Development',
    image: mobDev,
    description: 'Empowering you to take charge of your financial future with intuitive tools and personalized insights.',
    features: [
      'Fully Responsive Websites',
      'Custom WordPress and CMS Solutions',
      'SEO-Optimized Design', 
      'User-Centered Layouts and Navigation'
    ]
  },
  'software-solutions': {
    title: 'Software Solutions',
    image: softwareSol,
    description: 'Empowering you to take charge of your financial future with intuitive tools and personalized insights.',
    features: [
      'Fully Responsive Websites',
      'Custom WordPress and CMS Solutions',
      'SEO-Optimized Design',
      'User-Centered Layouts and Navigation'
    ]
  },
  'branding-identity': {
    title: 'Branding & Identity',
    image: branding,
    description: 'Empowering you to take charge of your financial future with intuitive tools and personalized insights.',
    features: [
      'Fully Responsive Websites',
      'Custom WordPress and CMS Solutions',
      'SEO-Optimized Design',
      'User-Centered Layouts and Navigation'
    ]
  },
  'ecommerce': {
    title: 'E-commerce Solutions',
    image: ecommerce,
    description: 'Empowering you to take charge of your financial future with intuitive tools and personalized insights.',
    features: [
      'Fully Responsive Websites',
      'Custom WordPress and CMS Solutions',
      'SEO-Optimized Design',
      'User-Centered Layouts and Navigation'
    ]
  },
  'seo-performance': {
    title: 'SEO & Performance Opt.',
    image: seo,
    description: 'Empowering you to take charge of your financial future with intuitive tools and personalized insights.',
    features: [
      'Fully Responsive Websites',
      'Custom WordPress and CMS Solutions',
      'SEO-Optimized Design',
      'User-Centered Layouts and Navigation'
    ]
  }
}

const ServiceDetail = () => {
  const { slug } = useParams()
  
  // Testimonial state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0)
  
  // Testimonials data
  const testimonials = [
    {
      image: "https://plus.unsplash.com/premium_photo-1681494639261-7908ef9d2257?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "The product's flexibility and customization options are outstanding. It adapts perfectly to our unique needs.",
      name: "Victoria Parrish",
      title: "Co-founder, Generix"
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "Exceptional service and results that exceeded our expectations. The team delivered exactly what we needed.",
      name: "Michael Chen",
      title: "CEO, TechFlow Solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      quote: "Professional, innovative, and reliable. They transformed our business with cutting-edge technology solutions.",
      name: "Sarah Johnson",
      title: "CTO, Digital Dynamics"
    }
  ]
  
  // Navigation functions
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const currentTestimonial = testimonials[currentTestimonialIndex]

  const serviceData = SERVICES[slug]

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white -translate-y-16 pt-50 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute  inset-0 ">
          <svg
            width="100%"
            height="649"
            viewBox="0 0 1530 649"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_110_1943)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M867.998 -499.659C1111.21 -535.406 1372.21 -474.229 1518.31 -371.018C1649.18 -278.57 1574 -141.684 1549.42 -18.2751C1530.15 78.4481 1516.25 179.446 1393.85 253.844C1275.1 326.021 1098.47 342.624 930.783 357.738C755.499 373.537 581.271 382.255 429.433 340.769C231.796 286.77 -16.4511 223.66 -23.784 96.9253C-31.109 -29.6731 245.005 -104.117 397.778 -206.319C554.254 -310.998 637.414 -465.767 867.998 -499.659Z"
                fill="url(#paint0_linear_110_1943)"
                fillOpacity="0.1"
              />
            </g>
            <path
              d="M342.785 524.853C324.134 458.183 349.197 420.888 417.972 412.971C486.747 405.053 511.81 367.759 493.159 301.089C474.509 234.418 499.571 197.124 568.347 189.206C637.122 181.289 662.184 143.995 643.534 77.3244C624.883 10.6543 649.946 -26.6397 718.721 -34.5576C787.497 -42.4755 812.559 -79.7696 793.909 -146.44C775.258 -213.11 800.32 -250.404 869.096 -258.322C937.871 -266.24 962.934 -303.534 944.283 -370.204C925.633 -436.874 950.695 -474.168 1019.47 -482.086C1088.25 -490.004 1113.31 -527.298 1094.66 -593.968"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="80"
              strokeLinecap="round"
            />
            <path
              d="M1131 377.419V353.948H1161.19L1186.96 357.982L1188.8 353.581L1167.82 338.178L1146.46 316.907L1163.03 300.403L1184.39 321.308L1199.85 342.579L1204.27 340.745L1200.22 314.706V285H1223.78V314.706L1219.73 340.745L1224.15 342.579L1239.61 321.308L1260.97 300.403L1277.54 316.907L1256.55 338.178L1235.2 353.581L1237.04 357.982L1262.81 353.948H1293V377.419H1262.81L1237.04 373.385L1235.2 377.786L1256.55 393.189L1277.54 414.46L1260.97 430.964L1239.61 409.692L1224.15 388.421L1219.73 390.255L1223.78 416.294V446H1200.22V416.294L1204.27 390.255L1199.85 388.421L1184.39 409.692L1163.03 430.964L1146.46 414.46L1167.82 393.189L1188.8 377.786L1186.96 373.385L1161.19 377.419H1131Z"
              fill="white"
              fillOpacity="0.6"
            />
            <defs>
              <filter
                id="filter0_f_110_1943"
                x="-301.927"
                y="-787.921"
                width="2173.18"
                height="1436.77"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="139"
                  result="effect1_foregroundBlur_110_1943"
                />
              </filter>
              <linearGradient
                id="paint0_linear_110_1943"
                x1="1605.51"
                y1="-70.1776"
                x2="-17.5543"
                y2="105.166"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0834F7" />
                <stop offset="1" stopColor="#01B1A2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Large amorphous blue shape on left */}
          <div className="absolute left-0 top-0 w-96 h-full bg-blue-200 rounded-full opacity-20 blur-3xl transform -translate-x-1/2"></div>
          {/* Small white circular shape on upper right */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full opacity-30 blur-2xl"></div>
          {/* Faint blue shape on far right bottom */}
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-15 blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              <div>Transforming Organizations with</div>
              <div>Tailored IT Solutions Driven</div>
              <div>
                by{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </div>
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-xl mx-auto">
              Delivering innovative, high-quality digital solutions with
              speed, precision, and expert support to drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#3594DF] text-white text-lg px-10 py-3 rounded-2xl hover:bg-[#3594DF]/80 transition-colors">
                Explore Services
              </button>
              <button className="bg-black text-white text-lg px-10 py-3 rounded-2xl hover:bg-gray-800 transition-colors">
                Book A Free Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Images Section */}
      <section className="bg-white w-full py-20 overflow-hidden">
        <div className="relative w-full">
          <div className="flex scroll-animation items-center gap-5 w-[200%] px-4 sm:px-6 lg:px-8">
            {[...Array(2)].flatMap(() => (
              <>
                <div className="rounded-lg">
                  <div className="bg-[#d1dbf3] rounded-lg inline-block p-[30px]">
                    <img
                      src={image1}
                      alt="Image 1"
                      className="w-[750px] h-[490px] object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="rounded-lg">
                  <div className="bg-[#d1dbf3] rounded-lg inline-block p-[30px]">
                    <img
                      src={image2}
                      alt="Image 2"
                      className="w-[750px] h-[290px] object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="rounded-lg">
                  <div className="bg-[#d1dbf3] rounded-lg inline-block p-[30px]">
                    <img
                      src={image3}
                      alt="Image 3"
                      className="w-[750px] h-[490px] object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="rounded-lg">
                  <div className="bg-[#d1dbf3] rounded-lg inline-block p-[30px]">
                    <img
                      src={image4}
                      alt="Image 4"
                      className="w-[750px] h-[290px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header */}
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-[#3594DF] uppercase tracking-wide mb-4">
              SERVICES
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Get High-Quality Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {serviceData.description}
            </p>
          </div>

          {/* Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Service Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={serviceData.image}
                alt={serviceData.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right: Service Details */}
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-black">
                {serviceData.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {serviceData.description}
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-black mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_201_7819)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.5 7.5C0.5 5.51088 1.29018 3.60322 2.6967 2.1967C4.10322 0.790176 6.01088 0 8 0C9.98912 0 11.8968 0.790176 13.3033 2.1967C14.7098 3.60322 15.5 5.51088 15.5 7.5C15.5 9.48912 14.7098 11.3968 13.3033 12.8033C11.8968 14.2098 9.98912 15 8 15C6.01088 15 4.10322 14.2098 2.6967 12.8033C1.29018 11.3968 0.5 9.48912 0.5 7.5ZM7.572 10.71L11.89 5.312L11.11 4.688L7.428 9.289L4.82 7.116L4.18 7.884L7.572 10.71Z" fill="black"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_201_7819">
                            <rect width="16" height="15" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-black text-white font-semibold py-4 px-8 rounded-2xl hover:bg-gray-800 transition-colors">
                Book A Free Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-md font-semibold text-blue-400 uppercase tracking-wide mb-4">
              BENEFITS
            </h3>
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              We just don't serve, we build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering you to take charge of your financial future with
              intuitive tools and personalized insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* First Benefit */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-blue-200 rounded-2xl flex items-center justify-center relative">
                  <img
                    src={benefit1}
                    alt="Time and Cost-Effective"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Time and Cost-Effective
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Accelerate digital transformation with smart solutions that
                save time, reduce costs, and maximize ROI.
              </p>
            </div>

            {/* Second Benefit */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-blue-200 rounded-2xl flex items-center justify-center relative">
                  <img
                    src={benefit2}
                    alt="End-to-End IT Solutions"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                End-to-End IT Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From strategy to support, we deliver tailored, comprehensive
                services for your unique business needs.
              </p>
            </div>

            {/* Third Benefit */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-blue-200 rounded-2xl flex items-center justify-center relative">
                  <img
                    src={benefit3}
                    alt="Quality and Reliability"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Quality and Reliability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trust our expert team and methods for secure, scalable, and
                robust project outcomes every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Growth Section */}
      <section className="bg-white py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-4xl p-12 lg:p-16 shadow-xl relative overflow-hidden">
            {/* SVG Background */}
            <div className="absolute inset-0 z-0">
              <svg width="100%" height="100%" viewBox="0 0 1230 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                <g filter="url(#filter0_f_201_5045)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M660.505 -206.6C905.94 -192.821 1149.37 -80.5178 1271.78 49.9091C1381.44 166.734 1280.32 285.752 1231.48 401.719C1193.19 492.609 1159.31 588.765 1024.47 637.09C893.656 683.973 717.288 664.797 549.978 645.958C375.089 626.265 202.655 599.848 62.2284 528.739C-120.554 436.182 -351.09 324.546 -332.845 198.917C-314.619 73.4236 -29.1829 55.8957 140.99 -13.5742C315.287 -84.7279 427.81 -219.664 660.505 -206.6Z" fill="url(#paint0_linear_201_5045)" fillOpacity="0.25"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M660.505 -206.6C905.94 -192.821 1149.37 -80.5178 1271.78 49.9091C1381.44 166.734 1280.32 285.752 1231.48 401.719C1193.19 492.609 1159.31 588.765 1024.47 637.09C893.656 683.973 717.288 664.797 549.978 645.958C375.089 626.265 202.655 599.848 62.2284 528.739C-120.554 436.182 -351.09 324.546 -332.845 198.917C-314.619 73.4236 -29.1829 55.8957 140.99 -13.5742C315.287 -84.7279 427.81 -219.664 660.505 -206.6Z" stroke="black"/>
                </g>
                <defs>
                  <filter id="filter0_f_201_5045" x="-612.363" y="-485.984" width="2211.8" height="1430.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="139" result="effect1_foregroundBlur_201_5045"/>
                  </filter>
                  <linearGradient id="paint0_linear_201_5045" x1="3.23818" y1="-188.024" x2="1210.78" y2="451.908" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2A0064"/>
                    <stop offset="0.216346" stopColor="#04FFC6"/>
                    <stop offset="0.581731" stopColor="#8FF708"/>
                    <stop offset="0.813573" stopColor="#BDE127"/>
                    <stop offset="1" stopColor="#002181"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
              {/* Left Section - Metrics */}
              <div className="lg:col-span-2 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {/* Growth Metric 1 */}
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-bold text-black mb-4" style={{ fontFamily: "Geist, sans-serif" }}>
                      20%
                    </div>
                    <div className="text-base text-black" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Growth in online sales every day
                    </div>
                  </div>
                  
                  {/* Growth Metric 2 */}
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-bold text-black mb-4" style={{ fontFamily: "Geist, sans-serif" }}>
                      $8.5k
                    </div>
                    <div className="text-base text-black" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Reduced cost to reach new leads
                    </div>
                  </div>
                  
                  {/* Growth Metric 3 */}
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-bold text-black mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                      4X
                    </div>
                    <div className="text-base text-black" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Faster time to launch your product
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Section - Call to Action */}
              <div className="lg:col-span-1  flex flex-col justify-center items-center shadow-xl p-12 text-center lg:text-left">
                <h3 className="text-sm lg:text-xl font-semibold text-center text-black mb-2" style={{ fontFamily: "Geist, sans-serif" }}>
                  Start Making Growth
                </h3>
                <p className="text-xs text-center text-black mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Managing your daily activities has never been easier with these powerful solutions.
                </p>
                <a
                  href="#"
                  className="inline-block  bg-black hover:bg-gray-800 text-white font-semibold py-3 text-sm px-8 rounded-xl transition duration-300"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Book A Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#fcfeff] py-20">
        <div className="max-w-[1084px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative flower shape */}
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
              <img
                src={serviceFlower}
                alt="Decorative Flower"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 relative z-10">
              {/* Left Section - Profile Picture */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 lg:w-60 lg:h-60 rounded-3xl overflow-hidden bg-gray-100">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full top-1 object-top object-cover"
                  />
                </div>
              </div>
              
              {/* Right Section - Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Star Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                
                {/* Review Text */}
                <p className="text-3xl text-gray-800 mb-6 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {currentTestimonial.quote}
                </p>
                
                {/* Reviewer Information */}
                <div className="text-gray-600" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <span className="font-semibold text-sm">{currentTestimonial.name}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-gray-600">{currentTestimonial.title}</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 flex gap-2">
              <button onClick={prevTestimonial} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={nextTestimonial} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Controls */}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-white py-20">
        <div className=" ">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              INTEGRATION
            </h3>
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 leading-tight" style={{ fontFamily: "Geist, sans-serif" }}>
              Integrate with 100+ favourite tools.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "Manrope, sans-serif" }}>
              Managing your daily activities has never been easier with these powerful features designed to simplify.
            </p>
          </div>

          {/* First Row - Scroll Right to Left */}
          <div className="mb-12 overflow-hidden">
            <div className="flex animate-scroll-right-to-left">
              <div className="flex gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={StackOverFlow} alt="StackOverflow" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">StackOverflow</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Swift} alt="Swift" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Swift</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={TailwindCSS} alt="TailwindCSS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">TailwindCSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={TypeScript} alt="TypeScript" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={VueJS} alt="VueJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">VueJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={ReactLogo} alt="React" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={NextJS} alt="NextJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">NextJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={NodeJS} alt="NodeJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">NodeJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Python} alt="Python" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Java} alt="Java" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={HTML} alt="HTML" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={CSS} alt="CSS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={JavaScript} alt="JavaScript" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={PHP} alt="PHP" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={MongoDB} alt="MongoDB" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={MySQL} alt="MySQL" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={GitHub} alt="GitHub" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">GitHub</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Git} alt="Git" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Figma} alt="Figma" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Figma</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Photoshop} alt="Photoshop" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Photoshop</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Flutter} alt="Flutter" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Flutter</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Bootstrap} alt="Bootstrap" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Bootstrap</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={SASS} alt="SASS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">SASS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={C} alt="C" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">C</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={CPlusPlus} alt="C++" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">C++</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={CSharp} alt="C#" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">C#</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Ruby} alt="Ruby" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Ruby</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Django} alt="Django" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Django</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Spring} alt="Spring" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Spring</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Linux} alt="Linux" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Linux</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Wordpress} alt="Wordpress" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Wordpress</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Webflow} alt="Webflow" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Webflow</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={XD} alt="XD" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">XD</span>
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={StackOverFlow} alt="StackOverflow" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">StackOverflow</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Swift} alt="Swift" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Swift</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={TailwindCSS} alt="TailwindCSS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">TailwindCSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={TypeScript} alt="TypeScript" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={VueJS} alt="VueJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">VueJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={ReactLogo} alt="React" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={NextJS} alt="NextJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">NextJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={NodeJS} alt="NodeJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">NodeJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Python} alt="Python" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Java} alt="Java" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={HTML} alt="HTML" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={CSS} alt="CSS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={JavaScript} alt="JavaScript" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={PHP} alt="PHP" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={MongoDB} alt="MongoDB" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={MySQL} alt="MySQL" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={GitHub} alt="GitHub" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">GitHub</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Git} alt="Git" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Figma} alt="Figma" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Figma</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Photoshop} alt="Photoshop" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Photoshop</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Flutter} alt="Flutter" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Flutter</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Bootstrap} alt="Bootstrap" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Bootstrap</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={SASS} alt="SASS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">SASS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={C} alt="C" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">C</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={CPlusPlus} alt="C++" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">C++</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={CSharp} alt="C#" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">C#</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Ruby} alt="Ruby" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Ruby</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Django} alt="Django" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Django</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Spring} alt="Spring" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Spring</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Linux} alt="Linux" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Linux</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Wordpress} alt="Wordpress" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Wordpress</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Webflow} alt="Webflow" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Webflow</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={XD} alt="XD" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">XD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Scroll Left to Right */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left-to-right">
              <div className="flex gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Express} alt="Express" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Express</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={AfterEffects} alt="AfterEffects" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">AfterEffects</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Azure} alt="Azure" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Azure</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={AWS} alt="AWS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">AWS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Angular} alt="Angular" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Angular</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={AlpineJS} alt="AlpineJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">AlpineJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={AndroidStudio} alt="AndroidStudio" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">AndroidStudio</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Bash} alt="Bash" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Bash</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={BSD} alt="BSD" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">BSD</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={DotNET} alt="DotNET" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">DotNET</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={DynamoDB} alt="DynamoDB" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">DynamoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Framer} alt="Framer" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Framer</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={GitLab} alt="GitLab" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">GitLab</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Illustrator} alt="Illustrator" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Illustrator</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={JQuery} alt="JQuery" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">JQuery</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={NestJS} alt="NestJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">NestJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Netlify} alt="Netlify" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Netlify</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={NuxtJS} alt="NuxtJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">NuxtJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Photoman} alt="Photoman" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Photoman</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Photoshop} alt="Photoshop" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Photoshop</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={PHP} alt="PHP" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Premiere} alt="Premiere" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Premiere</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={PyTorch} alt="PyTorch" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">PyTorch</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={R} alt="R" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">R</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Redux} alt="Redux" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Redux</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={SolidJS} alt="SolidJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">SolidJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={SQLite} alt="SQLite" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">SQLite</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={WindiCSS} alt="WindiCSS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">WindiCSS</span>
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Express} alt="Express" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Express</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={AfterEffects} alt="AfterEffects" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">AfterEffects</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Azure} alt="Azure" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Azure</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={AWS} alt="AWS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">AWS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Angular} alt="Angular" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Angular</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={AlpineJS} alt="AlpineJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">AlpineJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={AndroidStudio} alt="AndroidStudio" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">AndroidStudio</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Bash} alt="Bash" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Bash</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={BSD} alt="BSD" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">BSD</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={DotNET} alt="DotNET" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">DotNET</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={DynamoDB} alt="DynamoDB" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">DynamoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Framer} alt="Framer" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Framer</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={GitLab} alt="GitLab" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">GitLab</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Illustrator} alt="Illustrator" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Illustrator</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={JQuery} alt="JQuery" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">JQuery</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={NestJS} alt="NestJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">NestJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Netlify} alt="Netlify" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Netlify</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={NuxtJS} alt="NuxtJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">NuxtJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Photoman} alt="Photoman" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Photoman</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Photoshop} alt="Photoshop" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Photoshop</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={PHP} alt="PHP" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Premiere} alt="Premiere" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Premiere</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={PyTorch} alt="PyTorch" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">PyTorch</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={R} alt="R" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">R</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={Redux} alt="Redux" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">Redux</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={SolidJS} alt="SolidJS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">SolidJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={SQLite} alt="SQLite" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">SQLite</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img src={WindiCSS} alt="WindiCSS" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-sm text-gray-800 mt-2">WindiCSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You'll Love Working With Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1084px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3
              className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              OUR SUPER SERVICES
            </h3>
            <h2
              className="text-4xl md:text-5xl font-semibold text-black mb-6 leading-tight"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              <div>Here is why you'll love</div>
              <div>working with us</div>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collaborative Partnership */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img
                  src={partnership}
                  alt="Collaborative Partnership"
                  className="w-12 h-12 "
                />
              </div>
              <h3
                className="text-xl font-bold text-black mb-3"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Collaborative Partnership
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                We collaborate closely with your team to ensure full
                transparency, alignment, and clarity at every stage.
              </p>
            </div>

            {/* Proven Track Record */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img
                  src={track}
                  alt="Proven Track Record"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3
                className="text-xl font-bold text-black mb-3"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Proven Track Record
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Leading organizations trust us to deliver innovative,
                result-driven projects with lasting impact and excellence.
              </p>
            </div>

            {/* Agile and Adaptive */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img
                  src={agile}
                  alt="Agile and Adaptive"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3
                className="text-xl font-bold text-black mb-3"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Agile and Adaptive
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Agile, flexible processes designed to adapt swiftly to your
                evolving business needs and shifting priorities.
              </p>
            </div>

            {/* Dedicated Support */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img
                  src={support}
                  alt="Dedicated Support"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3
                className="text-xl font-bold text-black mb-3"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Dedicated Support
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Our experts offer 24/7 support with proactive solutions to
                ensure seamless operations and peace of mind.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img
                  src={quality}
                  alt="Quality Assurance"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3
                className="text-xl font-bold text-black mb-3"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Quality Assurance
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                We follow rigorous testing and industry best practices to
                deliver reliable, high-performance outcomes every time.
              </p>
            </div>

            {/* Results-Oriented */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img
                  src={results}
                  alt="Results-Oriented"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3
                className="text-xl font-bold text-black mb-3"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Results-Oriented
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Our success is measured by your satisfaction and the tangible
                growth your business achieves with us.
              </p>
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
    </>
  )
}

export default ServiceDetail


