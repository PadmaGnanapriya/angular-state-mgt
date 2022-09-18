import {Component, Input } from '@angular/core';

@Component({
  selector: 'angular-state-mgt-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
@Input() title?: string;
@Input() id?:number;
}
