import { useState } from 'react';
import { Product } from '../interfaces';

export interface ProductInCart extends Product {
  count: number;
}
export interface Cart {
  [key: string]: ProductInCart;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<Cart>({});

  const onProductCountChange = ({
    product,
    count,
  }: {
    product: Product;
    count: number;
  }) => {
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = prev;

      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prev;
      //   return {
      //     ...rest,
      //   };
      // }
      // return {
      //   ...prev,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};
