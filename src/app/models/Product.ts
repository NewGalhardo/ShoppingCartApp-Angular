export class Product {
    _id!: string;
    image: string;
    title: string;
    description: string;
    section: string;
    price: number;
    inStock: number;

    constructor(image: string, title: string, description: string, section: string, price: number, inStock: number){        
        this.image = image;
        this.title = title;
        this.description = description;
        this.section = section;
        this.price = price;
        this.inStock = inStock;
    }
}