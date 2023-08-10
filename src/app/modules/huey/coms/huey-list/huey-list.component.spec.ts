import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HueyListComponent } from './huey-list.component';

describe('HueyListComponent', () => {
  let component: HueyListComponent;
  let fixture: ComponentFixture<HueyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HueyListComponent]
    });
    fixture = TestBed.createComponent(HueyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
