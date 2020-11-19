import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadInitialData } from "./store/tree.actions";
import { TreeFacadeService } from "./store/tree-facade.service";
import {Observable} from "rxjs";
import { TreeNode } from "./store/tree.data";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewChecked  {

  public rootNodes$ : Observable<TreeNode[]>;

  constructor(private treeFacadeService: TreeFacadeService) {
      this.rootNodes$ = this.treeFacadeService.topLevelNodes$;
  }
  
  ngOnInit() {
    this.treeFacadeService.dispatch(loadInitialData());
  }

  ngAfterViewChecked() { 
  }
}
