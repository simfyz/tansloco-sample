import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureACompComponent } from './feature-a-comp.component';

describe('FeatureACompComponent', () => {
  let component: FeatureACompComponent;
  let fixture: ComponentFixture<FeatureACompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureACompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureACompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
