import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIronManComponent } from './hero-iron-man.component';

describe('HeroIronManComponent', () => {
  let component: HeroIronManComponent;
  let fixture: ComponentFixture<HeroIronManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroIronManComponent]
    });
    fixture = TestBed.createComponent(HeroIronManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
