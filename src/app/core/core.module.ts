import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppShellModule } from '@iapps/ng-dhis2-shell';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
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
  declarations: [],
  providers: [],
  exports: [AppShellModule, NgxDhis2HttpClientModule],
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
