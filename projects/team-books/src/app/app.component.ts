import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from './service/event.emmiter.service';

@Component({
  template: `<router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  title = 'team-books';

  @Input('state')
  set state(state: string) {
    console.log("Book received new state: ", state)
  }

  @Output() message = new EventEmitter<any>();

  constructor (
    private router: Router,
    private eventEmitter: EventEmitterService) {}

  ngOnInit() {

    /* Este bloque será llamado una vez que se seleccione un Libro para ser agregado al cart */
    this.eventEmitter.data.subscribe(data => {

      const dto = {
        imageUrl:data.image,
        title:data.title,
        price:data.price
      };
      this.message.emit(dto);

    })

    this.router.initialNavigation();
    this.router.navigate(['/books/book']);

  }
}
