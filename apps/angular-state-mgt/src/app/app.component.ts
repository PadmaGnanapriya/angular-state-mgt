import { Component } from '@angular/core';
import {Select} from "@ngxs/store";
import {AppState} from "./shared/state/app/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'angular-state-mgt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-state-mgt';
  @Select(AppState.loading) loading$?: Observable<boolean>;
}
