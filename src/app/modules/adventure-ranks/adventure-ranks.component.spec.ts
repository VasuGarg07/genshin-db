import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureRanksComponent } from './adventure-ranks.component';

describe('AdventureRanksComponent', () => {
  let component: AdventureRanksComponent;
  let fixture: ComponentFixture<AdventureRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureRanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
