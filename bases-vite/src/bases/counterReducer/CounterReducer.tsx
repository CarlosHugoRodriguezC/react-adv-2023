import { FC, useReducer, useState } from 'react';
import { counterReducer } from './state/counterReducer';
import { CounterState } from './interfaces/interfaces';
import { DoIncreaseBy, DoReset } from './actions/actions';

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
};

interface Props {
  initialValue?: number;
}

export const CounterReducerComponent: FC<Props> = ({ initialValue = 10 }) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleIncrease = (value: number) => dispatch(DoIncreaseBy(value));

  const handleReset = () => dispatch(DoReset());

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleIncrease(1)}>+1</button>
      <button onClick={() => handleIncrease(2)}>+2</button>
      <button onClick={() => handleIncrease(4)}>+4</button>
      <button onClick={() => handleIncrease(8)}>+8</button>
    </>
  );
};
