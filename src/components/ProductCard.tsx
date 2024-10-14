import { Product } from '@/utils/types';
import Link from 'next/link';
import CardImage from './CardImage';
import RatingStars from './RatingStars';
import CardPrice from './CardPrice';

const ProductCard = ({ productData, className }: { productData: Product, className?: string }) => {
    return (
        <Link href={`details/${productData.id}`} className={`card box small-gap full-width small-gap ${className}`}>
            <CardImage src={productData.image} alt={productData.title} />

            <div className="card-body">
                <h3 className="card-title disable-guitters full-width" title={productData.title}>{productData.title}</h3>

                <div className="card-rate box small-gap jc-start">
                    <RatingStars rate={productData.rating.rate} />
                </div>

                <CardPrice data={productData} />
            </div>
        </Link>
    )
}

export default ProductCard

