import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodevChartComponent } from './codev-chart.component';

describe('CodevChartComponent', () => {
  let component: CodevChartComponent;
  let fixture: ComponentFixture<CodevChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodevChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodevChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
