import { memo } from "react";
import { useRouter } from "next/router";

import styles from "./CatalogFilterPanel.module.scss";
import CatalogFilterPanelProps from "./CatalogFilterPanel.props";
import LineSlider from "@components/elements/LineSlider";
import Button from "@components/ui/Button";
import ButtonLink from "@components/ui/ButtonLink";
import Select from "@components/ui/Select";

const CatalogFilterPanel = ({
    className = "",
    filters,
    subCategories,
    selectOptons,
    currentSelectOption,
    onChangeSelect,
    onChangeFilter,
}: CatalogFilterPanelProps): JSX.Element => {
    const router = useRouter();

    const onAllHandler = (): void => {
        router.push(`/${router.query.catalog as string}`, undefined, { scroll: false });
        onChangeFilter(null);
    };

    const categoriesLinks = subCategories.map((category) => (
        <ButtonLink
            key={category.id}
            href={`${router.query.catalog}/${category.url}`}
            className={styles.link}
            color="dark-tab"
        >
            {category.name}
        </ButtonLink>
    ));

    categoriesLinks.unshift(
        <Button
            color="dark-tab"
            className={styles.link}
            onClick={onAllHandler}
        >
            Все
        </Button>);

    const fillterButtons = filters.map((filter) => (
        <Button
            key={filter}
            className={styles.button}
            color="dark-tab"
            onClick={onChangeFilter.bind(this, filter)}
        >
            {filter}
        </Button>
    ));

    return (
        <div className={`${className} ${styles.wrapper}`}>
            <LineSlider className={styles.filters} slides={[...categoriesLinks, ...fillterButtons]} />
            <Select defaultOption={currentSelectOption} options={selectOptons} onChange={onChangeSelect} />
        </div>
    );
};

export default memo(CatalogFilterPanel);
