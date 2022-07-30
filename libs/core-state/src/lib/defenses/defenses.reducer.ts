import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Defense } from '@defense-angular/api-interfaces';
import * as DefensesActions from './defenses.actions';

export const DEFENSES_FEATURE_KEY = 'defenses';

export interface DefensesState extends EntityState<Defense> {
  selectedId?: string | number; // which Defenses record has been selected
  loaded: boolean; // has the Defenses list been loaded
  error?: string | null; // last known error (if any)
}

export interface DefensesPartialState {
  readonly [DEFENSES_FEATURE_KEY]: DefensesState;
}

export const defensesAdapter: EntityAdapter<Defense> = createEntityAdapter();

export const initialDefensesState: DefensesState = defensesAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _defensesReducer = createReducer(
  initialDefensesState,
  on(DefensesActions.selectDefense, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(DefensesActions.resetSelectedDefense, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(DefensesActions.resetDefenses, (state) =>
    defensesAdapter.removeAll(state)
  ),
  // Load defenses
  on(DefensesActions.loadDefenses, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DefensesActions.loadDefensesSuccess, (state, { defenses }) =>
    defensesAdapter.setAll(defenses, { ...state, loaded: true })
  ),
  on(DefensesActions.loadDefensesFailure, onFailure),
  // Load defense
  on(DefensesActions.loadDefense, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DefensesActions.loadDefenseSuccess, (state, { defense }) =>
    defensesAdapter.upsertOne(defense, { ...state, loaded: true })
  ),
  on(DefensesActions.loadDefenseFailure, onFailure),
  // Add defense
  on(DefensesActions.createDefenseSuccess, (state, { defense }) =>
    defensesAdapter.addOne(defense, state)
  ),
  on(DefensesActions.createDefenseFailure, onFailure),
  // Update defense
  on(DefensesActions.updateDefenseSuccess, (state, { defense }) =>
    defensesAdapter.updateOne({ id: defense.id, changes: defense }, state)
  ),
  on(DefensesActions.updateDefenseFailure, onFailure),
  // Delete defense
  on(DefensesActions.deleteDefenseSuccess, (state, { defense }) =>
    defensesAdapter.removeOne(defense.id, state)
  ),
  on(DefensesActions.deleteDefenseFailure, onFailure)
);

export function defensesReducer(
  state: DefensesState | undefined,
  action: Action
) {
  return _defensesReducer(state, action);
}
