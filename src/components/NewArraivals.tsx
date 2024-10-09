import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/utils/types';

const NewArraivals = async () => {
    // dummy data from fakestore API
    const res = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4");
    const products: Product[] = await res.json();

    return (
        <div className="container">
            <div className="box column product-list">
                <h2>NEW ARRIVALS</h2>
                <div className="cards-list box small-gap">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} productData={product} />
                    ))}
                </div>
                <button className='rounded primary outline'>View More</button>
            </div>
        </div>
    )
}

export default NewArraivals

