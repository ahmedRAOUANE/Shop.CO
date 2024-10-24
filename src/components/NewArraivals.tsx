import { getProducts } from '@/utils/getData';
import ProductCard from './ProductCard';
import { Product } from '@/utils/types';
import Link from 'next/link';

const NewArraivals = async () => {
    const products: Product[] = await getProducts(4);

    return (
        <section className="container">
            <div className="box column product-list">
                <h2>NEW ARRIVALS</h2>
                <div className="cards-list box small-gap">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} productData={product} className='column' />
                    ))}
                </div>
                <Link href={'category/new-arrivals'} className='btn rounded primary outline'>View More</Link>
            </div>
        </section>
    )
}

export default NewArraivals

