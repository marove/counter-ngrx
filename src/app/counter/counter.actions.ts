import { createAction, props } from '@ngrx/store';

export const increaseAction = createAction('[Counter] Increase');

export const decreaseAction = createAction('[Counter] Decrease');

export const multiplyAction = createAction(
  '[Counter] Multiply',
  props<{number: number}>()
);

export const divideAction = createAction(
  '[Counter] Divide',
  props<{number: number}>()
);

export const resetAction = createAction('[Counter] Reset');
