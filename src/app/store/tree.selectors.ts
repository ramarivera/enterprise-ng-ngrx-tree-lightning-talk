import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TreeNode, TreeNodeViewModel } from "./tree.data";
import { TreePartialState, TreeState, TREE_FEATURE_KEY } from "./tree.reducer";

export type AllNodes = { [key: string]: TreeNode };

export const getTreeFeatureState = createFeatureSelector<
  TreePartialState,
  TreeState
>(TREE_FEATURE_KEY);

export const getTreeNodes = createSelector(
  getTreeFeatureState,
  (state: TreeState) => state.nodes
);

export const getTopLevelNodeIds = createSelector(
  getTreeFeatureState,
  (state: TreeState) => state.topLevelNodeIds
);

export const getTopLevelNodes = createSelector(
  getTreeNodes,
  getTopLevelNodeIds,
  (nodes, topLevelIds) => topLevelIds.map((id) => nodes[id])
);

const getChildrenByParent = createSelector(
  getTreeFeatureState,
  (state) => state.childrenByParent
);

export const nodeByIdSelectorFactory = (nodeId: string) => {
  return createSelector(getTreeNodes, (nodes: AllNodes) => {
    return nodes[nodeId];
  });
};

export const nodeByIdWithChildrenSelectorFactory = (nodeId: string) => {
  const getNodeById = nodeByIdSelectorFactory(nodeId);

  const selector = createSelector(
    getNodeById,
    getChildrenByParent,
    (
      nodeById: TreeNode,
      childrenIds: { [key: string]: string[] },
    ) => {
      console.log(`Node with Children ID emitted`, nodeId);
      return {
        ...nodeById,
        childrenIds: childrenIds[nodeId] || [],
      } as TreeNodeViewModel;
    }
  );

  return selector;
};




// export const childrenByParentIdSelectorFactory = () => {
//   return createSelector(
//     getTreeNodes,
//     getChildrenByParent,
//     (nodes: AllNodes, childrenByParent: { [key: string]: string[] }, props) => {
//       console.log(`childrenByParentIdSelectorFactory with ${props.nodeId}`);

//       if (childrenByParent[props.nodeId]) {
//         return childrenByParent[props.nodeId].map((nodeId) => nodes[nodeId]);
//       }

//       return [];
//     }
//   );
// };