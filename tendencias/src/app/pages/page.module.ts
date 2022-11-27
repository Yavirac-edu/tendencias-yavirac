import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        ProductComponent,
        CatalogueComponent,
        DashboardComponent,
        PagesComponent,
    ],
    exports: [
        ProductComponent,
        CatalogueComponent,
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class PageModule { }