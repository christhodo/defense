import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Defense } from '@defense-angular/api-interfaces';

@Component({
  selector: 'defense-angular-defense-details',
  templateUrl: './defense-details.component.html',
  styleUrls: ['./defense-details.component.scss'],
})
export class DefenseDetailsComponent {
  currentDefense: Defense;
  originalTitle = '';
  @Input() set defense(value: Defense) {
    if (value) this.originalTitle = value.title;
    this.currentDefense = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
