import Image from 'next/image';

const CardImage = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
  return (
      <div className={`card-image paper outline full-width box center-x center-y ${className}`}>
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