import { useMemo } from "react";

export const useTotaltems = (totalItems) => {
    return useMemo(() => {
        let result = []
        for (let i = 0; i < totalItems; i++) {
            result.push(i + 1)
        }

        return result;
    }, [totalItems])
};