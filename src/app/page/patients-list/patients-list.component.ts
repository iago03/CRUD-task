import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';
import { ModalService } from 'src/app/service/modal.service';
import { HttpResponse } from 'src/app/shared/interface/http-response-interface';
import { Title } from 'src/app/shared/interface/title';

@UntilDestroy()
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

  constructor(
    private httpService: HttpService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.itemArray$ = this.httpService.getPatientsList();
  }

  updateOrAddPatients(item?: HttpResponse) {
    this.modalService.modal.next(true);
    this.item = item;
  }

  deletePatients(id: number | undefined) {
    this.httpService
      .deletePatients(id)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.httpService.getList$.next(true));
  }
}
