import Image from 'next/image'
import React from 'react'

const CardImage = ({src, alt}: {src: string, alt: string}) => {
  return (
      <div className="card-image paper outline full-width">
          <Image
              src={src}
              alt={alt}
              width={200} height={200}
              style={{ mixBlendMode: 'multiply', }}
          />
      </div>
  )
}

export default CardImage