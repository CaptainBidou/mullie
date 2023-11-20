import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfLogComponentComponent } from './of-log-component.component';

describe('OfLogComponentComponent', () => {
  let component: OfLogComponentComponent;
  let fixture: ComponentFixture<OfLogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfLogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfLogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
