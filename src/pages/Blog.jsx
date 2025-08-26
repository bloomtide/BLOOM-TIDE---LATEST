import React from 'react'
import { Helmet } from 'react-helmet-async'

// Blog hero images
import blogHeroLeft from '../assets/images/blog/blogheroleft.png'
import blogHeroCenter from '../assets/images/blog/blogherocenter.png'
import blogHeroRight from '../assets/images/blog/blogheroright.png'

// Blog service images
import agiledelivery from '../assets/images/blog/agiledelivery.png'
import buisnessgrowth from '../assets/images/blog/buisnessgrowth.png'
import cloudtransformation from '../assets/images/blog/cloudtransformation.png'
import datainsights from '../assets/images/blog/datainsights.png'
import experiencedesign from '../assets/images/blog/experiencedesign.png'
import secureinnovation from '../assets/images/blog/secureinnovation.png'

// CTA section images
import vectorBg from '../assets/images/testimonial/Vector.png'
import Group429 from '../assets/images/cta/semicricle.png'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Bloomtide Consulting</title>
        <meta name="description" content="Fresh ideas, bold insights, and smarter digital innovation playbook from Bloomtide Consulting." />
        <meta name="keywords" content="digital innovation, tech insights, design hacks, AI wins, growth experiments, bloomtide consulting blog" />
        <meta property="og:title" content="Blog - Bloomtide Consulting" />
        <meta property="og:description" content="Fresh ideas, bold insights, and smarter digital innovation playbook." />
        <link rel="canonical" href="https://bloomtide.com/blog" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-white relative overflow-hidden">
        

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-black -z-10">
          <svg width="1530" height="649" viewBox="0 0 1530 649" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_0_1)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M867.997 -499.659C1111.21 -535.407 1372.21 -474.23 1518.31 -371.018C1649.18 -278.571 1574 -141.684 1549.42 -18.2753C1530.15 78.4479 1516.25 179.446 1393.85 253.843C1275.1 326.021 1098.47 342.623 930.782 357.738C755.498 373.536 581.27 382.255 429.432 340.769C231.795 286.769 -16.4521 223.66 -23.785 96.9251C-31.1099 -29.6733 245.004 -104.117 397.777 -206.319C554.253 -310.998 637.413 -465.767 867.997 -499.659Z" fill="url(#paint0_linear_0_1)" fill-opacity="0.1"/>
</g>
<path d="M342.785 524.852C324.134 458.182 349.197 420.888 417.972 412.97C486.747 405.052 511.81 367.758 493.159 301.088C474.509 234.418 499.571 197.124 568.347 189.206C637.122 181.288 662.184 143.994 643.534 77.3242C624.883 10.654 649.946 -26.64 718.721 -34.5579C787.497 -42.4758 812.559 -79.7698 793.909 -146.44C775.258 -213.11 800.32 -250.404 869.096 -258.322C937.871 -266.24 962.934 -303.534 944.283 -370.204C925.633 -436.874 950.695 -474.168 1019.47 -482.086C1088.25 -490.004 1113.31 -527.298 1094.66 -593.968" stroke="white" stroke-opacity="0.5" stroke-width="80" stroke-linecap="round"/>
<path d="M1131 377.419V353.948H1161.19L1186.96 357.982L1188.8 353.581L1167.82 338.178L1146.46 316.907L1163.03 300.403L1184.39 321.308L1199.85 342.579L1204.27 340.745L1200.22 314.706V285H1223.78V314.706L1219.73 340.745L1224.15 342.579L1239.61 321.308L1260.97 300.403L1277.54 316.907L1256.55 338.178L1235.2 353.581L1237.04 357.982L1262.81 353.948H1293V377.419H1262.81L1237.04 373.385L1235.2 377.786L1256.55 393.189L1277.54 414.46L1260.97 430.964L1239.61 409.692L1224.15 388.421L1219.73 390.255L1223.78 416.294V446H1200.22V416.294L1204.27 390.255L1199.85 388.421L1184.39 409.692L1163.03 430.964L1146.46 414.46L1167.82 393.189L1188.8 377.786L1186.96 373.385L1161.19 377.419H1131Z" fill="white" fill-opacity="0.6"/>
<defs>
<filter id="filter0_f_0_1" x="-301.928" y="-787.922" width="2173.18" height="1436.77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="139" result="effect1_foregroundBlur_0_1"/>
</filter>
<linearGradient id="paint0_linear_0_1" x1="1605.51" y1="-70.1778" x2="-17.5553" y2="105.166" gradientUnits="userSpaceOnUse">
<stop stop-color="#0834F7"/>
<stop offset="1" stop-color="#01B1A2"/>
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

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-md font-bold text-[#3594DF] mb-6 leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>BLOG</h1>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 w-[70%] mx-auto leading-tight"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Fresh Ideas, Bold Insights, Smarter Digital Innovation Playbook
            </h2>
            <p 
              className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Unlock bold insights, tech deep dives, design hacks, AI wins, and growth experiments—fueling fearless product leaders forward!
            </p>
          </div>
        </section>

        {/* Image Cards Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left Image Card - Smaller */}
              <div className="relative group">
                <div className="rounded-xl overflow-hidden transform transition-transform duration-300 ">
                  <img 
                    src={blogHeroLeft} 
                    alt="Accessible design systems and digital experiences" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Center Image Card - Bigger */}
              <div className="relative group">
                <div className="rounded-xl overflow-hidden transform transition-transform duration-300  ">
                  <img 
                    src={blogHeroCenter} 
                    alt="Professional woman working on laptop" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right Image Card - Smaller */}
              <div className="relative group">
                <div className="rounded-xl overflow-hidden transform transition-transform duration-300 ">
                  <img 
                    src={blogHeroRight} 
                    alt="Woman focused on laptop with coffee" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Super Services Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h3 className="text-[#3594DF] font-semibold text-lg mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                OUR BLOG
              </h3>
              <h2 
                className="text-4xl md:text-5xl max-w-md mx-auto font-semibold text-black mb-6"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                If you can read it, we can write it.
              </h2>
              <p 
                className="text-md text-gray-600 max-w-3xl mx-auto font-semibold"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Flexible digital solutions with monthly or yearly plans— no commitments, cancel anytime.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white flex flex-col items-center justify-center gap-4 rounded-2xl p-6hover:shadow-lg transition-shadow duration-300 group relative">
                <div className=" bg-[#cdc6ff] rounded-xl px-2 py-4">
                  <img 
                    src={buisnessgrowth} 
                    alt="Business Growth" 
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-center text-black "
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Business Growth
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-center max-w-xs mx-auto"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Unlock smarter decisions through tailored strategies aligning technology with evolving business goals.
                </p>
                <button className="bg-[#3594DF] text-white px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View more
                </button>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white flex flex-col items-center justify-center gap-4 rounded-2xl p-6hover:shadow-lg transition-shadow duration-300 group relative">
                <div className=" bg-[#cdc6ff] rounded-xl px-2 py-4">
                  <img 
                    src={cloudtransformation} 
                    alt="Cloud Transformation" 
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-center text-black "
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Cloud Transformation
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-center max-w-xs mx-auto"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Adopt cloud solutions that boost efficiency, resilience, and growth without unnecessary complexity.
                </p>
                <button className="bg-[#3594DF] text-white px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View more
                </button>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white flex flex-col items-center justify-center gap-4 rounded-2xl p-6hover:shadow-lg transition-shadow duration-300 group relative">
                <div className=" bg-[#cdc6ff] rounded-xl px-2 py-4">
                  <img 
                    src={datainsights} 
                    alt="Data Insights" 
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-center text-black "
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Data Insights
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-center max-w-xs mx-auto"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Leverage analytics to uncover opportunities, optimize operations, and accelerate decisions.
                </p>
                <button className="bg-[#3594DF] text-white px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View more
                </button>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white flex flex-col items-center justify-center gap-4 rounded-2xl p-6hover:shadow-lg transition-shadow duration-300 group relative">
                <div className=" bg-[#cdc6ff] rounded-xl px-2 py-4">
                  <img 
                    src={secureinnovation} 
                    alt="Secure Innovation" 
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-center text-black "
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Secure Innovation
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-center max-w-xs mx-auto"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Build resilient systems with compliance, risk management, and proactive cybersecurity.
                </p>
                <button className="bg-[#3594DF] text-white px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View more
                </button>
              </div>

              {/* Service Card 5 */}
              <div className="bg-white flex flex-col items-center justify-center gap-4 rounded-2xl p-6hover:shadow-lg transition-shadow duration-300 group relative">
                <div className=" bg-[#cdc6ff] rounded-xl px-2 py-4">
                  <img 
                    src={experiencedesign} 
                    alt="Experience Design" 
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-center text-black "
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Experience Design
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-center max-w-xs mx-auto"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Create intuitive, human-centered digital products that engage users and drive measurable impact.
                </p>
                <button className="bg-[#3594DF] text-white px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View more
                </button>
              </div>

              {/* Service Card 6 */}
              <div className="bg-white flex flex-col items-center justify-center gap-4 rounded-2xl p-6hover:shadow-lg transition-shadow duration-300 group relative">
                <div className=" bg-[#cdc6ff] rounded-xl px-2 py-4">
                  <img 
                    src={agiledelivery} 
                    alt="Agile Delivery" 
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-center text-black "
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Agile Delivery
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-center max-w-xs mx-auto"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Validate concepts quickly, reduce risks, and deliver solutions with agile-driven execution.
                </p>
                <button className="bg-[#3594DF] text-white px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View more
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-40 relative">
          {/* Background Image */}
          <div className="w-[80%] bg-[linear-gradient(to_top,_#f3f0fa_0%,_#f3f0fa_20%,_white_40%,_white_70%)] rounded-4xl h-[450px] mx-auto text-center px-4 overflow-hidden relative z-10">
            <div className="absolute -bottom-90 inset-0 z-0">
              <img
                src={vectorBg}
                alt="Background"
                className="w-full h-full object-cover"
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
              className="relative z-10 inline-block bg-[#3594DF] hover:bg-[#3594DF]/80 text-white font-semibold py-4 px-10 mt-10 rounded-3xl shadow-md hover:shadow-lg transition duration-300 text-2xl"
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

export default Blog 