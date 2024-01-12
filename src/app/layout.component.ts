import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="layout-container">
      <header>
        <layout-header />
      </header>

      <main>
        <router-outlet />
      </main>

      <footer>
        <layout-footer />
      </footer>
    </div>
  `,
})
export class LayoutComponent {}
