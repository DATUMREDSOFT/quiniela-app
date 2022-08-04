import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinielasConfigComponent } from './quinielas-config.component';

describe('QuinielasConfigComponent', () => {
  let component: QuinielasConfigComponent;
  let fixture: ComponentFixture<QuinielasConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinielasConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuinielasConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
