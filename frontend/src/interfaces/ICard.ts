export interface IPromoCard {
    id: number;
    image: string;
    title: string;
    code: string;
    disposable: boolean;
    pricePrefix: string | null;
    price: number;
    secondPrice: number;
}

export interface ICharacteristics {
    length: string;
    width: string;
    height: string;
    color: string;
    material: string;
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
}
