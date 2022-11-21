import parse from "html-react-parser";

import styles from "./DescriptionFooter.module.scss";
import DescriptionFooterProps from "./DescriptionFooter.props";

const DescriptionFooter = ({ className = "", description, characteristics }: DescriptionFooterProps): JSX.Element => {

    return (
        <footer className={`${styles.wrapper} ${className}`}>
            {description === null ? null : (
                <div className={styles.block}>
                    <p className={styles.title}>Описание</p>
                    {parse(description)}
                </div>
            )}

            {characteristics === null ? null : (
                <div className={styles.block}>
                    <p className={styles.title}>Характеристики</p>
                    {characteristics.size ? <p>ДШВ {characteristics.size}</p> : null}
                    {characteristics.color ? <p>Цвет: {characteristics.color}</p> : null}
                    {characteristics.material ? <p>Материал: {characteristics.material}</p> : null}
                </div>
            )}
        </footer>
    );
};

export default DescriptionFooter;
