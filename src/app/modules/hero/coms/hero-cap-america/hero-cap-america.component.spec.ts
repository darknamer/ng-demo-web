import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCapAmericaComponent } from './hero-cap-america.component';

describe('HeroCapAmericaComponent', () => {
  let component: HeroCapAmericaComponent;
  let fixture: ComponentFixture<HeroCapAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroCapAmericaComponent]
    });
    fixture = TestBed.createComponent(HeroCapAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
