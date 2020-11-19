import { createAction, props } from "@ngrx/store";

export const loadInitialData = createAction(
  "[AppComponent] load initial data"
);

export const changeNodeName = createAction(
  "[SmartNodeComponent] change node name",
  props<{ nodeId: string; newName: string }>()
);

export const toggleExpanded = createAction(
  "[SmartNodeComponent] Toggle expanded",
  props<{ nodeId: string }>()
);
