import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeanComponent } from './gean.component';

describe('GeanComponent', () => {
  let component: GeanComponent;
  let fixture: ComponentFixture<GeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
