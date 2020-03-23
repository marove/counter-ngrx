import { createReducer, on } from '@ngrx/store';
import { decreaseAction, divideAction, increaseAction, multiplyAction, resetAction } from './counter.actions';

const initialState = 10;

const _counterReducer = createReducer(initialState,
  on(increaseAction, state => state + 1),
  on(decreaseAction, state => state - 1),
  on(multiplyAction, (state , {number}) => state * number),
  on(divideAction, (state, {number}) => state / number),
  on(resetAction, state => initialState)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
