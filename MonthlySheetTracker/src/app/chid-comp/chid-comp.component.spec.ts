import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidCompComponent } from './chid-comp.component';

describe('ChidCompComponent', () => {
  let component: ChidCompComponent;
  let fixture: ComponentFixture<ChidCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChidCompComponent]
    });
    fixture = TestBed.createComponent(ChidCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
