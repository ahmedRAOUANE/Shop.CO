import { Product } from '@/utils/types';
import Link from 'next/link';
import CardImage from './CardImage';
import RatingStars from './RatingStars';

const ProductCard = ({ productData }: { productData: Product }) => {
    return (
        <Link href={`#`} className="card box column small-gap full-width small-gap">
            <CardImage src={productData.image} alt={productData.title} />

            <div className="card-body">
                <h3 className="card-title disable-guitters full-width" title={productData.title}>{productData.title}</h3>

                <div className="card-rate box small-gap jc-start">
                    <RatingStars rate={productData.rating.rate} />
                </div>

                <div className="card-price box small-gap jc-start">
                    {productData.discount ? (
                        <>
                            <strong>${productData.discount.newPrice}</strong>
                            <strong className='depricated'>${productData.discount.oldPrice}</strong>
                            <span className='small'>-{productData.discount.persontage}%</span>
                        </>
                    ) : (
                        <strong>${productData.price}</strong>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard

// add stars adn the discount