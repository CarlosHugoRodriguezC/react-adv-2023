import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces';

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: Props) => {
  const [counter, setCounter] = useState<number>(value);

  const isControlled = useRef(Boolean(onChange));

  const increaseBy = (value: number) => {
    if (isControlled.current) return onChange!({ count: value, product });
    const newValue = Math.max(0, counter + value);

    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
