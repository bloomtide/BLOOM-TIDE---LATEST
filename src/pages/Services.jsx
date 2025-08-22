import React from 'react'
import { Helmet } from 'react-helmet-async'
import image1 from '../assets/images/Herocarousal/image1.png'
import image2 from '../assets/images/Herocarousal/image2.png'
import image3 from '../assets/images/Herocarousal/image3.png'
import image4 from '../assets/images/Herocarousal/image4.png'
import webDev from "../assets/images/superservices/webdev.png";
import mobDev from "../assets/images/superservices/mobdev.png";
import softwareSol from "../assets/images/superservices/softwaresoltion.png";
import branding from "../assets/images/superservices/branding.png";
import ecommerce from "../assets/images/superservices/ecommerce.png";
import seo from "../assets/images/superservices/seo.png";
import vectorBg from "../assets/images/testimonial/Vector.png";
import Group429 from "../assets/images/cta/semicricle.png";

const Services = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Bloomtide Consulting</title>
        <meta name="description" content="Comprehensive business consulting services including strategy consulting, process optimization, and change management solutions." />
        <meta name="keywords" content="business consulting services, strategy consulting, process optimization, change management" />
        <meta property="og:title" content="Our Services - Bloomtide Consulting" />
        <meta property="og:description" content="Comprehensive business consulting services to help your organization grow and succeed." />
        <link rel="canonical" href="https://bloomtide.com/services" />
      </Helmet>

      <div className="py-0 -translate-y-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-white pt-50 relative overflow-hidden">
          {/* Background shapes */}
          <div className="absolute -translate-y- inset-0 ">
            <svg
              width="1530"
              height="649"
              viewBox="0 0 1530 649"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_110_1943)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M867.998 -499.659C1111.21 -535.406 1372.21 -474.229 1518.31 -371.018C1649.18 -278.57 1574 -141.684 1549.42 -18.2751C1530.15 78.4481 1516.25 179.446 1393.85 253.844C1275.1 326.021 1098.47 342.624 930.783 357.738C755.499 373.537 581.271 382.255 429.433 340.769C231.796 286.77 -16.4511 223.66 -23.784 96.9253C-31.109 -29.6731 245.005 -104.117 397.778 -206.319C554.254 -310.998 637.414 -465.767 867.998 -499.659Z"
                  fill="url(#paint0_linear_110_1943)"
                  fill-opacity="0.1"
                />
              </g>
              <path
                d="M342.785 524.853C324.134 458.183 349.197 420.888 417.972 412.971C486.747 405.053 511.81 367.759 493.159 301.089C474.509 234.418 499.571 197.124 568.347 189.206C637.122 181.289 662.184 143.995 643.534 77.3244C624.883 10.6543 649.946 -26.6397 718.721 -34.5576C787.497 -42.4755 812.559 -79.7696 793.909 -146.44C775.258 -213.11 800.32 -250.404 869.096 -258.322C937.871 -266.24 962.934 -303.534 944.283 -370.204C925.633 -436.874 950.695 -474.168 1019.47 -482.086C1088.25 -490.004 1113.31 -527.298 1094.66 -593.968"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="80"
                stroke-linecap="round"
              />
              <path
                d="M1131 377.419V353.948H1161.19L1186.96 357.982L1188.8 353.581L1167.82 338.178L1146.46 316.907L1163.03 300.403L1184.39 321.308L1199.85 342.579L1204.27 340.745L1200.22 314.706V285H1223.78V314.706L1219.73 340.745L1224.15 342.579L1239.61 321.308L1260.97 300.403L1277.54 316.907L1256.55 338.178L1235.2 353.581L1237.04 357.982L1262.81 353.948H1293V377.419H1262.81L1237.04 373.385L1235.2 377.786L1256.55 393.189L1277.54 414.46L1260.97 430.964L1239.61 409.692L1224.15 388.421L1219.73 390.255L1223.78 416.294V446H1200.22V416.294L1204.27 390.255L1199.85 388.421L1184.39 409.692L1163.03 430.964L1146.46 414.46L1167.82 393.189L1188.8 377.786L1186.96 373.385L1161.19 377.419H1131Z"
                fill="white"
                fill-opacity="0.6"
              />
              <defs>
                <filter
                  id="filter0_f_110_1943"
                  x="-301.927"
                  y="-787.921"
                  width="2173.18"
                  height="1436.77"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  <stop stop-color="#0834F7" />
                  <stop offset="1" stop-color="#01B1A2" />
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

        {/* Our Super Services Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h3
                className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                OUR SUPER SERVICES
              </h3>
              <h2
                className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                <div>If you can dream it,</div>
                <div>we can build it</div>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-4xl mx-auto"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Flexible digital solutions with monthly or yearly plans—no
                commitments, cancel anytime.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web App Development */}
              <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-2.5 group cursor-pointer">
                <div className="p-6">
                  <img
                    src={webDev}
                    alt="Web App Development"
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                  <h3
                    className="text-xl font-bold text-black mb-3 text-center"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    Web App Development
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed text-center mb-4"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Transform your business with scalable, secure web apps
                    featuring clean code, intuitive UX, and top performance.
                  </p>
                  <p
                    className="text-[#3594DF] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    View more
                  </p>
                </div>
              </div>

              {/* Mobile Development Solutions */}
              <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-2.5 group cursor-pointer">
                <div className="p-6">
                  <img
                    src={mobDev}
                    alt="Mobile Development Solutions"
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                  <h3
                    className="text-xl font-bold text-black mb-3 text-center"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    Mob Development Solutions
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed text-center mb-4"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    We build end-to-end mobile apps for iOS and Android that
                    boost engagement, retention, and growth.
                  </p>
                  <p
                    className="text-[#3594DF] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    View more
                  </p>
                </div>
              </div>

              {/* Software Solutions */}
              <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-2.5 group cursor-pointer">
                <div className="p-6">
                  <img
                    src={softwareSol}
                    alt="Software Solutions"
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                  <h3
                    className="text-xl font-bold text-black mb-3 text-center"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    Software Solutions
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed text-center mb-4"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Unlock efficiency with custom software solutions that solve
                    challenges and drive real business results.
                  </p>
                  <p
                    className="text-[#3594DF] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    View more
                  </p>
                </div>
              </div>

              {/* Branding & Identity */}
              <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-2.5 group cursor-pointer">
                <div className="p-6">
                  <img
                    src={branding}
                    alt="Branding & Identity"
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                  <h3
                    className="text-xl font-bold text-black mb-3 text-center"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    Branding & Identity
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed text-center mb-4"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    We craft cohesive brand identities with logos, design
                    systems, and guidelines for digital impact.
                  </p>
                  <p
                    className="text-[#3594DF] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    View more
                  </p>
                </div>
              </div>

              {/* E-Commerce Solutions */}
              <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-2.5 group cursor-pointer">
                <div className="p-6">
                  <img
                    src={ecommerce}
                    alt="E-Commerce Solutions"
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                  <h3
                    className="text-xl font-bold text-black mb-3 text-center"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    E-Commerce Solutions
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed text-center mb-4"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Scalable e-commerce platforms with seamless payments,
                    performance, and customer-focused experience.
                  </p>
                  <p
                    className="text-[#3594DF] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    View more
                  </p>
                </div>
              </div>

              {/* SEO & Performance Optimization */}
              <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-2.5 group cursor-pointer">
                <div className="p-6">
                  <img
                    src={seo}
                    alt="SEO & Performance Optimization"
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                  <h3
                    className="text-xl font-bold text-black mb-3 text-center"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    SEO & Perf. Optimization
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed text-center mb-4"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Boost traffic, conversions, and rankings with data-driven
                    SEO performance optimization.
                  </p>
                  <p
                    className="text-[#3594DF] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    View more
                  </p>
                </div>
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
                        className="w-6 h-6 text-black"
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

export default Services 