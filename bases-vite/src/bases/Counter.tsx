import { FC, useState } from 'react';

interface Props {
  initialValue?: number;
}

export const Counter: FC<Props> = ({ initialValue = 10 }) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handleClick = () => setCounter((prev) => prev + 1);
  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
