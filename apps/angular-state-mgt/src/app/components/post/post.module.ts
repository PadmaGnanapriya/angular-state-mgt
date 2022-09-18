import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  exports: [
    PostComponent
  ]
})
export class PostModule {}
