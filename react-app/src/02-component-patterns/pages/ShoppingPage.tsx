import { ProductCard } from '../components';
import { ProductButtons, ProductImage, ProductTitle } from '../components/';
import { Product } from '../interfaces';

const product: Product = {
  id: '1',
  title: 'Coffe Mug',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div
      style={{
        flex: 1,
      }}>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '15px',
        }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
