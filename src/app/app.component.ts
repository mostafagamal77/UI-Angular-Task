import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLangService } from './services/change-lang.service';
// import { QrCodeErrorCorrectionLevel, RGBAColor } from "types"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UiTask';

  ar_font: string = '"Neo Sans Arabic", sans-serif';

  constructor(
    private translate: TranslateService,
    public _ChangeLangService: ChangeLangService
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    if (localStorage.getItem('lang')) {
      this.translate.use(localStorage.getItem('lang') || 'en');
      if (localStorage.getItem('lang') === 'ar') {
        this._ChangeLangService.isRtl.next(true);
      }
    }
  }

  // change language to arabic function
  arLang(language: string) {
    this._ChangeLangService.switchLang(language);
    this._ChangeLangService.isRtl.next(true);
  }
  // change language to english function
  enLang(language: string) {
    this._ChangeLangService.switchLang(language);
    this._ChangeLangService.isRtl.next(false);
  }
}
