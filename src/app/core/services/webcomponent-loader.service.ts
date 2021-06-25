import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebcomponentLoaderService {
  loaded = false;

  load(): void {
    if (this.loaded) return;
    this.loaded = true;

    const script = document.createElement('script');
    script.src = 'assets/ext-comp.js';
    document.body.appendChild(script);
  }
}
