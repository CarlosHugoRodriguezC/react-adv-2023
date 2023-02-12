import { FC, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const MAXIMUM_COUNT = 5;

interface Props {
  initialValue?: number;
}

export const CounterEffect: FC<Props> = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
  };

  useLayoutEffect(() => {
    if (counter < MAXIMUM_COUNT) return;
    console.log('se llego al valor maximo');
    const timeline = gsap.timeline();

    timeline
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      })
      .to(counterElement.current, {
        y: 0,
        duration: 0.2,
        ease: 'bounce.out',
      });
  }, [counter]);

  return (
    <>
      <h1>Counter Effect:</h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
