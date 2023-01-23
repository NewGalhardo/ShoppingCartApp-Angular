import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightCalculatorComponent } from './freight-calculator.component';

describe('FreightCalculatorComponent', () => {
  let component: FreightCalculatorComponent;
  let fixture: ComponentFixture<FreightCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreightCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreightCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
