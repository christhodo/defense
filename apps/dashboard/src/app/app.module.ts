import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@defense-angular/core-data';
import { CoreStateModule } from '@defense-angular/core-state';
import { EnvironmentModule } from '@defense-angular/environment';
import { MaterialModule } from '@defense-angular/material';
import { UiLoginModule } from '@defense-angular/ui-login';
import { AppComponent } from './app.component';
import { DefenseDetailsComponent } from './defenses/defense-details/defense-details.component';
import { DefensesListComponent } from './defenses/defenses-list/defenses-list.component';
import { DefensesComponent } from './defenses/defenses.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DefensesComponent,
    DefensesListComponent,
    DefenseDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    EnvironmentModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    UiLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
