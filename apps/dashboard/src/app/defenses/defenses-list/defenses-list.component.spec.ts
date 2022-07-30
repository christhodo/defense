import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensesListComponent } from './defenses-list.component';

describe('DefensesListComponent', () => {
  let component: DefensesListComponent;
  let fixture: ComponentFixture<DefensesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefensesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
