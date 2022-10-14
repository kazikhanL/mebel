import styles from "./CatalogList.module.scss";
import CatalogListProps from "./CatalogList.props";
import Card from "@components/cards/Card";

const CatalogList = ({ className = "", cards }: CatalogListProps): JSX.Element => {
    return (
        <ul className={`${styles.list} ${className}`}>
            {cards.map((info) => (
                <li key={info.code}>
                    <Card info={info} />
                </li>
            ))}
        </ul>
    );
};

export default CatalogList;
