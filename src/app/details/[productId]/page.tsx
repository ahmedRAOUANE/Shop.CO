import CardPrice from '@/components/CardPrice';
import Comments from '@/components/Comments';
import ProductCard from '@/components/ProductCard';
import ProductImages from '@/components/ProductImages';
import ProductOptions from '@/components/ProductOptions';
import RatingStars from '@/components/RatingStars';
import { getComments, getProducts, getSingleProduct } from '@/utils/getData';
import { Comment, Product } from '@/utils/types';

const page = async ({ params: { productId } }: { params: { productId: string } }) => {
  const product: Product = await getSingleProduct(productId);

  const comments: Comment[] = await getComments();

  const products: Product[] = await getProducts(4);

  return (
    <main className='product-details container'>
      <div className="box column">
        <div className="box full-width ai-start">
          <div className="box small-gap full-width" style={{ alignItems: "stretch" }}>
            <ProductImages product={product} />
          </div>

          <div className="box column full-width">
            <div className="box column small-gap ai-start">
              <h2 className="disable-guitters full-width flex-0">{product.title}</h2>
              <RatingStars rate={product.rating.rate} />
              <CardPrice data={product} />
              <p className="escription">{product.description}</p>
            </div>
          </div>
        </div>

        <ProductOptions />

        <div className="box column full-width">
          <Comments comments={comments} title='Rating And Reviews' />
        </div>

        <div className="box column product-list">
          <h2 className='full-width text-start flex-0'>you might also like</h2>

          <div className="cards-list box small-gap">
            {products.map((product: Product) => (
              <ProductCard key={product.id} productData={product} className='column' />
            ))}
          </div>

          <button className='rounded primary outline'>View More</button>
        </div>
      </div>
    </main>
  )
}

export default page

