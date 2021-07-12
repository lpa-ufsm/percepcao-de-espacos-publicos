import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSheetComponent } from './form-sheet.component';

describe('FormSheetComponent', () => {
  let component: FormSheetComponent;
  let fixture: ComponentFixture<FormSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
