import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopsIfsComponent } from './loops-ifs.component';

describe('LoopsIfsComponent', () => {
  let component: LoopsIfsComponent;
  let fixture: ComponentFixture<LoopsIfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopsIfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopsIfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
