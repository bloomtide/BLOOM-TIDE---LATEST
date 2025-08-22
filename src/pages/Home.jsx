import React from "react";
import { Helmet } from "react-helmet-async";

import image1 from "../assets/images/Herocarousal/image1.png";
import image2 from "../assets/images/Herocarousal/image2.png";
import image3 from "../assets/images/Herocarousal/image3.png";
import image4 from "../assets/images/Herocarousal/image4.png";
import company1 from "../assets/images/companytrustedus/company1.png";
import company2 from "../assets/images/companytrustedus/company2.png";
import company3 from "../assets/images/companytrustedus/company3.png";
import company4 from "../assets/images/companytrustedus/company4.png";
import company5 from "../assets/images/companytrustedus/company5.png";
import benefit1 from "../assets/images/benefit/benefitimg1.png";
import benefit2 from "../assets/images/benefit/benefitimg2.png";
import benefit3 from "../assets/images/benefit/benefitimg3.png";
import victoriaParrish from "../assets/images/Victoria parrish.png";
import howItWorkBg from "../assets/images/howitworrkbg.png";
import growthGirlImg from "../assets/images/growthgirlimg.png";
import languageDial from "../assets/images/languagedial.png";
import webDev from "../assets/images/superservices/webdev.png";
import mobDev from "../assets/images/superservices/mobdev.png";
import softwareSol from "../assets/images/superservices/softwaresoltion.png";
import branding from "../assets/images/superservices/branding.png";
import ecommerce from "../assets/images/superservices/ecommerce.png";
import seo from "../assets/images/superservices/seo.png";
import partnership from "../assets/icons/reasontowork/partnership.png";
import track from "../assets/icons/reasontowork/track.png";
import agile from "../assets/icons/reasontowork/agile.png";
import support from "../assets/icons/reasontowork/support.png";
import quality from "../assets/icons/reasontowork/quality.png";
import results from "../assets/icons/reasontowork/results.png";
import chartIcon from "../assets/icons/reasontowork/chart.png";
import trustedby1 from "../assets/images/trustedby/trustedby1.png";
import trustedby2 from "../assets/images/trustedby/trustedby2.png";
import trustedby3 from "../assets/images/trustedby/trustedby3.png";
// Testimonial images
import vishakanth from "../assets/images/testimonial/vishakanth.png";
import priya from "../assets/images/testimonial/priya.png";
import elizabeth from "../assets/images/testimonial/elizabeth.png";
import nikita from "../assets/images/testimonial/nikita.png";
import rishi from "../assets/images/testimonial/rishi.png";
import saurabh from "../assets/images/testimonial/saurabh.png";
import ananya from "../assets/images/testimonial/ananya.png";
import pooja from "../assets/images/testimonial/pooja.png";
import arjun from "../assets/images/testimonial/arjun.png";
import vectorBg from "../assets/images/testimonial/Vector.png";
import Group429 from "../assets/images/cta/semicricle.png";

// Testimonials data array
const testimonialsData = [
  {
    quote:
      "The product's flexibility and customization options are outstanding. It adapts perfectly to our unique needs.",
    image: vishakanth,
    name: "Vishakanth G.",
    title: "Co-founder",
    company: "Generix",
  },
  {
    quote:
      "Bloomtide delivered our project ahead of schedule, exceeding our expectations for quality and service.",
    image: priya,
    name: "Priya S",
    title: "Head of",
    company: "Nova Solutions",
  },
  {
    quote:
      "We saw a 40% reduction in project delivery time after partnering with Bloomtide. Their expertise is unmatched.",
    image: elizabeth,
    name: "Elizabeth T.",
    title: "Product Manager",
    company: "Tinyone",
  },
  {
    quote:
      "Professional, creative, and efficient—Bloomtide nailed our brand identity beyond expectations.",
    image: nikita,
    name: "Nikita Jain",
    title: "Creative Director",
    company: "Nova Studio",
  },
  {
    quote:
      "Bloomtide built our e-commerce platform—smooth UX, secure backend, and fantastic support!",
    image: rishi,
    name: "Rishi Talwar",
    title: "Founder",
    company: "UrbanSpree",
  },
  {
    quote:
      "Our website traffic tripled after Bloomtide's SEO and performance overhaul. Truly impressive!",
    image: saurabh,
    name: "Saurabh Mehta T",
    title: "Marketing Head",
    company: "GreenBasket",
  },
  {
    quote:
      "Bloomtide elevated our mobile app experience—flawless execution and timely delivery!",
    image: ananya,
    name: "Ananya Rao",
    title: "Product Manager",
    company: "FitNest Tech",
  },
  {
    quote:
      "Seamless collaboration and stunning results—Bloomtide's web app team is a powerhouse.",
    image: pooja,
    name: "Pooja Desai",
    title: "CTO",
    company: "MedEase Solutions",
  },
  {
    quote:
      "From strategy to code, Bloomtide delivered a powerful custom software solution tailored to us.",
    image: arjun,
    name: "Arjun Kapoor",
    title: "CEO",
    company: "FinVault India",
  },
];

