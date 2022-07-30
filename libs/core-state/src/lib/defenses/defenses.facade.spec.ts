import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { DefensesEntity } from './defenses.models';
import { DefensesEffects } from './defenses.effects';
import { DefensesFacade } from './defenses.facade';

import * as DefensesSelectors from './defenses.selectors';
import * as DefensesActions from './defenses.actions';
import {
  DEFENSES_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './defenses.reducer';

interface TestSchema {
  defenses: State;
}

describe('DefensesFacade', () => {
  let facade: DefensesFacade;
  let store: Store<TestSchema>;
  const createDefensesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DefensesEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(DEFENSES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([DefensesEffects]),
        ],
        providers: [DefensesFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(DefensesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allDefenses$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(DefensesActions.loadDefenses());

        list = await readFirst(facade.allDefenses$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadDefensesSuccess` to manually update list
     */
    it('allDefenses$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allDefenses$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          DefensesActions.loadDefensesSuccess({
            defenses: [
              createDefensesEntity('AAA'),
              createDefensesEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allDefenses$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
