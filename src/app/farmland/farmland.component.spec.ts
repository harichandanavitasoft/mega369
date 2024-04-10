import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmlandComponent } from './farmland.component';

describe('FarmlandComponent', () => {
  let component: FarmlandComponent;
  let fixture: ComponentFixture<FarmlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmlandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
