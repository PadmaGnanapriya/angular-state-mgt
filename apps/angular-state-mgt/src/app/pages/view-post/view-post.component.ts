import { Component } from '@angular/core';
import {AppState, Post} from "../../shared/state/app/app.state";
import {ActivatedRoute} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {FetchPostById} from "../../shared/state/app/app.actions";

@Component({
  selector: 'angular-state-mgt-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent {
  public isOpenDrawer = false;
  public id: string;
  @Select(AppState.selectedPost) post$?: Observable<Post>;
  @Select(AppState.loading) loading$?: Observable<boolean>;

  constructor(private route: ActivatedRoute, private  store: Store) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.store.dispatch(new FetchPostById( parseInt(this.id) || 1));
  }

  onClickToggle() {
    this.isOpenDrawer = !this.isOpenDrawer
  }
}
