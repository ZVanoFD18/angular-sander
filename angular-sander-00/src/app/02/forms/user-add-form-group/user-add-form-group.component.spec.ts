import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddFormGroupComponent } from './user-add-form-group.component';

describe('UserAddFormGroupComponent', () => {
  let component: UserAddFormGroupComponent;
  let fixture: ComponentFixture<UserAddFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
