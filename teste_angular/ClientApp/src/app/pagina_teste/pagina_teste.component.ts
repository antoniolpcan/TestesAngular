import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina_teste-component',
  templateUrl: './pagina_teste.component.html'
})
export class pagina_testeComponent {
  public currentCount = 0;

  public incrementpagina_teste() {
    this.currentCount++;
  }
}
