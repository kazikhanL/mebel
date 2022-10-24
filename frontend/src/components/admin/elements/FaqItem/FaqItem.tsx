import { ChangeEvent } from "react";

import styles from "./FaqItem.module.scss";
import FaqItemProps from "./FaqItem.props";
import Input from "../Input";
import RichField from "../RichField";
import Button from "@components/ui/Button";
import DeleteIcon from "@components/icons/DeleteIcon";

const FaqItem = ({
    className = "",
    question,
    answer,
    id,
}: FaqItemProps): JSX.Element => {
    const onQuestionChange = (event: ChangeEvent<HTMLInputElement>): void => {
        // 
    };

    const onAnswerChange = (value: string): void => {
        // 
    };


    return (
        <div className={`${styles.wrapper} ${className}`}>
            <div>
                <Input
                    errorMessage="*обязательно"
                    value={question}
                    onChange={onQuestionChange}
                />
                <RichField content={answer} onChange={onAnswerChange} />
            </div>
            <div className={styles.buttonsWrapper}>
                <Button className={styles.button} borderType="square">обновить</Button>
                <Button className={styles.button} borderType="square" color="red">
                    <DeleteIcon />
                </Button>
            </div>
        </div>
    );
};

export default FaqItem;
