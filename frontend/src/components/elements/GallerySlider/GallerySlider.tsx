import { MutableRefObject } from "react";
import "keen-slider/keen-slider.min.css";
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react";

import styles from "./GallerySlider.module.scss";
import GallerySliderProps from "./GallerySlider.props";


function ThumbnailPlugin(mainRef: MutableRefObject<KeenSliderInstance | null>): KeenSliderPlugin {
    return (slider) => {
        const removeActive = () => {
            slider.slides.forEach((slide) => {
                slide.classList.remove(styles.active);
            });
        };

        const addActive = (index: number) => {
            slider.slides[index].classList.add(styles.active);
        };

        const addClickEvents = () => {
            slider.slides.forEach((slide, index) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(index);
                });
            });
        };

        slider.on("created", () => {
            if (!mainRef.current) return;
            addActive(slider.track.details.rel);
            addClickEvents();
            mainRef.current.on("animationStarted", (main) => {
                removeActive();
                const next = main.animator.targetIdx || 0;
                addActive(main.track.absToRel(next));
                slider.moveToIdx(next);
            });
        });
    };
}

const GallerySlider = ({ className = "", images }: GallerySliderProps): JSX.Element => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({ initial: 0 });

    const [thumbnailRef] = useKeenSlider<HTMLUListElement>(
        {
            initial: 0,
            slides: {
                perView: 4.7,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    );

    const isOnlyOneImage = images.length === 1;

    if (isOnlyOneImage) {
        return (
            <img
                src={images[0]}
                alt="card slide"
                width="463"
                height="322"
                className={`${styles.bigSlide} ${className}`}
            />
        );
    }

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <ul ref={sliderRef} className="keen-slider">
                {images.map((src) => (
                    <img
                        key={src}
                        src={src}
                        alt="card slide"
                        width="463"
                        height="322"
                        className={`keen-slider__slide ${styles.bigSlide}`}
                    />
                ))}
            </ul>

            <ul ref={thumbnailRef} className="keen-slider">
                {images.map((src) => (
                    <img
                        key={src}
                        src={src}
                        alt="card slide"
                        width="77"
                        height="54"
                        className={`keen-slider__slide ${styles.smallSlide}`}
                    />
                ))}
            </ul>
        </div>
    );
};

export default GallerySlider;
