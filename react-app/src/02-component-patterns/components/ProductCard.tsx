import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product });
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
