// export class Product {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: number;

//   constructor(id:number, title:string, description:string, price:number, image:string){
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.image = image;
//   }
// }

export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    gender: string;
    size:string[]
  }