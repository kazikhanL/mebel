import Pagination from "rc-pagination";

import styles from "./Pagination.module.scss";
import PaginationProps from "./Pagination.props";
import Button from "./../Button";
import RigthArrow from "@components/icons/RigthArrow";

const MyPagination = ({
    current,
    pageSize,
    total,
    changeHandler,
    showMoreHandler,
    className = "",
}: PaginationProps): JSX.Element => {
    const isLastPage = total > pageSize * current;

    return (
        <div className={`${className} ${styles.wrapper}`}>
            {isLastPage ? (
                <Button color="transparent" onClick={showMoreHandler} className={styles.showMoreBtn}>
                    Показать ещё
                </Button>
            ) : null}
            <Pagination
                current={current}
                total={total}
                pageSize={pageSize}
                prevIcon={<RigthArrow />}
                nextIcon={<RigthArrow />}
                jumpNextIcon="..."
                jumpPrevIcon="..."
                showLessItems={true}
                showTitle={false}
                hideOnSinglePage={true}
                onChange={changeHandler}
            />
        </div>
    );
};

export default MyPagination;
