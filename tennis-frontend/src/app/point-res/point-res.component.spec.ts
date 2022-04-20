import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointResComponent } from './point-res.component';

describe('PointResComponent', () => {
  let component: PointResComponent;
  let fixture: ComponentFixture<PointResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
