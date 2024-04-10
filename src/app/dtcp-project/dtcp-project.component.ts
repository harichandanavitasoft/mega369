import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dtcp-project',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './dtcp-project.component.html',
  styleUrl: './dtcp-project.component.css'
})
export class DTCPProjectComponent {

}
