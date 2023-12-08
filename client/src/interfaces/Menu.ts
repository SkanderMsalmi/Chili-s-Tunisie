import { Item } from "./Item";

export interface Menu {
    _id:string,
    name:string,

    items?:Item[]
}