import styles from "./FaqItem.module.scss";
import FaqItemProps from "./FaqItem.props";
import Input from "../Input";
import RichField from "../RichField";

const FaqItem = (props: FaqItemProps): JSX.Element => {
    return (
        <div className={`${styles.wrapper}`}>
            <Input errorMessage="*обязательно" placeholder="вопрос..." />
            <RichField content="<p>ответ ...</p>" onChange={(s) => console.log(s)} />
        </div>
    );
};

export default FaqItem;
