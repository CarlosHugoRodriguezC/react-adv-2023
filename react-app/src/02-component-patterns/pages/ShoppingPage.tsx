import { useState } from 'react';
import { ProductCard } from '../components';
import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { onChangeArgs, Product } from '../interfaces';

import '../styles/custom-styles.css';

const product1: Product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png',
};

const product2: Product = {
  id: '2',
  title: 'Coffe Mug - Meme',
  img: './coffee-mug.png',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}
interface Cart {
  [key: string]: ProductInCart;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<Cart>({});

  const onProductCountChange = ({
    product,
    count,
  }: {
    product: Product;
    count: number;
  }) => {
    console.log({ product, count });

    setShoppingCart((prev) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev;
        return {
          ...rest,
        };
      }
      return {
        ...prev,
        [product.id]: { ...product, count },
      };
    });
  };

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className='bg-dark'
            product={product}
            onChange={(evento) => onProductCountChange(evento)}>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white text-center text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            className='bg-dark'
            product={product}
            onChange={(evento) => onProductCountChange(evento)}
            style={{ width: '100px' }}>
            <ProductImage className='custom-image' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
