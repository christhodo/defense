import { Component, OnInit } from '@angular/core';
import { Defense } from '@defense-angular/api-interfaces';
import { Observable } from 'rxjs';
import { DefensesService } from '@defense-angular/core-data';

@Component({
  selector: 'defense-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  defenses$: Observable<Defense[]>;

  constructor(private defensesService: DefensesService) {}

  ngOnInit(): void {
    this.loadDefenses();
  }

  loadDefenses() {
    this.defenses$ = this.defensesService.all();
  }
}
