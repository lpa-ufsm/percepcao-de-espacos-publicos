import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientFormComponent } from './ambient-form.component';

describe('AmbientFormComponent', () => {
  let component: AmbientFormComponent;
  let fixture: ComponentFixture<AmbientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
