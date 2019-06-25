import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BragboardComponent } from './bragboard.component';

describe('BragboardComponent', () => {
  let component: BragboardComponent;
  let fixture: ComponentFixture<BragboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BragboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BragboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
