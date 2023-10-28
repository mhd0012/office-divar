export interface DataProduct{
    title : string,
    id:number,
    image : string,
    price :  number,
    description : string,
    situation : string,
    product_images : {
        image : string
    }
    updated:string,
    created:string,
    category : [
        id : number,
        title : string,
        image : string,
        parent : string,
        main_cat : string
    ]
}