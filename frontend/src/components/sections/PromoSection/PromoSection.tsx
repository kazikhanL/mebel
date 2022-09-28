import { CSSProperties } from "react";

import styles from "./PromoSection.module.scss";
import PromoSectionProps from "./PromoSection.props";

const PromoSection = ({
    image,
    title,
    subTitle,
    className = "",
    isMainPage = false,
}: PromoSectionProps): JSX.Element => {
    const sectionStyleClasses = `${styles.section} ${className}`;

    const descriptionStyleClasses = `
        ${styles.description}
        ${isMainPage ? styles.mainDescription : ""}
    `;
    
    const sectionBackgroundStyles: CSSProperties = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
    };

    return (
        <section className={sectionStyleClasses} style={sectionBackgroundStyles}>
            <img
                src={image}
                alt={title}
                width="1440"
                height="440"
                className={styles.image}
            />
            <div className="container">
                <div className={descriptionStyleClasses}>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