const Home = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          Bloomtide Consulting - Transforming Organizations with Tailored IT
          Solutions
        </title>
        <meta
          name="description"
          content="Bloomtide Consulting delivers innovative, high-quality digital solutions with speed, precision, and expert support to drive business growth."
        />
        <meta
          name="keywords"
          content="IT solutions, digital transformation, technology consulting, business growth, bloomtide"
        />
        <meta
          property="og:title"
          content="Bloomtide Consulting - Transforming Organizations with Tailored IT Solutions"
        />
        <meta
          property="og:description"
          content="Delivering innovative, high-quality digital solutions with speed, precision, and expert support to drive business growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloomtide.com" />
        <link rel="canonical" href="https://bloomtide.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="py-0 -translate-y-20  min-h-screen">
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
        {/* Trusted by Section */}
        <section className=" py-16 relative">
          <div className="w-[63%]  overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-md text-gray-600 mb-4">
                Top companies trust us with their solutions
              </h2>
            </div>
            <div className="w-[73%] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center space-x-12">
                <img
                  src={company1}
                  alt="Company 1"
                  className="h-12  transition-opacity"
                />
                <img
                  src={company2}
                  alt="Company 2"
                  className="h-12 transition-opacity"
                />
                <img
                  src={company3}
                  alt="Company 3"
                  className="h-12 transition-opacity"
                />
                <img
                  src={company4}
                  alt="Company 4"
                  className="h-12 transition-opacity"
                />
                <img
                  src={company5}
                  alt="Company 5"
                  className="h-12 transition-opacity"
                />
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

        {/* Testimonial and How It Works Section */}
        <section className="bg-white w-[80%] mx-auto py-20 relative">
          {/* Background image for entire section */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <img
              src={howItWorkBg}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-6xl  px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Testimonial */}
              <div className="relative ml-10">
                <div className="relative ">
                  {/* Rating stars */}
                  <div className="flex mb-6">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl font-bold text-black mb-6 leading-tight">
                    "The product's flexibility and customization options are
                    outstanding. It adapts perfectly to our unique needs."
                  </blockquote>

                  {/* Attribution */}
                  <p className="text-gray-600 mb-6">
                    Victoria Parrish • Co-founder, Generix
                  </p>

                  {/* Profile Picture */}
                  <img
                    src={victoriaParrish}
                    alt="Victoria Parrish"
                    className="w-40 h-40 rounded-xl object-cover"
                  />
                </div>
              </div>

              {/* Right Column - How It Works */}
              <div className="relative ">
                <div className=" p-8">
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-4">
                    HOW IT WORKS
                  </h3>
                  <h2 className="text-5xl  text-black mb-12">
                    <div>Get your problems</div>
                    <div>solved in 3 steps</div>
                  </h2>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex items-start">
                      <div className="relative flex-shrink-0">
                        <div className="w-5 h-5 bg-purple-300 rounded-full"></div>
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-28 bg-purple-300"></div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-bold text-black mb-2">
                          Discovering a problem
                        </h4>
                        <p className="text-gray-600 text-base">
                          Tell us exactly what you need. Our team gets to work
                          right away.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start">
                      <div className="relative flex-shrink-0">
                        <div className="w-5 h-5 bg-purple-300 rounded-full"></div>
                        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-0.5 h-28 bg-purple-300"></div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-bold text-black mb-2">
                          Finding a solution
                        </h4>
                        <p className="text-gray-600 text-base">
                          Share your requirements with us. We'll start working
                          on it immediately.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start">
                      <div className="relative flex-shrink-0">
                        <div className="w-5 h-5 bg-purple-300 rounded-full"></div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-bold text-black mb-2">
                          100% satisfaction
                        </h4>
                        <p className="text-gray-600 text-base">
                          Let us know your specific needs. Our team will dive in
                          and get started.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 mx-50 h-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* First Column: Two divs stacked */}
              <div className="space-y-6 relative overflow-hidden h-full flex flex-col">
                {/* Top div - 30% height */}
                <div className="pt-33 rounded-2xl overflow-hidden shadow-lg flex-[3]">
                  <div className="absolute top-0 z-10">
                    <img
                      src={languageDial}
                      alt="Language Dial"
                      className="w-[50%] h-[50%] mx-auto object-contain animate-spin"
                      style={{ animationDuration: "20s" }}
                    />
                  </div>
                  <div className="relative bg-white z-20 p-4 h-full rounded-2xl">
                    <h3 className="textmd font-semibold text-gray-800 text-left">
                      Connect with 200+ apps instantly
                    </h3>
                    <p
                      className="text-md text-gray-600 font-light text-left mt-2"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Seamless integration. Simplified, automated productivity.
                    </p>
                  </div>
                </div>

                {/* Bottom div - 70% height */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex-[7]">
                  <div className="p-4 h-full">
                    <div className="mb-4 w-56">
                      <div className="w-[80%] mx-auto">
                        <svg viewBox="0 0 200 110" className="w-70 h-30">
                          <path
                            d="M10 100 A90 90 0 0 1 190 100"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="16"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10 100 A90 90 0 0 1 190 100"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="16"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="40 60"
                          />
                          <text
                            x="100"
                            y="68"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-gray-500 text-[20px]"
                          >
                            Active users
                          </text>
                          <text
                            x="100"
                            y="88"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-gray-800 font-semibold text-[20px]"
                          >
                            40%
                          </text>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-md  font-bold text-gray-800 mb-2 text-center">
                      40% Active User Engagement
                    </h3>
                    <p className="text-md w-full text-gray-600 text-center">
                      Intuitive tools, ongoing support, unmatched use
                      engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Column: One large image div */}
              <div className="bg-white rounded-2xl h-full overflow-hidden shadow-lg relative flex flex-col">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-radial from-blue-300/70 to-transparent rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute blur-2xl -top-20 -right-20 z-10 rounded-full w-40 h-40 bg-blue-600/50"></div>
                <div className="absolute blur-2xl -bottom-20 -left-10 z-10 rounded-full w-40 h-40 bg-blue-600/50"></div>

                <img
                  src={growthGirlImg}
                  alt="Growth Girl"
                  className="w-full h-full object-cover scale-205 -translate-y-[75px] -translate-x-[10px]"
                />
                <div className="absolute z-20 bottom-10 w-[80%] mx-auto left-0 right-0 rounded-2xl bg-white/30 backdrop-blur-sm p-6">
                  <h3 className="text-md text-center font-semibold text-gray-800 mb-2">
                    Start Making Growth
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    Managing your daily activities has never been easier with
                    these powerful.
                  </p>
                </div>
              </div>

              <div className="space-y-3 h-full flex flex-col">
                {/* Top div - 30% */}
                <div className="bg-white rounded-2xl border-t-1 border-l-1 border-gray-100 flex-[4]">
                  <div className=" relative h-full">
                    <div className="absolute pl-2 translate-y-3">
                      <h3 className="text-[12px] font-semibold text-gray-800">
                        Visual presentation
                      </h3>
                      <p className="text-[11px] text-gray-600">
                        Real-time insights, intuitive visual
                      </p>
                      <p className="text-[11px] text-gray-600">dashboards.</p>
                    </div>
                    <div className="pt-6 h-full">
                      <img
                        src={chartIcon}
                        alt="Chart visualization"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom div - 70% */}
                <div className=" rounded-2xl border-t-1 border-l-1 border-gray-100 flex-[6] gap-2 ">
                  <div className="flex flex-col   h-full">
                    <div className="p-6 h-full bg-white gap-5 flex flex-col">
                      <p className="text-xs text-gray-500 text-center mb-1">
                        Trusted by
                      </p>
                      <p className="text-md text-[#3594DF] text-center mb-2">
                        2000+ Professionals
                      </p>

                      <style>
                        {`
          @keyframes trioSwap {
            0%, 10%   { transform: translateX(0) scale(1.1); z-index: 30; }
            33%, 43%  { transform: translateX(47px) scale(0.85); z-index: 10; }
            66%, 76%  { transform: translateX(-47px) scale(0.85); z-index: 10;}
            100%      { transform: translateX(0) scale(1.1); z-index: 30; }
          }
        `}
                      </style>

                      <div className="relative h-20 w-56 mx-auto overflow-visible">
                        <img
                          src={trustedby1}
                          alt="A"
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-16 h-16 rounded-full object-cover shadow
                    animate-[trioSwap_6s_linear_infinite]"
                          style={{ animationDelay: "0s" }}
                        />
                        <img
                          src={trustedby2}
                          alt="B"
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-16 h-16 rounded-full object-cover shadow
                    animate-[trioSwap_6s_linear_infinite]"
                          style={{ animationDelay: "-2s" }}
                        />
                        <img
                          src={trustedby3}
                          alt="C"
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-16 h-16 rounded-full object-cover shadow
                    animate-[trioSwap_6s_linear_infinite]"
                          style={{ animationDelay: "-4s" }}
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-2 text-left">
                          Scale with Confidence
                        </h3>
                        <p className="text-xs text-gray-600 text-left">
                          Join professionals scaling confidently with
                          Bloomtide's solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    style={{ fontFamily: "Manrope, sansrope, sans-serif" }}
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

        {/* Testimonials Section */}
        <section className=" py-20 relative">
          {/* Background Image */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-md font-semibold text-[#3594DF] uppercase tracking-wide">
                  LOVED BY PEOPLE
                </h3>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Don't take our word for it.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your success is our purpose, every milestone you achieve with us
                is a win we cherish deeply.
              </p>
            </div>

            {/* Three Column Infinite Scroll */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden">
              <div className="pointer-events-none absolute top-54 left-0 w-full h-80 bg-gradient-to-b from-gray-100 blur-sm to-transparent z-10"></div>
              <div className="pointer-events-none absolute -bottom-4 left-0 w-full h-80 bg-gradient-to-t from-gray-100 blur-sm to-transparent z-10"></div>

              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={vectorBg}
                  alt="Background Pattern"
                  className="w-full h-full object-cover "
                />
              </div>
              {/* First Column */}
              <div className="overflow-hidden h-[828px]">
                {" "}
                {/* 3 cards visible */}
                <div className="space-y-6 animate-vertical-scroll">
                  {[
                    ...testimonialsData.slice(0, 3),
                    ...testimonialsData.slice(0, 3),
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="bg-white  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[200px] overflow-hidden"
                    >
                      <div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          "{t.quote}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-base font-bold text-black">
                            {t.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t.title}, {t.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Column */}
              <div className="overflow-hidden h-[828px]">
                <div className="space-y-6 animate-vertical-scroll-reverse">
                  {[
                    ...testimonialsData.slice(3, 6),
                    ...testimonialsData.slice(3, 6),
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[200px] overflow-hidden"
                    >
                      <div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          "{t.quote}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-base font-bold text-black">
                            {t.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t.title}, {t.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Third Column */}
              <div className="overflow-hidden h-[828px]">
                <div className="space-y-6 animate-vertical-scroll">
                  {[
                    ...testimonialsData.slice(6, 9),
                    ...testimonialsData.slice(6, 9),
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[200px] overflow-hidden"
                    >
                      <div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          "{t.quote}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-base font-bold text-black">
                            {t.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t.title}, {t.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <style jsx>{`
              /* 3 cards * 260px + 2 gaps * 24px (space-y-6) = 828px */
              @keyframes verticalScroll {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-50%);
                } /* move by one column height */
              }
              @keyframes verticalScrollReverse {
                0% {
                  transform: translateY(-50%);
                }
                100% {
                  transform: translateY(0);
                }
              }
              .animate-vertical-scroll {
                animation: verticalScroll 25s linear infinite;
              }
              .animate-vertical-scroll-reverse {
                animation: verticalScrollReverse 25s linear infinite;
              }
            `}</style>
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

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        html {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </>
  );
};

export default Home;
