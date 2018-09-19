import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { CVTemplatesModule } from './cvtemplates/cvtemplates.module';

// import { RoutesModule } from './views/routes.module';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DropdownComponent } from './views/elements/dropdown/dropdown.component';
import { CreateCVComponent } from './views/cvmanagement/createcv.component';
import { ViewCVComponent } from './views/cvmanagement/viewcv.component';
import { CallbackComponent } from './views/linkedin/callback.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DropdownComponent,
    CreateCVComponent,
    ViewCVComponent,
    CallbackComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    CoreModule,
    LayoutModule,
    CVTemplatesModule,
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
