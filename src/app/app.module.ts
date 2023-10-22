import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorAccessComponent } from './errors/errorAccess/errorAccess.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { ErrorNotFoundComponent } from './errors/errorNotFound/errorNotFound.component';
import { BackLinkComponent } from './commonComponents/backLink/backLink.component';
import { Location } from '@angular/common';
import { NavbarComponent } from './commonComponents/navbar/navbar.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { RoleService } from './services/role.service';
import { AccessRoleGuard } from './access-role.guard';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ResipeService } from './services/resipe.service';
import { NgxFlickingModule } from '@egjs/ngx-flicking';
import { SliderComponent } from './mainPage/slider/slider.component';

@NgModule({
  declarations: [  
    AppComponent,
    ErrorAccessComponent,
    ErrorNotFoundComponent,
    MainPageComponent,
    BackLinkComponent,
    NavbarComponent,
    AdminPageComponent,
    FooterComponent,
    AuthComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxFlickingModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [Location, RoleService, AccessRoleGuard, AuthService, ResipeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }