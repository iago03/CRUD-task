import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select/select.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, SelectComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ButtonComponent, InputComponent, SelectComponent],
})
export class SharedModule {}
