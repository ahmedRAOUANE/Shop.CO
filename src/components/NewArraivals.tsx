import ProductCard from './ProductCard';
import { Product } from '@/utils/types';
import { getProducts } from '@/utils/getData';

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
                <button className='rounded primary outline'>View More</button>
            </div>
        </section>
    )
}

export default NewArraivals

