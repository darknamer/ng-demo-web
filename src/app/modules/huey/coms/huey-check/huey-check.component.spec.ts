import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HueyCheckComponent } from './huey-check.component';

describe('HueyCheckComponent', () => {
  let component: HueyCheckComponent;
  let fixture: ComponentFixture<HueyCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HueyCheckComponent]
    });
    fixture = TestBed.createComponent(HueyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
