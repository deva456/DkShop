import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsclothsComponent } from './girlscloths.component';

describe('GirlsclothsComponent', () => {
  let component: GirlsclothsComponent;
  let fixture: ComponentFixture<GirlsclothsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlsclothsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsclothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
