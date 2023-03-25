import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  try = 0;
  value!: string;
  @Input() label!: string;
  @Input() inputType!: string;
  @Input() inputId!: string;
  @Input() control!: AbstractControl | null;

  onChange!: (value: any) => void;
  onTouched!: () => void;

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onKey() {
    this.onChange(this.value);
    if (this.try > 0) {
      this.onTouched();
    }
  }

  focus() {
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
    this.try += 1;
  }
}
