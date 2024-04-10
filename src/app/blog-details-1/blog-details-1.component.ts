import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog-details-1',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './blog-details-1.component.html',
  styleUrl: './blog-details-1.component.css'
})
export class BlogDetails1Component {

}
