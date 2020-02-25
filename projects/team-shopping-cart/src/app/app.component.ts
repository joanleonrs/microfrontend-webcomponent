import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmiterService } from './event.emmiter.service';

@Component({
  template: `<router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  @Input('state')
  set state(state: string) {
    this.eventEmiter.sendMessage(state);
  }

  @Output() message = new EventEmitter<any>();

  constructor (
    private router: Router,
    private eventEmiter: EventEmiterService) {}

  ngOnInit() {
    this.router.initialNavigation();
  }

}
