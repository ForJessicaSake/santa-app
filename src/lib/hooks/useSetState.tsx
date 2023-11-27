import React, { useState } from "react";

const useSetState = <T extends object>(val: T) => {
    const [state, set] = useState<T>(val);

    const setState = React.useCallback(
        (patch: Partial<T> | ((patch: T) => Partial<T>)) => {
            if (typeof patch === "function") {
                set((prevState) => {
                    const newState = patch(prevState);
                    return {
                        ...prevState,
                        ...newState,
                    };
                });
            } else {
                set((prevState) => ({
                    ...prevState,
                    ...patch,
                }));
            }
        },
        []
    );

    const reset = React.useCallback(() => set(val), [val]);
    return [state, setState, reset] as const;
};

export default useSetState;
