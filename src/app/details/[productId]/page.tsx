import CardPrice from '@/components/CardPrice';
import ColorSelecting from '@/components/ColorSelecting';
import Comments from '@/components/Comments';
import Counter from '@/components/Counter';
import ProductCard from '@/components/ProductCard';
import ProductImages from '@/components/ProductImages';
import RatingStars from '@/components/RatingStars';
import SizeSelecting from '@/components/SizeSelecting';
import { getComments, getProducts, getSingleProduct } from '@/utils/getData';
import { Comment, Product } from '@/utils/types';

const page = async ({ params: { productId } }: { params: { productId: string } }) => {
  const product: Product = await getSingleProduct(productId);

  const comments: Comment[] = await getComments();

  const products: Product[] = await getProducts();

  return (
    <main className='product-details container'>
      <div className="box column">
        <div className="box full-width">
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

        <div className="box full-width">
          <ColorSelecting />
          <SizeSelecting />

          <div className="count">
            <h3>Add To Chart</h3>

            <div className="box small-gap">
              <Counter />
              <button className='full-width rounded'>Add To Chart</button>
            </div>
          </div>
        </div>

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

