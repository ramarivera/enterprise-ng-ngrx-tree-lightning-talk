import {Component, Input, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { TreeNodeViewModel } from './../store/tree.data' 
import { Observable } from 'rxjs'; 
import { TreeFacadeService } from '../store/tree-facade.service';
import { toggleExpanded } from '../store/tree.actions';

@Component({ 
    selector: 'smart-tree-node',
    templateUrl: './smart-tree-node.component.html',
    styleUrls: ['./smart-tree-node.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartTreeNodeComponent implements OnInit {

    @Input()
    public nodeId: string = null; 

    public treeNode$: Observable<TreeNodeViewModel> = null; 

    constructor(private treeFacadeService: TreeFacadeService){}

    ngOnInit(): void {
        this.treeNode$ = this.treeFacadeService.getTreeNodeById$(this.nodeId);
    }

    toggleExpanded(nodeId: string){ 
        this.treeFacadeService.dispatch(toggleExpanded({ nodeId }));
    }
}
