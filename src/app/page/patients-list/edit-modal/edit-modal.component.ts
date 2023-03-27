import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpResponse } from 'src/app/shared/interface/http-response-interface';
import { City, Gender } from 'src/app/shared/interface/title';
import { isValidDate } from 'src/app/shared/validators/date.validators';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  patientsInfoForm!: FormGroup;
  message = false;
  city = City;
  gender = Gender;
  @Input() item!: HttpResponse | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.patientsInfoForm = this.fb.group({
      name: new FormControl(this.item?.name || '', Validators.required),
      lastName: new FormControl(this.item?.lastName || '', Validators.required),
      personalNumber: new FormControl(
        this.item?.personalNumber || null,
        Validators.required
      ),
      birthDate: new FormControl(this.item?.birthDate || '', [
        Validators.required,
        isValidDate,
      ]),
      gender: new FormControl(this.item?.gender || '', Validators.required),
      city: new FormControl(this.item?.city || '', Validators.required),
      address: new FormControl(this.item?.address || '', Validators.required),
    });
  }

  closeModal() {
    // this.modalService.modal.emit(false);
    // this.patientsInfoForm.reset();
  }

  save() {
    if (this.patientsInfoForm.valid) {
      console.log(this.patientsInfoForm.value);
    } else {
      this.markFormAsDirty(this.patientsInfoForm);
    }
  }

  markFormAsDirty(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      form.get(key)?.markAsDirty();
    });
  }
}
