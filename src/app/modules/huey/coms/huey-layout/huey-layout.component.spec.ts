import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HueyLayoutComponent } from './huey-layout.component';

describe('HueyLayoutComponent', () => {
  let component: HueyLayoutComponent;
  let fixture: ComponentFixture<HueyLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HueyLayoutComponent]
    });
    fixture = TestBed.createComponent(HueyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
