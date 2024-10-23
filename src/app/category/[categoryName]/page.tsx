import PriceRange from '@/components/PriceRange';
import ProductCard from '@/components/ProductCard';
import SizeSelecting from '@/components/SizeSelecting';
import { getProducts } from '@/utils/getData';
import { Product } from '@/utils/types';
import { GiSettingsKnobs } from 'react-icons/gi';
import { RiArrowRightSLine } from 'react-icons/ri';

const productTypes = [
    {
        name: "T-sirts"
    },
    {
        name: "Shorts"
    },
    {
        name: "Hoodie"
    },
    {
        name: "Jeens"
    },
]

const page = async ({ params: { categoryName } }: { params: { categoryName: string } }) => {
    const products: Product[] = await getProducts(12);

    return (
        <main className='container category'>
            <div className="box ai-start">
                <div className="box column small-gap paper outline filter-container">
                    <div className="box full-width flex-0">
                        <h3 className='disable-guitters'>filters</h3>

                        <button className="icon">
                            <GiSettingsKnobs />
                        </button>
                    </div>

                    <hr className='full-width' />

                    <ul className="types full-width">
                        {productTypes.map((type, idx) => (
                            <li className="box btn primary" key={idx} style={{ padding: "5px 10px" }}>
                                <span>{type.name}</span>
                                <span className='box'><RiArrowRightSLine /></span>
                            </li>
                        ))}
                    </ul>

                    <hr className='full-width' />
                    <PriceRange />

                    <hr className='full-width' />
                    <SizeSelecting />
                </div>

                <div className="box column full-width cards-container">
                    <div className="box full-width cards-container-header">
                        <h1>{categoryName}</h1>

                        <div className="transparent small box">
                            <span>showing 1-10 products of 100</span>

                            <div className='box small-gap'>
                                <label htmlFor="sort">Sorted By: </label>

                                <select name="sort" id="sort">
                                    <option value="most popular">Most Popular</option>
                                    <option value="top selling">Top Selling</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="box full-width cards-container-body">
                        {products.map(product => (
                            <ProductCard key={product.id} productData={product} className='column' />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page