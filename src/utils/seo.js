export const generateMetaTags = (title, description, keywords, url, image = null) => {
  const baseUrl = 'https://bloomtide.com'
  const fullUrl = `${baseUrl}${url}`
  
  return {
    title: `${title} - Bloomtide Consulting`,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: fullUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      ...(image && [
        { property: 'og:image', content: image },
        { name: 'twitter:image', content: image }
      ])
    ],
    link: [
      { rel: 'canonical', href: fullUrl }
    ]
  }
}

export const generateStructuredData = (type, data) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Bloomtide Consulting',
    url: 'https://bloomtide.com',
    logo: 'https://bloomtide.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9508386750',
      contactType: 'customer service',
      email: 'business@bloomtideconsulting.com'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sanik colony',
      addressLocality: 'Jammu',
      addressRegion: 'Jammu and Kashmir',
      addressCountry: 'IN'
    }
  }

  return {
    ...baseStructuredData,
    ...data
  }
} 