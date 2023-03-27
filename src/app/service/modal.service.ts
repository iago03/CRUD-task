import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modal: EventEmitter<boolean> = new EventEmitter();
}
