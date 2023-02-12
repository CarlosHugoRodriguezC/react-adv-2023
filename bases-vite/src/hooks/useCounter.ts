import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

interface Props {
  maximumCount: number;
  initialValue: number;
}

export const useCounter = ({ initialValue, maximumCount }: Props) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const counterElement = useRef<any>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maximumCount));
  };

  useLayoutEffect(() => {
    if (!tl.current) return;
    tl.current
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      })
      .to(counterElement.current, {
        y: 0,
        duration: 0.2,
        ease: 'bounce.out',
      })
      .pause();
  }, []);

  useLayoutEffect(() => {
    if (counter < maximumCount) return;
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    counterElement,
    handleClick,
  };
};
