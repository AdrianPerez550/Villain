import { Injectable } from '@angular/core';
import { Villain1 } from './villain1';

import { VILLAIN } from './mock-villain';

import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';


@Injectable({
  providedIn: 'root',
})
export class VillainService {

  getVillain(): Observable<Villain1[]> {
    const Villain = of(VILLAIN);
    this.messagesService.add('VillainService: fetched villain');
    return Villain;
  }
  constructor(private messagesService: MessageService) { }
}
