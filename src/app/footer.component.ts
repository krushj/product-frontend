import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-footer',
  template: `
    <div class="footer-container">
      <mat-toolbar class="row">
        <div class="col">Privacy Policy</div>
        <div class="col">© MyCart Ltd.</div>
      </mat-toolbar>
    </div>
  `,
  styles: [
    `
      .footer-container {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        .row {
          display: flex;
          justify-content: space-between;
          max-height: 35px;
          font-weight: 400;
          font-size: 1rem;
        }
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
