import { useState } from "react";

const useToggle = (): [boolean, () => void] => {
    const [active, setActive] = useState<boolean>(false);

    const toggle = () => setActive((state) => !state);

    return [active, toggle];
};

export default useToggle;
