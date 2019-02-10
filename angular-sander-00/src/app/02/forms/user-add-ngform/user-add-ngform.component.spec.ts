import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddNgForm } from './user-add-ngform.component';

describe('UserAddNgForm', () => {
  let component: UserAddNgForm;
  let fixture: ComponentFixture<UserAddNgForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddNgForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddNgForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
