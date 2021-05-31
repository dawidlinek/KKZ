import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingComponent } from './unit-testing.component';

describe('UnitTestingComponent', () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('p exists', () => {
    expect(fixture.nativeElement.querySelector('p.class')).toBeTruthy();
  })
  it('div#raz > a exists', () => {
    expect(fixture.nativeElement.querySelector('div#raz a')).toBeTruthy();
  })
  it('textarea text is podaj dane', () => {
    expect(fixture.nativeElement.querySelector('textarea#content').innerHTML).toEqual('podaj dane');
  })
  it('button calls uwagaTestuje()', () => {
    spyOn(component, 'uwagaTestuje');
    // component.uwagaTestuje()
    fixture.nativeElement.querySelector('button').click();
    expect(component.uwagaTestuje).toHaveBeenCalled();
  })
  it('function dodaj works', () => {
    // spyOn(component, 'dodaj_liczby');
    component.a = 5
    component.b = 10
    fixture.detectChanges()
    let result=component.dodaj_liczby(component.a,component.b)
    expect(result).toEqual(15);
  })
  it('when checkbox checked show h1', () => {
    fixture.nativeElement.querySelector('input[type=checkbox]').click()
    fixture.detectChanges()
    expect(component.show_h1).toBeTrue();
    expect(fixture.nativeElement.querySelector('h1#head')).toBeTruthy();
  })

  it('random_10 should return array of 10 elements', () => {
    // spyOn(component, 'random_10');
    let result = component.random_10()
    expect(result.length).toEqual(10);
    result.forEach(elem => {
      expect(elem).toBeGreaterThanOrEqual(0);
      expect(elem).toBeLessThanOrEqual(10);
    })
  })

  it('copy text to p.upper', () => {
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p.upper').innerHTML).toEqual('PODAJ DANE');
  })
  it('span.error color should be #ee111', () => {
    //style color always returns in rgb
    expect(fixture.nativeElement.querySelector('span.error').style.color).toEqual('rgb(238, 17, 17)');
  })
  it('check if div displays correctly', () => {
    component.showDiv = false;
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('div#visible')).toBeFalsy();
    component.showDiv = true;
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('div#visible')).toBeTruthy();
  })
  it('list should be equal to array', () => {
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('ul').children.length).toEqual(component.li_array.length)
  })
  it('test dzielenie ', () => {
    expect(component.dzielenie(10, 5)).toEqual(2);
    expect(component.dzielenie(10, 0)).toBeFalsy();
  })
  it('test if background is white', () => {
    expect(fixture.nativeElement.querySelector('main').style.background).toEqual('white');
  })
  it('check if funkcja_liniowa is valid', () => {
    expect(component.funkcja_liniowa(10, 5, 20)).toEqual(70);
    expect(component.funkcja_liniowa(0, 5, 20)).toEqual(20);
    expect(component.funkcja_liniowa(1, 5, 20)).toEqual(25);
  })
  it('check if css is loaded', () => {
    expect(getComputedStyle(fixture.nativeElement.querySelector('h3')).margin).toEqual('10px');
  })
});
