import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="books">
      <div class="card">
        <div class="content">
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``],

})
export class CoreComponent {
}
