import React from 'react'

const Logo = ({ svgContent, className = "h-8 w-auto", alt = "Bloomtide Consulting Logo" }) => {
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
      aria-label={alt}
    />
  )
}

export default Logo 