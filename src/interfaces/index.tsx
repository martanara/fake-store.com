export interface IProduct {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
}

export interface ICartProduct {
    item: IProduct;
    quantity: number;
}
