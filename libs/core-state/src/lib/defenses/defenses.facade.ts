import { Injectable } from '@angular/core';
import { Defense } from '@defense-angular/api-interfaces';
import { select, Store, Action, ActionsSubject } from '@ngrx/store';
import * as DefensesActions from './defenses.actions';
import * as DefensesSelectors from './defenses.selectors';
import { filter } from 'rxjs/operators';

@Injectable()
export class DefensesFacade {
  loaded$ = this.store.pipe(select(DefensesSelectors.getDefensesLoaded));
  allDefenses$ = this.store.pipe(select(DefensesSelectors.getAllDefenses));
  selectedDefense$ = this.store.pipe(
    select(DefensesSelectors.getSelectedDefense)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === DefensesActions.createDefense({} as any).type ||
        action.type === DefensesActions.updateDefense({} as any).type ||
        action.type === DefensesActions.deleteDefense({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) {}

  selectDefense(selectedId: string) {
    this.dispatch(DefensesActions.selectDefense({ selectedId }));
  }

  loadDefenses() {
    this.dispatch(DefensesActions.loadDefenses());
  }

  loadDefense(defenseId: string) {
    this.dispatch(DefensesActions.loadDefense({ defenseId }));
  }

  saveDefense(defense: Defense) {
    if (defense.id) {
      this.updateDefense(defense);
    } else {
      this.createDefense(defense);
    }
  }

  createDefense(defense: Defense) {
    this.dispatch(DefensesActions.createDefense({ defense }));
  }

  updateDefense(defense: Defense) {
    this.dispatch(DefensesActions.updateDefense({ defense }));
  }

  deleteDefense(defense: Defense) {
    this.dispatch(DefensesActions.deleteDefense({ defense }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
