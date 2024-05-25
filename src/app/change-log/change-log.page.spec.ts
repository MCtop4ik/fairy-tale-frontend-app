import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeLogPage } from './change-log.page';

describe('ChangeLogPage', () => {
  let component: ChangeLogPage;
  let fixture: ComponentFixture<ChangeLogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangeLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
