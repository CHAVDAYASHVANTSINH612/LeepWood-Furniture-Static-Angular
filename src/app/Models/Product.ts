
export class Product {
    Title!:string;
    SmallDescription!:string;
    LongDescription!:string;
    Price!: number;
    ImageUrls!: string[];
    Category!: string;
    InStock!: boolean;
    Rating!: number;
    Dimensions!: {
        length: number;
        width: number;
        height: number;
    };
    Material!: string;
    Color!: string;
    Weight!: number;
    SKU!: string;
}