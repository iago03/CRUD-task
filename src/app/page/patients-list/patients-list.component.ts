import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from 'src/app/shared/interface/http-response-interface';
import { Title } from 'src/app/shared/interface/title';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  titleArray = Title;
  modalShow = false;
  itemArray$!: Observable<HttpResponse[]>;

  item!: HttpResponse | undefined;

  itemArrayObject = [
    {
      name: 'iago',
      lastName: 'kharatishvili',
      personalNumber: 60001150255,
      birthDate: '1995-03-15',
      gender: 'male',
      city: 'tbilisi',
      address: 'cincadze',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  updateOrAddPatients(item?: HttpResponse) {
    this.modalShow = true;
    this.item = item;
  }
}
