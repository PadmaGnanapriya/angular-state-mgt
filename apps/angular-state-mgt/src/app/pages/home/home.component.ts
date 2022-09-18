import {Component} from '@angular/core';
import {FetchAllPosts} from "../../shared/state/app/app.actions";
import {Select, Store} from "@ngxs/store";
import {AppState, Post} from "../../shared/state/app/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'angular-state-mgt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Select(AppState.loading) loading$?: Observable<boolean>;
  @Select(AppState.posts) posts$?: Observable<Post[]>;
  public isOpenDrawer = false;

  constructor(private store: Store) {}

  onClickToggle() {
    this.isOpenDrawer = !this.isOpenDrawer
  }

  fetchData() {
    this.store.dispatch(new FetchAllPosts());
    console.log(this.posts$)
  }
}
