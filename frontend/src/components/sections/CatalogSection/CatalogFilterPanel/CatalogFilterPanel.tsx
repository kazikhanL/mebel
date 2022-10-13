import { memo } from "react";

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
    const categoriesLinks = subCategories.map((category) => (
        <ButtonLink
            key={category.id}
            href={category.url}
            className={styles.link}
            color="dark-tab"
        >
            {category.name}
        </ButtonLink>
    ));

    categoriesLinks.unshift(<ButtonLink href="/" color="dark-tab" className={styles.link}>Все</ButtonLink>);

    const fillterButtons = filters.map((filter) => (
        <Button
            key={filter}
            className={styles.button}
            color="dark-tab"
            onChange={onChangeFilter.bind(this, filter)}
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
