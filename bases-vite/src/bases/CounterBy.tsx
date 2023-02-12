import { FC, useState } from 'react';

interface CounterState {
  counter: number;
  clicks: number;
}

interface Props {
  initialValue?: number;
}

export const CounterBy: FC<Props> = ({ initialValue = 10 }) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const { counter, clicks } = counterState;

  const handleClick = (value: number) =>
    setCounterState((prev) => ({
      ...prev,
      counter: prev.counter + value,
      clicks: prev.clicks + 1,
    }));
  return (
    <>
      <h1>Counter by: {counter}</h1>
      <h2>Clicks: {clicks}</h2>

      <button onClick={() => handleClick(1)}>+1</button>
    </>
  );
};
