import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedesignComponent } from './gamedesign.component';

describe('GamedesignComponent', () => {
  let component: GamedesignComponent;
  let fixture: ComponentFixture<GamedesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamedesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
