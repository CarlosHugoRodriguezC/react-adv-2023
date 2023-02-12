import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './bases/counterReducer/CounterReducer';

const App = () => {
  return (
    <>
      <h1> Bases app </h1>
      <hr />
      <Counter />
      <CounterBy initialValue={20} />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
};

export default App;
