import { IStoreCard } from "@interfaces/ICard";
import priceToPretty from "./priceToPretty";

export function getDateDiff(startDate: Date, endDate: Date): number {
    const timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
}

function getFirstDaySum(cards: IStoreCard[]): number {
    return cards.reduce((sum, card) => sum + Number(card.price) * Number(card.count), 0);
}

function getSumWithoutFirstDay(cards: IStoreCard[], countDays: number): number {
    return cards.reduce((sum, card) => {
        const count = card.count;
        const days = countDays;
        const price = card.secondPrice;

        if (card.disposable) {
            return sum;
        }

        return price ? sum + price * count * days : sum + card.price * count * days;
    }, 0);
}

function getAllDaysSum(cards: IStoreCard[], diffDays = 1) {
    return getFirstDaySum(cards) + getSumWithoutFirstDay(cards, diffDays);
}

export default function getTotalSum(cards: IStoreCard[], startDate: null | Date = null, endDate: null | Date = null): string {
    if (startDate === null || endDate === null) {
        return priceToPretty(getFirstDaySum(cards));
    } else {
        const diffDays = getDateDiff(startDate, endDate);

        if (diffDays <= 0) {
            return priceToPretty(getFirstDaySum(cards));
        } else {
            return priceToPretty(getAllDaysSum(cards, diffDays));
        }
    }
}

export const getTotalSumWithoutDiscount = (cards: IStoreCard[], days: number): number => {
    const total = cards.reduce((sum, card) => sum + Number(card.price) * Number(card.count), 0);

    return total * days;
};
