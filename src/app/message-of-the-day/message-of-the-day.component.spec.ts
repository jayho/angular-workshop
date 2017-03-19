import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOfTheDayComponent } from './message-of-the-day.component';

describe('MessageOfTheDayComponent', () => {
  let component: MessageOfTheDayComponent;
  let fixture: ComponentFixture<MessageOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
