import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductComponent} from "./components/product/product.component";
import {CategoryComponent} from "./components/category/category.component";

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"categories",component:CategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
