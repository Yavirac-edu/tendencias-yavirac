import { ProductModel } from "./product.model";

export interface CategoryModel {
    id: number,
    name:string,
    product: ProductModel;
    }