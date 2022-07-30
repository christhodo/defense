import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as fromDefenses from './defenses.reducer';
import * as DefensesActions from './defenses.actions';
import { Defense } from '@defense-angular/api-interfaces';
import { DefensesService } from '@defense-angular/core-data';

@Injectable()
export class DefensesEffects {
  loadDefenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DefensesActions.loadDefenses),
      fetch({
        run: (action) =>
          this.defensesService
            .all()
            .pipe(
              map((defenses: Defense[]) =>
                DefensesActions.loadDefensesSuccess({ defenses })
              )
            ),
        onError: (action, error) =>
          DefensesActions.loadDefensesFailure({ error }),
      })
    )
  );

  loadDefense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DefensesActions.loadDefense),
      fetch({
        run: (action) =>
          this.defensesService
            .find(action.defenseId)
            .pipe(
              map((defense: Defense) =>
                DefensesActions.loadDefenseSuccess({ defense })
              )
            ),
        onError: (action, error) =>
          DefensesActions.loadDefenseFailure({ error }),
      })
    )
  );

  createDefense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DefensesActions.createDefense),
      pessimisticUpdate({
        run: (action) =>
          this.defensesService
            .create(action.defense)
            .pipe(
              map((defense: Defense) =>
                DefensesActions.createDefenseSuccess({ defense })
              )
            ),
        onError: (action, error) =>
          DefensesActions.createDefenseFailure({ error }),
      })
    )
  );

  updateDefense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DefensesActions.updateDefense),
      pessimisticUpdate({
        run: (action) =>
          this.defensesService
            .update(action.defense)
            .pipe(
              map((defense: Defense) =>
                DefensesActions.updateDefenseSuccess({ defense })
              )
            ),
        onError: (action, error) =>
          DefensesActions.updateDefenseFailure({ error }),
      })
    )
  );

  deleteDefense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DefensesActions.deleteDefense),
      pessimisticUpdate({
        run: (action) =>
          this.defensesService
            .delete(action.defense)
            .pipe(
              map((defense: Defense) =>
                DefensesActions.deleteDefenseSuccess({ defense })
              )
            ),
        onError: (action, error) =>
          DefensesActions.deleteDefenseFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private defensesService: DefensesService
  ) {}
}
