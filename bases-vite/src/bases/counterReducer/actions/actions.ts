export enum ValidActions {
  increaseBy = '[Counter] Increase by',
  reset = '[Counter] Reset',
}

export type CounterAction =
  | {
      type: ValidActions.increaseBy;
      payload: { value: number };
    }
  | { type: ValidActions.reset };

export const DoReset = (): CounterAction => ({ type: ValidActions.reset });

export const DoIncreaseBy = (value: number): CounterAction => ({
  type: ValidActions.increaseBy,
  payload: { value },
});
