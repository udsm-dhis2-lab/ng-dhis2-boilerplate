import { Component, inject, signal } from "@angular/core";
import { NgxDhis2HttpClientService, User } from "@iapps/ngx-dhis2-http-client";
import React, { useState } from "react";
import { Observable } from "rxjs";
import { Chip } from "@dhis2/ui";

@Component({
  selector: "app-root-content",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private httpClient = inject(NgxDhis2HttpClientService);
  me$: Observable<User> = this.httpClient.me();
  showComponent = signal(false);

  Chips = () => {
    const [disabled, setDisabled] = useState(false);
    return (
      <button
        disabled={disabled}
        onClick={() => {
          setDisabled(!disabled);
        }}
      >
        This is my button
      </button>
    );
  };
  selectedPeriods = [
    { id: "THIS_MONTH", name: "This month" },
    { id: "LAST_MONTH", name: "Last month" },
    { id: "LAST_3_MONTHS", name: "Last 3 months" },
  ];

  selectedOrgUnits = [];
  onSelectPeriods(periods: any) {
    console.log(periods);
  }

  onSelectOrgUnits(orgUnits: any) {
    this.selectedOrgUnits = orgUnits;

    console.log(this.selectedOrgUnits);
  }

  onToggleComponent() {
    this.showComponent.set(!this.showComponent());
  }
}
