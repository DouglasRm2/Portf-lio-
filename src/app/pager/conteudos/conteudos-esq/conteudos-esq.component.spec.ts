import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudosEsqComponent } from './conteudos-esq.component';

describe('ConteudosEsqComponent', () => {
  let component: ConteudosEsqComponent;
  let fixture: ComponentFixture<ConteudosEsqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteudosEsqComponent]
    });
    fixture = TestBed.createComponent(ConteudosEsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
