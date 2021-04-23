import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZgadnijLiczbeComponent } from './zgadnij-liczbe.component';

describe('ZgadnijLiczbeComponent', () => {
  let component: ZgadnijLiczbeComponent;
  let fixture: ComponentFixture<ZgadnijLiczbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZgadnijLiczbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZgadnijLiczbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
