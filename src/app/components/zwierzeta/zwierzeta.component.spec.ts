import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwierzetaComponent } from './zwierzeta.component';

describe('ZwierzetaComponent', () => {
  let component: ZwierzetaComponent;
  let fixture: ComponentFixture<ZwierzetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZwierzetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwierzetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
