import { CategoryModel } from "./category.model";


export interface ProductModel {
    id: number,
    title:String,
    price:number,
    descripcion:string,
    images:[],
    category:CategoryModel,
    }