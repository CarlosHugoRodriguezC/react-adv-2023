import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces';

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange }: Props) => {
  const [counter, setCounter] = useState<number>(0);

  const increaseBy = (value: number) => {
    const newValue = Math.max(0, counter + value);
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  return {
    counter,
    increaseBy,
  };
};
