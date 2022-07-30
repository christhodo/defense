import { DefensesEntity } from './defenses.models';
import * as DefensesActions from './defenses.actions';
import { State, initialState, reducer } from './defenses.reducer';

describe('Defenses Reducer', () => {
  const createDefensesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DefensesEntity);

  beforeEach(() => {});

  describe('valid Defenses actions', () => {
    it('loadDefensesSuccess should return set the list of known Defenses', () => {
      const defenses = [
        createDefensesEntity('PRODUCT-AAA'),
        createDefensesEntity('PRODUCT-zzz'),
      ];
      const action = DefensesActions.loadDefensesSuccess({ defenses });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
