import { Injectable } from '@angular/core';
// import { TreeNode } from './datafamily';
import {TreeNode} from 'primeng/api'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private dataUrl = 'api/data';  // URL to web api


  constructor(  private http: HttpClient)  {}


    /** GET data from the server */
    getData(): Observable<TreeNode[]> {
      return this.http.get<TreeNode[]>(this.dataUrl);
    }
}
