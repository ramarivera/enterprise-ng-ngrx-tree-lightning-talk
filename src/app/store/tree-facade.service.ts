import { Action, select, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TreeNodeViewModel } from "./tree.data";
import {
  getTopLevelNodes,
  nodeByIdWithChildrenSelectorFactory,
} from "./tree.selectors";

@Injectable({ providedIn: "root" })
export class TreeFacadeService {
  private selectorsById: { [key: string]: Observable<TreeNodeViewModel> } = {};

  public readonly topLevelNodes$ = this.store$.select(getTopLevelNodes);

  constructor(private store$: Store) {}

  public getTreeNodeById$(nodeId: string): Observable<TreeNodeViewModel> {
    if (!this.selectorsById[nodeId]) {
        console.log(`Selector was built for ${nodeId}.`);
        this.selectorsById[nodeId] = this.buildNodeStream(nodeId);
    }

    return this.selectorsById[nodeId];
  }

  public dispatch(action: Action): void {
    this.store$.dispatch(action);
  }

  private buildNodeStream(nodeId: string): Observable<TreeNodeViewModel> {
    return this.store$.pipe(select(nodeByIdWithChildrenSelectorFactory(nodeId)));
  }
}
