import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotatkiComponent } from './notatki.component';

describe('NotatkiComponent', () => {
  let component: NotatkiComponent;
  let fixture: ComponentFixture<NotatkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotatkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotatkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
