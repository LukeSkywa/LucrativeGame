import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaAvatarProfiloComponent } from './modifica-avatar-profilo.component';

describe('ModificaAvatarProfiloComponent', () => {
  let component: ModificaAvatarProfiloComponent;
  let fixture: ComponentFixture<ModificaAvatarProfiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaAvatarProfiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaAvatarProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
