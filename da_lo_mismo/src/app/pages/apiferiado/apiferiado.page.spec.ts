import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiferiadoPage } from './apiferiado.page';

describe('ApiferiadoPage', () => {
  let component: ApiferiadoPage;
  let fixture: ComponentFixture<ApiferiadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApiferiadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
