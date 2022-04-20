import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResComponent } from './set-res.component';

describe('SetResComponent', () => {
  let component: SetResComponent;
  let fixture: ComponentFixture<SetResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
