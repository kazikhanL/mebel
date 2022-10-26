import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

import styles from "./ConfigurationsSlider.module.scss";
import ConfigurationsSliderProps from "./ConfigurationsSlider.props";

const ConfigurationsSlider = ({ className = "", congigurations }: ConfigurationsSliderProps): JSX.Element => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            perView: "auto",
            spacing: 0,
        },
        breakpoints: {
            "(max-width: 725px)": { slides: { perView: 5 } },
            "(max-width: 525px)": { slides: { perView: 4 } },
            "(max-width: 425px)": { slides: { perView: 3.7 } },
        }
    });

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <ul ref={sliderRef} className="keen-slider">
                {congigurations.map((item) => (
                    <li key={item.id} className="keen-slider__slide">
                        <Link href={item.url} prefetch={false}>
                            <a>
                                <img src={item.image} alt="slide" width="77" height="54" />
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConfigurationsSlider;
