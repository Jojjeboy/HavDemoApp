import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  private isOpen = true;
  private sideMenuToggleChange: Subject<boolean> = new Subject<boolean>();

  toggleSideMenu = () => {
    this.isOpen = !this.isOpen;
    this.sideMenuToggleChange.next(this.isOpen);
  };

  sideMenuIsOpen = (): Observable<boolean> =>
    this.sideMenuToggleChange.asObservable().pipe(startWith(this.isOpen));
}
