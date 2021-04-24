import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkoKrzyzykComponent } from './kolko-krzyzyk.component';

describe('KolkoKrzyzykComponent', () => {
  let component: KolkoKrzyzykComponent;
  let fixture: ComponentFixture<KolkoKrzyzykComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolkoKrzyzykComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KolkoKrzyzykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
