import { CategoryModel } from "./category.model";


export interface ProductModel {
    id: number,
    title: String,
    price: number,
    descripcion: string,
    images: [],
    category: CategoryModel,
}


export interface CreateProduct extends Omit<ProductModel, 'id'| 'category'>{
    category: CategoryModel,
}

export interface UpdateProduct extends Partial<ProductModel>{
    category: CategoryModel,
}