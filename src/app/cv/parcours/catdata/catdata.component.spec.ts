import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdataComponent } from './catdata.component';

describe('CatdataComponent', () => {
  let component: CatdataComponent;
  let fixture: ComponentFixture<CatdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
