import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunkofworkComponent } from './chunkofwork.component';

describe('ChunkofworkComponent', () => {
  let component: ChunkofworkComponent;
  let fixture: ComponentFixture<ChunkofworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunkofworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunkofworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
