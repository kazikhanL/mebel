import { memo, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import styles from "./LineSlider.module.scss";
import LineSliderProps from "./LineSlider.props";
import RigthArrowIcon from "@components/icons/RigthArrow";
import Button from "@components/ui/Button";

const LineSlider = ({ className = "", slides }: LineSliderProps): JSX.Element => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "free-snap",
        loop: false,
        slides: {
            perView: "auto",
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const nextSlide = (): void => instanceRef.current?.next();
    const prevSlide = (): void => instanceRef.current?.prev();

    const isFirstSlide = currentSlide === 0;
    const isLastSlide = instanceRef.current ? instanceRef.current.track.details.maxIdx === currentSlide : false;
    const isLineBig = instanceRef.current ? instanceRef.current.track.details.maxIdx > 0 : false;

    return (
        <div className={`${styles.wrapper} ${className}`}>
            {isLineBig && !isFirstSlide ? (
                <Button
                    borderType="round"
                    color="transparent"
                    className={`${styles.button} ${styles.buttonLeft}`}
                    onClick={prevSlide}
                >
                    <RigthArrowIcon />
                </Button>
            ) : null}
            <ul ref={sliderRef} className="keen-slider">
                {isFirstSlide ? null : <li className={`${styles.shadowDecor} ${styles.decorLeft}`} />}
                {slides.map((element, index) => (
                    <li
                        key={index}
                        className="keen-slider__slide"
                        style={{ width: "max-content", minWidth: "max-content" }}
                    >
                        {element}
                    </li>
                ))}
                <div className={`keen-slider__slide ${styles.emptySlide}`} />
                {isLastSlide ? null : <li className={styles.shadowDecor} />}
            </ul>
            {isLineBig && !isLastSlide ? (
                <Button
                    borderType="round"
                    color="transparent"
                    className={styles.button}
                    onClick={nextSlide}
                >
                    <RigthArrowIcon />
                </Button>
            ) : null}
        </div>
    );
};

export default memo(LineSlider);
