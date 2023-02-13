import { ProductCard } from '../components';
import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces';

import '../styles/custom-styles.css';

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
        <ProductCard className='bg-dark' product={product}>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-white text-center text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>
        <ProductCard className='bg-dark' product={product}>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white text-center text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
        <ProductCard product={product} style={{ backgroundColor: 'salmon' }}>
          <ProductImage style={{ borderRadius: '10px' }} />
          <ProductTitle style={{ fontWeight: 'bolder', color: 'white' }} />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
