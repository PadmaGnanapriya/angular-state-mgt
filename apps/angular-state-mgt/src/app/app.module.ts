import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {NgxsModule} from "@ngxs/store";
import {AppState} from "./shared/state/app/app.state";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule, AppRoutingModule, HttpClientModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
    }), MatProgressSpinnerModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
