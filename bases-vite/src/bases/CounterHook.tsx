import { FC } from 'react';
import { useCounter } from '../hooks/useCounter';

const MAXIMUM_COUNT = 5;

interface Props {
  initialValue?: number;
}

export const CounterHook: FC<Props> = ({ initialValue = 0 }) => {
  const { counter, counterElement, handleClick } = useCounter({
    initialValue,
    maximumCount: MAXIMUM_COUNT,
  });

  return (
    <>
      <h1>Counter Hook:</h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
