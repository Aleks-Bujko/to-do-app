import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  
  get theme(): any {
    return document.documentElement.getAttribute('theme');
  }

  set theme(name: any) {
    document.documentElement.setAttribute('theme', name);
  }
}
