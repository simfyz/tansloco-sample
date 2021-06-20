import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBCompComponent } from './feature-b-comp.component';

describe('FeatureBCompComponent', () => {
  let component: FeatureBCompComponent;
  let fixture: ComponentFixture<FeatureBCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
