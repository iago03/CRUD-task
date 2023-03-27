import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { PatientsListRoutingModule } from './patients-list-routing.module';
import { PatientsListComponent } from './patients-list.component';

@NgModule({
  declarations: [PatientsListComponent, EditModalComponent],
  imports: [
    CommonModule,
    PatientsListRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [PatientsListComponent],
})
export class PatientsListModule {}
