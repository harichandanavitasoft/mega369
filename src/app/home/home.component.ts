import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import AOS from "aos";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  AOS.init();
 
   
  }
  header_variable = true;
  @HostListener('document:scroll', [])
  scrollfunction() {
    // Check your scrolling logic here
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop>0) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }

}
