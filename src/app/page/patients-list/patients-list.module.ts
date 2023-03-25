import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { PatientsListRoutingModule } from './patients-list-routing.module';
import { PatientsListComponent } from './patients-list.component';

@NgModule({
  declarations: [PatientsListComponent],
  imports: [CommonModule, PatientsListRoutingModule, ButtonModule],
  exports: [PatientsListComponent],
})
export class PatientsListModule {}
