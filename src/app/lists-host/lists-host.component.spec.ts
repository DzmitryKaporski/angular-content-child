import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsHostComponent } from './lists-host.component';

describe('ListsHostComponent', () => {
  let component: ListsHostComponent;
  let fixture: ComponentFixture<ListsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
