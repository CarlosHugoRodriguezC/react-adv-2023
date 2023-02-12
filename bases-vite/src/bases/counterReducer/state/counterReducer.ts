import { CounterAction, ValidActions } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { changes, counter } = state;

  switch (action.type) {
    case ValidActions.increaseBy:
      return {
        ...state,
        previous: counter,
        counter: counter + action.payload.value,
        changes: changes + 1,
      };
    case ValidActions.reset:
      return { ...state, previous: 0, counter: 0, changes: 0 };
    default:
      return state;
  }
};
