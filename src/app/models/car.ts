export interface Car{       //apilerden gelen dataları sınırlandırmak için interface kullanılır
    carId: number;
    categoryId: number;
    modelYear:string;
    dailyPrice:number;
    description:string;
    colorId:number;
    brandId:number;
    modelId:number;
}