import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExistComponent } from './form-exist.component';

describe('FormExistComponent', () => {
  let component: FormExistComponent;
  let fixture: ComponentFixture<FormExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
