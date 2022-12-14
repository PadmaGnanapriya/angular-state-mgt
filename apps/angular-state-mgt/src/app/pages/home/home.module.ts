import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {PostModule} from "../../components/post/post.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PostModule, MatToolbarModule, MatIconModule, MatButtonModule],})
export class HomeModule {}
