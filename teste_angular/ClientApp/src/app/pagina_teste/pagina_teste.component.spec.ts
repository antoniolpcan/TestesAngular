import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pagina_testeComponent } from './pagina_teste.component';

describe('pagina_testeComponent', () => {
  let fixture: ComponentFixture<pagina_testeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pagina_testeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pagina_testeComponent);
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('pagina_teste');
  }));

  it('should start with count 0, then increments by 1 when clicked', async(() => {
    const countElement = fixture.nativeElement.querySelector('strong');
    expect(countElement.textContent).toEqual('0');

    const incrementButton = fixture.nativeElement.querySelector('button');
    incrementButton.click();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('1');
  }));
});
