import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  toolbarTitle: Observable<string>;
  private titleSubject: Subject<string>;

  constructor() {
        this.titleSubject = new Subject<string>();
        this.toolbarTitle = this.titleSubject.asObservable();
    }

  changeTitle(title){
  	this.titleSubject.next(title);
  }
}
