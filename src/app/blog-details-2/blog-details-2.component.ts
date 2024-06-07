import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import AOS from "aos";
@Component({
  selector: 'app-blog-details-2',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,BlogDetails2Component],
  templateUrl: './blog-details-2.component.html',
  styleUrl: './blog-details-2.component.css'
})
export class BlogDetails2Component implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }

}
