import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {path:'',component:HeaderComponent,children:[
        {path:'',component:HomeComponent},
         {path:'about',component:AboutComponent},
         {path:'blog',component:BlogComponent}
    ]}
];
