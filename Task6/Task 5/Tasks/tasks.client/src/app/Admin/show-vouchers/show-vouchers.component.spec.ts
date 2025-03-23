import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVouchersComponent } from './show-vouchers.component';

describe('ShowVouchersComponent', () => {
  let component: ShowVouchersComponent;
  let fixture: ComponentFixture<ShowVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowVouchersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
