import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'layout-header',
  template: `
    <mat-toolbar class="header-container">
      <div class="col">My Cart</div>
    </mat-toolbar>
  `,
  styles: [
    `
      .header-container {
        display: flex;
        justify-content: space-between;
      }
      .searchField {
        height: 30px;
        width: 280px;
        padding-left: 2px;
        text-align: center;
      }
      .searchField:focus {
        outline: none;
      }
    `,
  ],
})
export class HeaderComponent {
}
