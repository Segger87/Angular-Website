import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesHomeComponent } from './hobbies-home.component';

describe('HobbiesHomeComponent', () => {
  let component: HobbiesHomeComponent;
  let fixture: ComponentFixture<HobbiesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
