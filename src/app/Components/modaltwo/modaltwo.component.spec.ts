import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltwoComponent } from './modaltwo.component';

describe('ModaltwoComponent', () => {
  let component: ModaltwoComponent;
  let fixture: ComponentFixture<ModaltwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaltwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
