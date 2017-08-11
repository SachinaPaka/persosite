import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaponComponent } from './japon.component';

describe('JaponComponent', () => {
  let component: JaponComponent;
  let fixture: ComponentFixture<JaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
