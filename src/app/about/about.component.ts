import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,AboutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  implements OnInit{
  happyclientscount:number=0;
  Experiencecount:number=0;
  SqFtcount:number=0;
  Awardscount :number=0;
  happyclientscountstop:any=setInterval(()=>{
    this.happyclientscount++;
    if(this.happyclientscount==100){
      clearInterval(this.happyclientscountstop);

    }
  },10)

  Experiencecountstop:any=setInterval(()=>{
    this.Experiencecount++;
    if(this.Experiencecount==2){
      clearInterval(this.Experiencecountstop);

    }
  },10)



  SqFtcountstop:any=setInterval(()=>{
    this.SqFtcount++;
    if(this.SqFtcount==7){
      clearInterval(this.SqFtcountstop);

    }
  },10)
  Awardscountstop:any=setInterval(()=>{
    this.Awardscount++;
    if(this.Awardscount ==3){
      clearInterval(this.Awardscountstop);

    }
  },10)


  ngOnInit(): void {
    
    AOS.init();
  }

 
}
