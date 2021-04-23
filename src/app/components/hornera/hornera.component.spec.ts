import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorneraComponent } from './hornera.component';

describe('HorneraComponent', () => {
  let component: HorneraComponent;
  let fixture: ComponentFixture<HorneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
