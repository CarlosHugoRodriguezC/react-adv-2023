import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks';
import { ProductContextProps, Product } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
    </Provider>
  );
};
