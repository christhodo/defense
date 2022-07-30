import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from 'apps/dashboard/src/app/routing.module';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { WildComponent } from './wild/wild/wild.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@defense-angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ToolbarComponent, WildComponent, LoginComponent],
  exports: [ToolbarComponent, WildComponent, LoginComponent],
})
export class UiLoginModule {}
