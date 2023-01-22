import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CatalogueComponent,
    ProductComponent,
  ],
  exports: [
    ProductComponent,
    CatalogueComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class PageModule { }
