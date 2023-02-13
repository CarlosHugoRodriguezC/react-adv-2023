import { ProductCardHocProps } from '../interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHoc } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductContext } from './ProductCard';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHoc, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;