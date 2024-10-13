import CardImage from '@/components/CardImage';
import CardPrice from '@/components/CardPrice';
import ColorSelecting from '@/components/ColorSelecting';
import Comments from '@/components/Comments';
import CountAnAddToChart from '@/components/CountAnAddToChart';
import ProductCard from '@/components/ProductCard';
import RatingStars from '@/components/RatingStars';
import SizeSelecting from '@/components/SizeSelecting';
import { getComments, getProducts, getSingleProduct } from '@/utils/getData';
import { Comment, Product } from '@/utils/types';

const page = async ({ params: { productId } }: { params: { productId: string } }) => {
  const product: Product = await getSingleProduct(productId);

  const comments: Comment[] = await getComments();

  const products: Product[] = await getProducts();

  return (
    <div className='product-details container'>
      <div className="box column">
        <div className="box full-width">
          <div className="box small-gap full-width" style={{ alignItems: "stretch" }}>
            <div className="box column small-gap">
              <CardImage src={product.image} alt={product.title} className='small-card' />
              <CardImage src={product.image} alt={product.title} className='small-card' />
              <CardImage src={product.image} alt={product.title} className='small-card' />
            </div>

            <div className="full-width">
              <CardImage src={product.image} alt={product.title} className='large-card' />
            </div>
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
          <CountAnAddToChart />
        </div>

        <div className="box column full-width">
          <Comments comments={comments} title='Rating And Reviews' />
        </div>

        <div className="box column product-list">
          <h2 className='full-width text-start flex-0'>you might also like</h2>

          <div className="cards-list box small-gap">
            {products.map((product: Product) => (
              <ProductCard key={product.id} productData={product} />
            ))}
          </div>

          <button className='rounded primary outline'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default page

