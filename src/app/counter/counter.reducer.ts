import { createReducer, on } from '@ngrx/store';
import { decreaseAction, increaseAction } from './counter.actions';

const initialState = 10;

const _counterReducer = createReducer(initialState,
  on(increaseAction, state => state + 1),
  on(decreaseAction, state => state - 1)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
