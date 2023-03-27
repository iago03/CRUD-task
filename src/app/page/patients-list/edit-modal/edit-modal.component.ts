import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpService } from 'src/app/service/http.service';
import { ModalService } from 'src/app/service/modal.service';
import { HttpResponse } from 'src/app/shared/interface/http-response-interface';
import { City, Gender } from 'src/app/shared/interface/title';
import { isValidDate } from 'src/app/shared/validators/date.validators';

@UntilDestroy()
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  patientsInfoForm!: FormGroup;
  message!: string;
  city = City;
  gender = Gender;
  @Input() item!: HttpResponse | undefined;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    public modalService: ModalService
  ) {}

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
    this.changePersonalNumber();
  }

  changePersonalNumber() {
    this.patientsInfoForm
      .get('personalNumber')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe(() => {
        if (this.message) {
          this.message = '';
        }
      });
  }

  closeModal() {
    this.modalService.modal.emit(false);
    this.patientsInfoForm.reset();
  }

  save() {
    if (this.patientsInfoForm.valid) {
      const id = this.item?.id ? this.item.id : null;
      this.httpService
        .addEditPatients(this.patientsInfoForm.value, id)
        .pipe(untilDestroyed(this))
        .subscribe({
          next: () => {
            this.httpService.getList$.next(true);
            this.modalService.modal.emit(false);
          },
          error: (error) => {
            this.message = error.error.error;
          },
        });
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
