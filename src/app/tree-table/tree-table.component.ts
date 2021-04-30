import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TreeNode } from '../datafamily';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

  data: TreeNode[] = [];
  

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getData();
  }
  
  getData(): void {
    this.dataService.getData().pipe(tap(data => console.log(data)))
    .subscribe((heroes: TreeNode[]) => {
      this.data = heroes as TreeNode[];
    }
      )};
  

  // getHeroes(): void {
  //   this.heroService.getHeroes().pipe(tap(heros => console.log(heros)))
  //   .toPromise()
  //   .then(data => { return data; });
  // }



}