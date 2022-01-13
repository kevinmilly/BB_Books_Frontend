import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-modal-card',
  template: `
    <div class="card-container">
      <mat-card>
        <ng-content></ng-content>
      </mat-card> 
    </div>
    `,
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}