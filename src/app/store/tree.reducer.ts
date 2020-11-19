import { createReducer, on, Action } from "@ngrx/store";
import { TreeNode, NODES_DATA, TOP_LEVEL_NODE_IDS } from "./tree.data";
import * as treeActions from "./tree.actions";

export const TREE_FEATURE_KEY = "tree";

export interface TreePartialState {
  readonly [TREE_FEATURE_KEY]: TreeState;
}

export interface TreeState {
  nodes: { [key: string]: TreeNode };
  topLevelNodeIds: string[];
  childrenByParent: { [key: string]: string[] };
}

export const initialState: TreeState = {
  nodes: {},
  topLevelNodeIds: [],
  childrenByParent: {},
};

const treeReducer = createReducer(
  initialState,
  on(treeActions.loadInitialData, (state) => {
    return {
      ...state,
      nodes: { ...NODES_DATA },
      topLevelNodeIds: [...TOP_LEVEL_NODE_IDS],
      childrenByParent: {
        "1": ["1.1", "1.2"],
        "1.1": ["1.1.1"],
        "1.2": ["1.2.1", "1.2.2", "1.2.3", "1.2.4"],
        "1.2.4": ["1.2.4.1"]
      },
    };
  }),
  on(treeActions.changeNodeName, (state, { nodeId, newName }) => {
    const node = state.nodes[nodeId];
    return {
      ...state,
      nodes: {
        ...state.nodes,
        [nodeId]: {
          ...node,
          name: newName,
        },
      },
    };
  }),
  on(treeActions.toggleExpanded, (state, { nodeId }) => {
    const node = state.nodes[nodeId];
    return {
      ...state,
      nodes: {
        ...state.nodes,
        [nodeId]: {
          ...node,
          expanded: !node.expanded,
        },
      },
    };
  })
);

export function reducer(state: TreeState | undefined, action: Action) {
  return treeReducer(state, action);
}
