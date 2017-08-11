import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxComponent } from './reseaux.component';

describe('ReseauxComponent', () => {
  let component: ReseauxComponent;
  let fixture: ComponentFixture<ReseauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
