import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeLangService {
  isRtl = new BehaviorSubject(false);

  constructor(private translate: TranslateService) {}

  switchLang(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
  }
}
