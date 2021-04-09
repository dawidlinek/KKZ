import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowyComponentComponent } from './nowy-component.component';

describe('NowyComponentComponent', () => {
  let component: NowyComponentComponent;
  let fixture: ComponentFixture<NowyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
