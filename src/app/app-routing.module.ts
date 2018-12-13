import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent} from './page/page.component';
import { LoginComponent} from './login/login.component';
import { RegistreComponent} from './registre/registre.component';
import { UserComponent} from './user/user.component';




const routes: Routes=[
  {
    path: 'mylife', component: PageComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: RegistreComponent,  },
  { path: 'user', component: UserComponent, }
];

@NgModule({
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule]

})
export class AppRoutingModule { }
export const routingComponent=[PageComponent]


