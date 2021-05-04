import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
// import { TreeNode } from '../datafamily';
import {TreeNode} from 'primeng/api'
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {TreeDragDropService} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  providers: [TreeDragDropService,MessageService],
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

  data: TreeNode[] = [];
  data2: TreeNode[] = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getData();

  
  }

  getData(): void {
    this.dataService.getData().pipe(
      tap(folders => console.log(folders)),
      // map(folders => (folders.map(data => ({...data, expanded:true})))),
      // map(folders => (folders.map(data => ({...data, label:data.data.name})))),
      tap(folders => console.log(folders))

      )
      .subscribe((data) => {
        this.data = data
      });
  }

  expandAll(){
    this.data.forEach( node => {
        this.expandRecursive(node, true);
    } );
  }

  collapseAll(){
      this.data.forEach( node => {
          this.expandRecursive(node, false);
      } );
  }

  private expandRecursive(node:TreeNode, isExpand:boolean){
    if (node.children){node.expanded = isExpand;}
    
    node.label = node.data.name
    if (node.children){
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    };
  }

}