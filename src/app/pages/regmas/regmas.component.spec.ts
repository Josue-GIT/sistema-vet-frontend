import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegmasComponent } from './regmas.component';

describe('RegmasComponent', () => {
  let component: RegmasComponent;
  let fixture: ComponentFixture<RegmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegmasComponent]
    });
    fixture = TestBed.createComponent(RegmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
