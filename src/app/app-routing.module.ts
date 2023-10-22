import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorAccessComponent } from './errors/errorAccess/errorAccess.component';
import { AppComponent } from './app.component';
import { ErrorNotFoundComponent } from './errors/errorNotFound/errorNotFound.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'recipeСatalog',
    component: MainPageComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'adminPage',
    component: AdminPageComponent,
  },
  {
    path: 'errorAccess',
    component: ErrorAccessComponent,
  },
  {
    path: '**',
    component: ErrorNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
