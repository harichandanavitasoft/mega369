import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTCPProjectComponent } from './dtcp-project.component';

describe('DTCPProjectComponent', () => {
  let component: DTCPProjectComponent;
  let fixture: ComponentFixture<DTCPProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTCPProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DTCPProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
