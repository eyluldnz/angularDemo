import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeInfoComponent } from './bridge-info.component';

describe('BridgeInfoComponent', () => {
  let component: BridgeInfoComponent;
  let fixture: ComponentFixture<BridgeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
