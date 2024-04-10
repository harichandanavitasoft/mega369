import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails1Component } from './blog-details-1.component';

describe('BlogDetails1Component', () => {
  let component: BlogDetails1Component;
  let fixture: ComponentFixture<BlogDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetails1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
