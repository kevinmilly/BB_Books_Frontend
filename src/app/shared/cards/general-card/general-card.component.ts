import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-general-card',
  template: `
            <mat-card>
              <ng-content></ng-content>
            </mat-card> 
  `,
  styleUrls: ['./general-card.component.scss']
})
export class GeneralCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}