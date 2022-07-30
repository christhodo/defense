import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DEFENSES_FEATURE_KEY,
  DefensesState,
  defensesAdapter,
} from './defenses.reducer';
import { Defense } from '@defense-angular/api-interfaces';

// Lookup the 'Defenses' feature state managed by NgRx
export const getDefensesState = createFeatureSelector<DefensesState>(
  DEFENSES_FEATURE_KEY
);

const { selectAll, selectEntities } = defensesAdapter.getSelectors();

export const getDefensesLoaded = createSelector(
  getDefensesState,
  (state: DefensesState) => state.loaded
);

export const getDefensesError = createSelector(
  getDefensesState,
  (state: DefensesState) => state.error
);

export const getAllDefenses = createSelector(
  getDefensesState,
  (state: DefensesState) => selectAll(state)
);

export const getDefensesEntities = createSelector(
  getDefensesState,
  (state: DefensesState) => selectEntities(state)
);

export const getSelectedDefenseId = createSelector(
  getDefensesState,
  (state: DefensesState) => state.selectedId
);

const emptyDefense: Defense = {
  id: null,
  title: '',
  description: '',
};

export const getSelectedDefense = createSelector(
  getDefensesEntities,
  getSelectedDefenseId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyDefense;
  }
);
