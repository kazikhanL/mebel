import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import styles from "./SliderSection.module.scss";
import SliderSectionProps from "./SliderSection.props";

import RigthArrowIcon from "@components/icons/RigthArrow";
import Button from "@components/ui/Button";

const SliderSection = ({ title = "", className = "", slides }: SliderSectionProps): JSX.Element => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 8.1,
            spacing: 20,
        },
        breakpoints: {
            "(max-width: 1250px)": {
                slides: { perView: 6.4, spacing: 20 },
            },
            "(max-width: 1024px)": {
                slides: { perView: 4.4, spacing: 20 },
            },
            "(max-width: 625px)": {
                slides: { perView: 2.8, spacing: 20 },
            },
            "(max-width: 425px)": {
                slides: { perView: 2.2, spacing: 20 },
            },
        },
    });

    const next = () => instanceRef.current?.next();
    const prev = () => instanceRef.current?.prev();

    const sectionStyle = `container ${styles.section} ${className}`;

    return (
        <section className={sectionStyle}>
            <h2>{title}</h2>
            <div className={styles.sliderWrapper}>
                <ul ref={sliderRef} className="keen-slider">
                    {slides.map((element, index) => <li className="keen-slider__slide" key={index}>{element}</li>)}
                </ul>
            </div>
            <div className={styles.controllers}>
                <Button className={styles.button} color="transparent" borderType="round" onClick={prev}>
                    <RigthArrowIcon className={styles.leftIcon} />
                </Button>
                <Button className={styles.button} color="transparent" borderType="round" onClick={next}>
                    <RigthArrowIcon />
                </Button>
            </div>
        </section>
    );
};

export default SliderSection;
