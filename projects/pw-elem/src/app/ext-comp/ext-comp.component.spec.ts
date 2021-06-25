import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtCompComponent } from './ext-comp.component';

describe('ExtCompComponent', () => {
  let component: ExtCompComponent;
  let fixture: ComponentFixture<ExtCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
