import styles from "./IconTag.module.scss";
import IconTagProps from "./IconTag.props";

const IconTag = ({ color, children, className = "" }: IconTagProps): JSX.Element => {
    const tagStyleClasses = `${styles.tag} ${styles[color]} ${className}`;

    return (
        <div className={tagStyleClasses}>
            {children}
        </div>
    );
};

export default IconTag;
