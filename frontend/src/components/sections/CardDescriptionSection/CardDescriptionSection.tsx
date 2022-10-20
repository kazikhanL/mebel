import styles from "./CardDescriptionSection.module.scss";
import CardDescriptionSectionProps from "./CardDescriptionSection.props";
import GallerySlider from "@components/elements/GallerySlider";
import DescriptionFooter from "./DescriptionFooter";
import MainInfo from "./MainInfo";
import ControllerPanel from "./ControllerPanel";

import cardsTest from "@data/cards.json";

const CardDescriptionSection = ({ className = "" }: CardDescriptionSectionProps): JSX.Element => {
    const testInfo = cardsTest[0];
    const testImages = cardsTest[0].images;

    return (
        <section className={`container ${styles.section} ${className}`}>
            <div className={styles.inner}>
                <div className={styles.mainInfo}>
                    <MainInfo info={testInfo} />
                    <ControllerPanel info={testInfo} />
                </div>
                <GallerySlider className={styles.gallery} images={testImages} />
            </div>
            <DescriptionFooter description={testInfo.description} characteristics={testInfo.characteristics} />
        </section >
    );
};

export default CardDescriptionSection;
