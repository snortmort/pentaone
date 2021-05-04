import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
// import { TreeNode } from '../datafamily';
import {TreeNode} from 'primeng/api'
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
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
      tap(data => console.log(data)),
      // map(heroes => ({...heroes})),
      // tap(data => console.log(data))

      )
      .subscribe((heroes) => {
        this.data = heroes.map(data => ({...data, expanded:true}))
      });
  }


  // getHeroes(): void {
  //   this.heroService.getHeroes().pipe(tap(heros => console.log(heros)))
  //   .toPromise()
  //   .then(data => { return data; });
  // }



}