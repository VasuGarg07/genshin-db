import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindglidersComponent } from './windgliders.component';

describe('WindglidersComponent', () => {
  let component: WindglidersComponent;
  let fixture: ComponentFixture<WindglidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindglidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindglidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
