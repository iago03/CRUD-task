import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatientsListRoutingModule } from './patients-list-routing.module';
import { PatientsListComponent } from './patients-list.component';

@NgModule({
  declarations: [PatientsListComponent],
  imports: [CommonModule, PatientsListRoutingModule],
  exports: [PatientsListComponent],
})
export class PatientsListModule {}
