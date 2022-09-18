import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPostRoutingModule } from './view-post-routing.module';
import { ViewPostComponent } from './view-post.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [ViewPostComponent],
  imports: [CommonModule, ViewPostRoutingModule, MatIconModule, MatToolbarModule, MatProgressSpinnerModule, MatButtonModule],
})
export class ViewPostModule {}
