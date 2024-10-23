"use client";

import CardImage from './CardImage'
import { Product } from '@/utils/types'

const ProductImages = ({ product }: { product: Product }) => {
    // this logic is commented because the api doesn't provide more than one img for the product
    // we use the same img from fakestore api as placeholder

    // const availableImgs = product.images.length > 0 ? product.images : product.image; 
    
    //! don't forgot to import the useState
    // const [selectedImage, setSelectedImage] = useState(availableImgs[0]); // this can be changed based on how the api provide the product img

    // const handleChangeImage = (imageUrl: string) => {
    //     setSelectedImage(imageUrl);
    // }

    return (
        <>
            <div className="small-imgs box column small-gap">
                {/* should loop on the availableImages */}
                {Array.from({ length: 3 }, (_item, idx) => (
                    <button className="icon" key={idx}>
                        <CardImage src={product.image} alt={product.title} className='small-card' />
                    </button>
                ))}
            </div>

            <div className="focused-img full-width">
                <CardImage src={product.image} alt={product.title} className='large-card' />
            </div>
        </>
    )
}

export default ProductImages