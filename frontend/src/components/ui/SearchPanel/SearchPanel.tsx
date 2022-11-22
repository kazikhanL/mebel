/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, useEffect, useState } from "react";

import styles from "./SearchPanel.module.scss";
import SearchPanelProps from "./SearchPanel.props";
import SearchIcon from "@components/icons/Search";
import apolloClient from "@graphql/index";
import getSearchSchema from "@graphql/cards/search";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import parseImage from "@utilities/parse/parseImage";
import translateTitle from "@utilities/translateTitle";
import SearchCard from "@components/cards/SearchCard";

const parseCards = (rawCards: any[]): PromoCardProps[] => {
    return rawCards.map((item: any) => {
        let categoryLink = "";
        let categoryMetaURL: string | null = null;
        let categoryMainTitle: string | null = null;
        const category: any = item.attributes.categories.data[0];

        if (category) {
            categoryMetaURL = category.attributes.meta.url ? category.attributes.meta.url as string : null;
            categoryMainTitle = category.attributes.promo.H1 as string;

            categoryLink = categoryMetaURL ? categoryMetaURL : translateTitle(categoryMainTitle);
        }

        return {
            id: Number(item.id),
            title: item.attributes.name as string,
            image: item.attributes.gallery.data.map((rawImage: any) => parseImage({ data: rawImage }))[0],
            link: `${categoryLink}/${item.id}`,
        };
    });
};

const SearchPanel = ({ className = "" }: SearchPanelProps): JSX.Element => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [cards, setCards] = useState<PromoCardProps[]>([]);

    const onChnageHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const str = event.target.value.trim();

        setSearchValue(str);
    };

    useEffect(() => {
        if (searchValue.length === 0) return;

        apolloClient
            .query({ query: getSearchSchema(searchValue) })
            .then((response) => response.data)
            .then((data) => parseCards(data.cards.data))
            .then((cards) => setCards(cards))
            .catch(() => setCards([]));

    }, [searchValue]);

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <input
                type="text"
                placeholder="Что вы ищите?"
                value={searchValue}
                onChange={onChnageHandler}
            />
            <SearchIcon className={styles.icon} />
            {cards.length === 0 ? null : (
                <ul className={styles.list}>
                    {cards.map((card) => (
                        <li key={card.id}>
                            <SearchCard {...card} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchPanel;
