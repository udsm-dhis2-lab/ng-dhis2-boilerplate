import { Component, inject } from '@angular/core';
import { NgxDhis2HttpClientService, User } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root-content',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private httpClient = inject(NgxDhis2HttpClientService);
  me$: Observable<User> = this.httpClient.me();
}
