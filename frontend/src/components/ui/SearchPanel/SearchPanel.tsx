import styles from "./SearchPanel.module.scss";
import SearchPanelProps from "./SearchPanel.props";

import SearchIcon from "@components/icons/Search";

const SearchPanel = ({ className = "" }: SearchPanelProps): JSX.Element => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <input type="text" placeholder="Что вы ищите?" />
            <SearchIcon className={styles.icon} />
        </div>
    );
};

export default SearchPanel;
