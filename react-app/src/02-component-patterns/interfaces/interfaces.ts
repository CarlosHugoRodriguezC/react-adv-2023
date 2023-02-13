import { Product } from './product';
import { ProductCardProps } from '../components/ProductCard';
import { ProductButtonsProps } from '../components/ProductButtons';
import { ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHocProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
