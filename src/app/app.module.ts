import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";

import { reducer, TREE_FEATURE_KEY } from "./store/tree.reducer";
import { SmartTreeNodeComponent } from "./smart-tree-node/smart-tree-node.component";
import { TreeNodeComponent } from "./tree-node/tree-node.component";

@NgModule({
  declarations: [AppComponent, SmartTreeNodeComponent, TreeNodeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [TREE_FEATURE_KEY]: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
