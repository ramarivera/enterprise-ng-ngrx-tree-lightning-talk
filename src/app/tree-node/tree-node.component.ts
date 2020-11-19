import {Component, Input, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';
import {  TreeNodeViewModel } from '../store/tree.data';

@Component({ 
    selector: 'tree-node',
    templateUrl: './tree-node.component.html',
    styleUrls: ['./tree-node.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeComponent {
 
    @Input()
    treeNode: TreeNodeViewModel;

    @Output()
    onToggleExpandedEvent: EventEmitter<string> = new EventEmitter<string>(); 

    constructor(){}

    toggleExpanded(){
        this.onToggleExpandedEvent.emit(this.treeNode.id);
    }
}
