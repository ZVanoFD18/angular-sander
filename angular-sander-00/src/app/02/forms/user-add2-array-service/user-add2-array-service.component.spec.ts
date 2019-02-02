import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdd2ArrayServiceComponent } from './user-add2-array-service.component';

describe('UserAdd2ArrayServiceComponent', () => {
  let component: UserAdd2ArrayServiceComponent;
  let fixture: ComponentFixture<UserAdd2ArrayServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdd2ArrayServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdd2ArrayServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
