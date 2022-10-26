import { useRouter } from "next/router";

import styles from "./CardDescriptionSection.module.scss";
import CardDescriptionSectionProps from "./CardDescriptionSection.props";
import { IConfiguration } from "@interfaces/ICard";
import GallerySlider from "@components/elements/GallerySlider";
import DescriptionFooter from "./DescriptionFooter";
import MainInfo from "./MainInfo";
import ConfigurationsSlider from "./ConfigurationsSlider";
import ControllerPanel from "./ControllerPanel";
import Tags from "./Tags";

import cardsTest from "@data/cards.json";

const CardDescriptionSection = ({ className = "" }: CardDescriptionSectionProps): JSX.Element => {
    const router = useRouter();

    const testInfo = cardsTest[0];
    const testImages = cardsTest[0].images;

    const currentConfiguration: IConfiguration = {
        id: 1337, //testInfo.code
        image: testInfo.images[0],
        url: router.asPath,
    };

    const configSlides = [currentConfiguration, ...testInfo.configuration];

    return (
        <section className={`container ${styles.section} ${className}`}>
            <div className={styles.inner}>
                <div className={styles.mainInfo}>
                    <MainInfo info={testInfo} />
                    <ConfigurationsSlider congigurations={configSlides} />
                    <ControllerPanel info={testInfo} />
                    <Tags tags={testInfo.similarTags} />
                </div>
                <GallerySlider className={styles.gallery} images={testImages} />
            </div>
            <DescriptionFooter description={testInfo.description} characteristics={testInfo.characteristics} />
        </section >
    );
};

export default CardDescriptionSection;
