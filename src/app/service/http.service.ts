import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '../shared/interface/http-response-interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  getList$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public modal: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) {}

  getPatientsList() {
    return this.getList$.pipe(
      switchMap(() => this.http.get<HttpResponse[]>(`${environment.api_url}`))
    );
  }

  addEditPatients(item: HttpResponse, id: number | null) {
    return id
      ? this.http.put<HttpResponse[]>(`${environment.api_url}/${id}`, item)
      : this.http.post<HttpResponse[]>(`${environment.api_url}`, item);
  }

  deletePatients(id: number | undefined) {
    return this.http.delete<HttpResponse[]>(`${environment.api_url}/${id}`);
  }
}
