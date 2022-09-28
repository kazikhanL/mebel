import parse from "html-react-parser";

import styles from "./SeoSection.module.scss";
import SeoSectionProps from "./SeoSection.props";

const SeoSection = ({ mainTitle, content, image, className = "" }: SeoSectionProps): JSX.Element => {
    const sectionStyleClasses = `${styles.section} ${className}`;

    return (
        <section className={sectionStyleClasses}>
            <div className="container">
                <article>
                    <img
                        src={image}
                        alt={mainTitle}
                        width="560"
                        height="322"
                    />
                    <h2>{mainTitle}</h2>
                    {parse(content)}
                </article>
            </div>
        </section>
    );
};

export default SeoSection;
