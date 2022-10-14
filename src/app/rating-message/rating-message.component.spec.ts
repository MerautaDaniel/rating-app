import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMessageComponent } from './rating-message.component';

describe('RatingMessageComponent', () => {
  let component: RatingMessageComponent;
  let fixture: ComponentFixture<RatingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
