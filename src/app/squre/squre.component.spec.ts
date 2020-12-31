import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqureComponent } from './squre.component';

describe('SqureComponent', () => {
  let component: SqureComponent;
  let fixture: ComponentFixture<SqureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
