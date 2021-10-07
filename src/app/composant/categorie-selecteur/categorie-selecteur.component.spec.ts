import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSelecteurComponent } from './categorie-selecteur.component';

describe('CategorieSelecteurComponent', () => {
  let component: CategorieSelecteurComponent;
  let fixture: ComponentFixture<CategorieSelecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieSelecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieSelecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
