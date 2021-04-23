import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomocnikMatematycznyMainComponent } from './pomocnik-matematyczny-main.component';

describe('PomocnikMatematycznyMainComponent', () => {
  let component: PomocnikMatematycznyMainComponent;
  let fixture: ComponentFixture<PomocnikMatematycznyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomocnikMatematycznyMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomocnikMatematycznyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
