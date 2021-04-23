import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WisielecComponent } from './wisielec.component';

describe('WisielecComponent', () => {
  let component: WisielecComponent;
  let fixture: ComponentFixture<WisielecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WisielecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WisielecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
