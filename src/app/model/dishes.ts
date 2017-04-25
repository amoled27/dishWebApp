export class Dish{
  constructor(
    public id?:Date,
    public menu_item_name?:string,
    public menu_item_description?:string,
    public menu_item_price?:string,
    public disabled?:boolean,
    public special?:boolean,
    public vegetarian?:boolean,
    public vegan?:boolean,
    public kosher?:boolean,
    public halal?:boolean,
    public gluten_free?:boolean,
    public menu_item_calories?:number,
    public menu_item_heat_index?:number

  ) {}
}
