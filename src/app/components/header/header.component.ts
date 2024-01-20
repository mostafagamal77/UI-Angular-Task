import { Component } from '@angular/core';
import { ChangeLangService } from 'src/app/services/change-lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public _ChangeLangService: ChangeLangService) {}
}
