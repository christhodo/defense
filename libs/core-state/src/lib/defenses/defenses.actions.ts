import { createAction, props } from '@ngrx/store';
import { Defense } from '@defense-angular/api-interfaces';

export const resetSelectedDefense = createAction(
  '[Defenses] Reset Selected Defense'
);
export const resetDefenses = createAction('[Defenses] Reset Defenses');

// select Defense
export const selectDefense = createAction(
  '[Defenses] Select Defense',
  props<{ selectedId: string }>()
);
// load Defense
export const loadDefenses = createAction('[Defenses] Load Defenses');

export const loadDefensesSuccess = createAction(
  '[Defenses] Load Defenses Success',
  props<{ defenses: Defense[] }>()
);

export const loadDefensesFailure = createAction(
  '[Defenses] Load Defenses Failure',
  props<{ error: any }>()
);

// Load Defense
export const loadDefense = createAction(
  '[Defenses] Load Defense',
  props<{ defenseId: string }>()
);

export const loadDefenseSuccess = createAction(
  '[Defenses] Load Defense Success',
  props<{ defense: Defense }>()
);

export const loadDefenseFailure = createAction(
  '[Defenses] Load Defense Failure',
  props<{ error: any }>()
);

// Create Defense
export const createDefense = createAction(
  '[Defenses] Create Defense',
  props<{ defense: Defense }>()
);

export const createDefenseSuccess = createAction(
  '[Defenses] Create Defense Success',
  props<{ defense: Defense }>()
);

export const createDefenseFailure = createAction(
  '[Defenses] Create Defense Failure',
  props<{ error: any }>()
);

// Update Defense
export const updateDefense = createAction(
  '[Defenses] Update Defense',
  props<{ defense: Defense }>()
);

export const updateDefenseSuccess = createAction(
  '[Defenses] Update Defense Success',
  props<{ defense: Defense }>()
);

export const updateDefenseFailure = createAction(
  '[Defenses] Update Defense Failure',
  props<{ error: any }>()
);

// Delete Defense
export const deleteDefense = createAction(
  '[Defenses] Delete Defense',
  props<{ defense: Defense }>()
);

export const deleteDefenseCancelled = createAction(
  '[Defenses] Delete Defense Cancelled'
);

export const deleteDefenseSuccess = createAction(
  '[Defenses] Delete Defense Success',
  props<{ defense: Defense }>()
);

export const deleteDefenseFailure = createAction(
  '[Defenses] Delete Defense Failure',
  props<{ error: any }>()
);
