import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductComponent} from "./components/product/product.component";
import {CategoryComponent} from "./components/category/category.component";
import {ProductAddComponent} from "./components/product-add/product-add.component";

const routes: Routes = [
  {path:"products",pathMatch:"full",component:ProductComponent},
  {path:"categories",component:CategoryComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
