import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-blog-details-2',
  standalone: true,
  imports: [],
  templateUrl: './blog-details-2.component.html',
  styleUrl: './blog-details-2.component.css'
})
export class BlogDetails2Component implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }

}
