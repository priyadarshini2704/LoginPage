import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsheetComponent } from './mainsheet.component';

describe('MainsheetComponent', () => {
  let component: MainsheetComponent;
  let fixture: ComponentFixture<MainsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
