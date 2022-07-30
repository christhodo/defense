import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DefensesEffects } from './defenses.effects';
import * as DefensesActions from './defenses.actions';

describe('DefensesEffects', () => {
  let actions: Observable<any>;
  let effects: DefensesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DefensesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(DefensesEffects);
  });

  describe('loadDefenses$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DefensesActions.loadDefenses() });

      const expected = hot('-a-|', {
        a: DefensesActions.loadDefensesSuccess({ defenses: [] }),
      });

      expect(effects.loadDefenses$).toBeObservable(expected);
    });
  });
});
