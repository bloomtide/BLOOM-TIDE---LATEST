import React from 'react'
import { Helmet } from 'react-helmet-async'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Bloomtide Consulting</title>
        <meta name="description" content="Stay updated with the latest insights on IT solutions, digital transformation, and technology trends from Bloomtide Consulting." />
        <meta name="keywords" content="IT blog, technology insights, digital transformation blog, bloomtide consulting blog" />
        <meta property="og:title" content="Blog - Bloomtide Consulting" />
        <meta property="og:description" content="Latest insights on IT solutions and technology trends." />
        <link rel="canonical" href="https://bloomtide.com/blog" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on IT solutions, digital transformation, 
                and technology trends that drive business success.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600">
                Coming soon - We're preparing valuable content to help you navigate the digital landscape.
              </p>
            </div>
            
            {/* Placeholder for blog posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation Strategies</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to successfully implement digital transformation initiatives in your organization.
                </p>
                <span className="text-blue-600 font-medium">Coming Soon</span>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Trends 2024</h3>
                <p className="text-gray-600 mb-4">
                  Explore the latest technology trends that will shape business strategies this year.
                </p>
                <span className="text-blue-600 font-medium">Coming Soon</span>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">IT Infrastructure Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Best practices for optimizing your IT infrastructure for better performance and cost efficiency.
                </p>
                <span className="text-blue-600 font-medium">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Blog 