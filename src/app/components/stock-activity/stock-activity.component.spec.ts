import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockActivityComponent } from './stock-activity.component';

describe('StockActivityComponent', () => {
  let component: StockActivityComponent;
  let fixture: ComponentFixture<StockActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
