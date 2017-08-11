import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemessageComponent } from './gamemessage.component';

describe('GamemessageComponent', () => {
  let component: GamemessageComponent;
  let fixture: ComponentFixture<GamemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
