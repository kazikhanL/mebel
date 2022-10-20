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
                    {characteristics.length === null ? null : (
                        <p>
                            ДШВ {characteristics.length}
                            {characteristics.width ? <> x {characteristics.width}</> : null}
                            {characteristics.height ? <> x {characteristics.height}</> : null}
                        </p>
                    )}
                    {characteristics.color ? <p>Цвет: {characteristics.color}</p> : null}
                    {characteristics.material ? <p>Материал: {characteristics.material}</p> : null}
                </div>
            )}
        </footer>
    );
};

export default DescriptionFooter;
