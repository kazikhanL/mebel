import styles from "./CardDescriptionSection.module.scss";
import CardDescriptionSectionProps from "./CardDescriptionSection.props";
import { ICharacteristics, IConfiguration } from "@interfaces/ICard";
import GallerySlider from "@components/elements/GallerySlider";
import DescriptionFooter from "./DescriptionFooter";
import MainInfo from "./MainInfo";
import ConfigurationsSlider from "./ConfigurationsSlider";
import ControllerPanel from "./ControllerPanel";
import Tags from "./Tags";
import { CardConfigurationType } from "@utilities/parse/cards/parseFullCards";

const CardDescriptionSection = ({ className = "", cardInfo }: CardDescriptionSectionProps): JSX.Element => {
    const currentConfiguration: CardConfigurationType = {
        id: cardInfo.id,
        image: cardInfo.gallery[0],
        meta: {
            url: cardInfo.meta.url,
        },
        code: cardInfo.code,
        name: cardInfo.name,
    };

    const configurations = cardInfo.configurations ? [currentConfiguration, ...cardInfo.configurations] : [];

    const cardCharacteristics: ICharacteristics = {
        size: cardInfo.size,
        color: cardInfo.color,
        material: cardInfo.material,
    };

    return (
        <section className={`container ${styles.section} ${className}`}>
            <div className={styles.inner}>
                <div className={styles.mainInfo}>
                    <MainInfo info={cardInfo} />
                    {cardInfo.configurations ? <ConfigurationsSlider congigurations={configurations} /> : null}
                    <ControllerPanel info={cardInfo} />
                    {cardInfo.similarTags ? <Tags tags={cardInfo.similarTags} /> : null}
                </div>
                <GallerySlider className={styles.gallery} images={cardInfo.gallery} />
            </div>
            <DescriptionFooter description={cardInfo.description} characteristics={cardCharacteristics} />
        </section >
    );
};

export default CardDescriptionSection;
