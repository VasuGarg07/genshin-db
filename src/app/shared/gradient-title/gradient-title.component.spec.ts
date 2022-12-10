import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientTitleComponent } from './gradient-title.component';

describe('GradientTitleComponent', () => {
  let component: GradientTitleComponent;
  let fixture: ComponentFixture<GradientTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
