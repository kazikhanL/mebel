import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import styles from "./DescriptionSection.module.scss";
import DescriptionSectionProps from "./DescriptionSection.props";

import DescriptionCard from "@components/cards/DescriptionCard";
import DescriptionCardProps from "@components/cards/DescriptionCard/DescriptionCard.props";
import MapIcon from "@components/icons/tags/Map";
import DiamondIcon from "@components/icons/tags/Diamond";
import GlassesIcon from "@components/icons/tags/Glasses";

const DescriptionSection = ({ className = "", items }: DescriptionSectionProps): JSX.Element => {
    const cards: DescriptionCardProps[] = [
        { color: "main", icon: <MapIcon />, info: items[0] },
        { color: "ligth-green", icon: <DiamondIcon />, info: items[1] },
        { color: "purple", icon: <GlassesIcon />, info: items[2] },
    ];

    const [ref] = useKeenSlider<HTMLUListElement>({
        mode: "free",
        slides: { perView: 3, spacing: 10 },
        breakpoints: {
            "(max-width: 1124px)": {
                slides: { perView: 2.3, spacing: 10 },
            },
            "(max-width: 600px)": { disabled: true },
        },
    });

    const sectionStyleClasses = `${styles.section} ${className}`;

    return (
        <section className={sectionStyleClasses}>
            <div className="container">
                <ul ref={ref} className="keen-slider">
                    {cards.map((cardInfo) => (
                        <li key={cardInfo.info.id} className="keen-slider__slide">
                            <DescriptionCard {...cardInfo} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default DescriptionSection;
