import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevouserPage } from './nuevouser.page';

describe('NuevouserPage', () => {
  let component: NuevouserPage;
  let fixture: ComponentFixture<NuevouserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevouserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
