import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotContainerComponent } from './dot-container.component';

describe('DotContainerComponent', () => {
  let component: DotContainerComponent;
  let fixture: ComponentFixture<DotContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
