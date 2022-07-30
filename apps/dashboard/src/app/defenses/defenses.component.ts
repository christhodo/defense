import { Component, OnInit } from '@angular/core';
import { Defense } from '@defense-angular/api-interfaces';
import { DefensesFacade } from '@defense-angular/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'defense-angular-defenses',
  templateUrl: './defenses.component.html',
  styleUrls: ['./defenses.component.scss'],
})
export class DefensesComponent implements OnInit {
  allDefenses$: Observable<Defense[]> = this.defensesFacade.allDefenses$;
  selectedDefense$: Observable<Defense> = this.defensesFacade.selectedDefense$;

  constructor(private defensesFacade: DefensesFacade) {}

  ngOnInit(): void {
    this.reset();
    this.defensesFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadDefenses();
    this.selectDefense(null);
  }

  resetForm() {
    this.selectDefense(null);
  }

  selectDefense(defense: Defense) {
    this.defensesFacade.selectDefense(defense?.id);
  }

  loadDefenses() {
    this.defensesFacade.loadDefenses();
  }

  saveDefense(defense: Defense) {
    this.defensesFacade.saveDefense(defense);
  }

  deleteDefense(defense: Defense) {
    this.defensesFacade.deleteDefense(defense);
  }
}
