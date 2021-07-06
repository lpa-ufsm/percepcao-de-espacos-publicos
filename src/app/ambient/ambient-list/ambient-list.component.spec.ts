import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientListComponent } from './ambient-list.component';

describe('AmbientListComponent', () => {
  let component: AmbientListComponent;
  let fixture: ComponentFixture<AmbientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
