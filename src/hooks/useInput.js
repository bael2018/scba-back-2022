import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useInput = (initial) => {
    const { valueCleaner } = useSelector((state) => state.product);
    const [value, setValue] = useState(initial);

    useEffect(() => {
        setValue("");
    }, [valueCleaner]);

    return {
        bind: () => {
            return {
                value,
                onChange: (e) => setValue(e.target.value),
            };
        },
        clearValue: () => {
            setValue("");
        },
        getValue: () => value,
    };
};

export { useInput };
