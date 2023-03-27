import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  value!: string;
  chosen = true;
  @Input() label!: string;
  @Input() name!: string;
  @Input() id!: string;
  @Input() array!: Array<any>;
  @Input() control!: AbstractControl | null;

  onChange!: (value: any) => void;
  onTouched!: () => void;

  constructor() {}

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
