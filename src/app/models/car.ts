export interface Car{       //apilerden gelen dataları sınırlandırmak için interface kullanılır
    carId: number;
    carName:string;
    brandName:string;
    colorName:string;
    categoryId: number;
    modelYear:string;
    dailyPrice:number;
    colorId:number;
    brandId:number;
    modelId:number;
}