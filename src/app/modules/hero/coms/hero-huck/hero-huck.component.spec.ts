import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHuckComponent } from './hero-huck.component';

describe('HeroHuckComponent', () => {
  let component: HeroHuckComponent;
  let fixture: ComponentFixture<HeroHuckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroHuckComponent]
    });
    fixture = TestBed.createComponent(HeroHuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
