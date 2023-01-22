import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';


const routes:Routes = [
  //rutas protegidas
  {path:'dashboard', component:PagesComponent,
children:[
  {path:'', component:DashboardComponent},
  {path:'catalogue', component: CatalogueComponent},
  {path: 'product', component:ProductComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
]
},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class PageRoutingModule { }
