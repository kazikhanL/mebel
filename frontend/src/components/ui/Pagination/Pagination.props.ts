interface PaginationProps {
    className?: string;
    pageSize: number;
    current: number;
    total: number;
    changeHandler: (index: number) => void;
    showMoreHandler: () => void;
}

export default PaginationProps;
