import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {TreeTableModule} from 'primeng/treetable';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TreeTableComponent } from './tree-table/tree-table.component';
import { TableComponent } from './table/table.component';     

@NgModule({
  declarations: [
    AppComponent,
    TreeTableComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    TreeTableModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
