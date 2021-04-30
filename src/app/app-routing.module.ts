import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TreeTableComponent } from "./tree-table/tree-table.component";
import { TableComponent } from "./table/table.component";


const routes: Routes = [
  { path: "treetable", component: TreeTableComponent },
  { path: "table", component: TableComponent },
  { path: "", redirectTo: "/treetable", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}