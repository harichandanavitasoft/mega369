import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { DTCPProjectComponent } from './dtcp-project/dtcp-project.component';
import { FarmlandComponent } from './farmland/farmland.component';
import { BlogDetails1Component } from './blog-details-1/blog-details-1.component';

export const routes: Routes = [
    {path:'',component:HeaderComponent,children:[
        {path:'',component:HomeComponent},
         {path:'about',component:AboutComponent},
         {path:'blog',component:BlogComponent},
            {path:'blog1',component:BlogDetails1Component},
        
         {path:'contact',component:ContactComponent},
         {path:'DTCP',component:DTCPProjectComponent},
         {path:'Farm',component:FarmlandComponent}
    ]}
];
