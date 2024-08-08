import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppShellModule } from '@iapps/ng-dhis2-shell';
import { environment } from '../environments/environment';
import { AppWrapperComponent } from './app-wrapper.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppShellModule.forRoot({
      pwaEnabled: false,
      isDevMode: !environment.production,
    }),

    NgxDhis2HttpClientModule.forRoot({
      namespace: 'ng-dhis2-boilerplate',
      version: 1,
      models: [],
    }),
  ],
  declarations: [AppComponent, AppWrapperComponent],
  bootstrap: [AppWrapperComponent],
})
export class AppModule {}
