import {Component, OnInit} from '@angular/core';
import {TRANSLOCO_SCOPE} from "@ngneat/transloco";

const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`../i18n/${lang}.json`);
  return acc;
}, {} as any);

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'shared',
        loader
      }
    }
  ]
})
export class SharedComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
