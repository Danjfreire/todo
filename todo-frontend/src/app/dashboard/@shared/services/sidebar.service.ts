import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isCollapsed = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getSidebarStatus() {
    return this.isCollapsed.asObservable();
  }

  public toggleSidebar(isCollapsed : boolean) {
    this.isCollapsed.next(isCollapsed);
  }
}
