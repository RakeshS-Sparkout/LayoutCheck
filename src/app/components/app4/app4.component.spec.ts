import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App4Component } from './app4.component';

describe('App4Component', () => {
  let component: App4Component;
  let fixture: ComponentFixture<App4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
