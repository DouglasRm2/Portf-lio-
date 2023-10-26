import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudosDirComponent } from './conteudos-dir.component';

describe('ConteudosDirComponent', () => {
  let component: ConteudosDirComponent;
  let fixture: ComponentFixture<ConteudosDirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteudosDirComponent]
    });
    fixture = TestBed.createComponent(ConteudosDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
