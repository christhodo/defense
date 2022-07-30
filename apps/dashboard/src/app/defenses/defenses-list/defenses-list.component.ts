import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Defense } from '@defense-angular/api-interfaces';

@Component({
  selector: 'defense-angular-defenses-list',
  templateUrl: './defenses-list.component.html',
  styleUrls: ['./defenses-list.component.scss'],
})
export class DefensesListComponent {
  @Input() defenses: Defense[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
