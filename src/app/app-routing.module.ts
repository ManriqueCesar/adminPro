import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopageComponent } from './nopage/nopage.component';

    //path: '/dashboard' pagesRouting
    //path: '/auth' AuthRouting
    
const routes: Routes = [

  { path: '', redirectTo:'/dashboard', pathMatch: 'full'}
  { path: '**', component: NopageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
