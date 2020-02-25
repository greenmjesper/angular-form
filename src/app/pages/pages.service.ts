import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PagesService {
  private progressValue = new BehaviorSubject({ value: 0 });
  progressSubject = this.progressValue.asObservable();

  constructor() {}

  setProgressValue(data: any) {
    this.progressValue.next(data);
  }
}
