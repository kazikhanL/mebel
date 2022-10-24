export interface IPromoCard {
    id: number;
    image: string;
    name: string;
    code: string;
    disposable: boolean;
    pricePrefix: string | null;
    price: number;
    secondPrice: number;
}

export interface ICharacteristics {
    length: string | null;
    width: string | null;
    height: string | null;
    color: string | null;
    material: string | null;
}

export interface ISimilarTag {
    id: number;
    name: string;
    url: string;
}

export interface IConfiguration {
    id: number;
    image: string;
    url: string;
}

export interface ICard {
    id: number;
    code: string;
    name: string;
    disposable: boolean;
    characteristics: ICharacteristics;
    description: string
    pricePrefix: null | string;
    price: number;
    secondDayPrice: number;
    images: string[];
    similarTags: null | ISimilarTag[]
    configuration: null | IConfiguration[];
}
