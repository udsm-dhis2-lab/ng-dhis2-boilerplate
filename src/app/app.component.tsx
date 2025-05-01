import { Component, inject, signal } from "@angular/core";
import { NgxDhis2HttpClientService, User } from "@iapps/ngx-dhis2-http-client";
import React, { useState } from "react";
import { Observable } from "rxjs";
import { Chip } from "@dhis2/ui";
import { D2Window } from "@iapps/d2-web-sdk";

@Component({
  selector: "app-root-content",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: false,
})
export class AppComponent {
  private httpClient = inject(NgxDhis2HttpClientService);
  me$: Observable<User> = this.httpClient.me();
  showComponent = signal(false);
  d2 = (window as unknown as D2Window)?.d2Web;
  me = this.d2?.currentUser;
}
