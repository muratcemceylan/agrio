import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSupplyStartComponent } from './stock-supply-start.component';

describe('StockSupplyStartComponent', () => {
  let component: StockSupplyStartComponent;
  let fixture: ComponentFixture<StockSupplyStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSupplyStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSupplyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
