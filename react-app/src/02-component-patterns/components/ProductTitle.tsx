import { useContext } from 'react';
import { ProductContext } from './';

import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>{title ?? product.title}</span>
  );
};
