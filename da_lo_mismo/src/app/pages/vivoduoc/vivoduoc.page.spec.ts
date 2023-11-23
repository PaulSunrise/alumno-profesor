import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VivoduocPage } from './vivoduoc.page';

describe('VivoduocPage', () => {
  let component: VivoduocPage;
  let fixture: ComponentFixture<VivoduocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VivoduocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
