import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from 'libs/ui-login/src/lib/login/login/login.component';
import { DefensesComponent } from './defenses/defenses.component';
import { WildComponent } from 'libs/ui-login/src/lib/wild/wild/wild.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@defense-angular/core-data';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'defenses',
    canActivate: [AuthGuard],
    children: [{ path: '', component: DefensesComponent }],
  },
  { path: 'wild', component: WildComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
