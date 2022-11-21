import { SelectOption } from "@components/ui/Select/Select.props";
import ICatalogLink from "@interfaces/ICatalogLink";

interface CatalogFilterPanelProps {
    className?: string;
    subCategories: ICatalogLink[];
    filters: string[];
    onChangeFilter: (filter: string | null) => void;
    selectOptons: SelectOption[]
    currentSelectOption: SelectOption;
    onChangeSelect: (option: SelectOption) => void;
}

export default CatalogFilterPanelProps;
