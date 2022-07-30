import { DefensesEntity } from './defenses.models';
import { State, defensesAdapter, initialState } from './defenses.reducer';
import * as DefensesSelectors from './defenses.selectors';

describe('Defenses Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDefensesId = (it) => it['id'];
  const createDefensesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DefensesEntity);

  let state;

  beforeEach(() => {
    state = {
      defenses: defensesAdapter.setAll(
        [
          createDefensesEntity('PRODUCT-AAA'),
          createDefensesEntity('PRODUCT-BBB'),
          createDefensesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Defenses Selectors', () => {
    it('getAllDefenses() should return the list of Defenses', () => {
      const results = DefensesSelectors.getAllDefenses(state);
      const selId = getDefensesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DefensesSelectors.getSelected(state);
      const selId = getDefensesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getDefensesLoaded() should return the current 'loaded' status", () => {
      const result = DefensesSelectors.getDefensesLoaded(state);

      expect(result).toBe(true);
    });

    it("getDefensesError() should return the current 'error' state", () => {
      const result = DefensesSelectors.getDefensesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
