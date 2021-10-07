import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDroitComponent } from './admin-droit.component';

describe('AdminDroitComponent', () => {
  let component: AdminDroitComponent;
  let fixture: ComponentFixture<AdminDroitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDroitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
