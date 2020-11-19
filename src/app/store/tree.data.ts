
export interface NodeData {
    id: string;
    name: string;
    highlighted: boolean;
    children: NodeData[];
}

export interface TreeNode {
    id: string;
    name: string;
    highlighted: boolean;
    expanded: boolean;
    parentId: string | null;
}

export interface TreeNodeViewModel { 
    id: string;
    name: string;
    expanded: boolean;
    highlighted: boolean;
    parentId: string | null;
    childrenIds: string[];
}

export const TOP_LEVEL_NODE_IDS = [ '1' ];

export const NODES_DATA: { [key: string]: TreeNode } = {
  "1": {
    id: "1",
    name: "Node 1",
    highlighted: false,
    expanded: true,
    parentId: null,
  },
  "1.1": {
    id: "1.1",
    name: "Node 1.1",
    highlighted: false,
    expanded: false,
    parentId: "1",
  },
  "1.1.1": {
    id: "1.1.1",
    name: "Node 1.1.1",
    highlighted: false,
    expanded: false,
    parentId: "1.1",
  },
  "1.2": {
    id: "1.2",
    name: "Node 1.2",
    highlighted: false,
    expanded: false,
    parentId: "1",
  },
  "1.2.1": {
    id: "1.2.1",
    name: "Node 1.2.1",
    highlighted: false,
    expanded: false,
    parentId: "1.2",
  },
  "1.2.2": {
    id: "1.2.1",
    name: "Node 1.2.1",
    highlighted: false,
    expanded: false,
    parentId: "1.2", 
  },
  "1.2.3": {
    id: "1.2.3",
    name: "Node 1.2.3",
    highlighted: false,
    expanded: false, 
    parentId: "1.2",
  },
  "1.2.4": {
    id: "1.2.4",
    name: "Node 1.2.4",
    highlighted: false,
    expanded: false,
    parentId: "1.2",
  },
  "1.2.4.1": {
    id: "1.2.4.1",
    name: "Node 1.2.4.1",
    highlighted: false,
    expanded: false,
    parentId: "1.2.4",
  },
};
