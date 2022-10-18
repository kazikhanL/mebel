import { useState } from "react";

type ControllerReturnType = [boolean, () => void, () => void];

const useControllers = (): ControllerReturnType => {
    const [active, setActive] = useState<boolean>(false);

    const activate = () => setActive(true);
    const deactivate = () => setActive(false);

    return [active, activate, deactivate];
};

export default useControllers;
