import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZawodyWedkarskieComponent } from './zawody-wedkarskie.component';

describe('ZawodyWedkarskieComponent', () => {
  let component: ZawodyWedkarskieComponent;
  let fixture: ComponentFixture<ZawodyWedkarskieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZawodyWedkarskieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZawodyWedkarskieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
